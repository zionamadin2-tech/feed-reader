import {
  data,
  feed,
  getMatchingId,
  getSavedFeeds,
  toggleSavedFeed,
  renderFeedItems,
  renderCategories,
} from "./data.js";

const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const listOrder = document.getElementById("list-order");
const gridOrder = document.getElementById("grid-order");
const activeList = document.querySelector(".active-list");
const activeGrid = document.querySelector(".active-grid");
const allFeedCount = document.querySelector(".all-item .bookmark-num");
const savedFeedCount = document.querySelector(".saved .bookmark-num");
const unreadAllBadge = document.querySelector(".unread-all p");
const feedLists = document.querySelectorAll(".feed-list");
const searchInput = document.querySelector(".search-input");
const markAllBtn = document.querySelector(".mark-all");
const refreshBtn = document.querySelector(".refresh");
const allItemBtn = document.querySelector(".all-item");
const savedBtn = document.querySelector(".saved");
const feedHeaderText = document.querySelector(".all-item-text");

/*---------- APP STATE ----------*/
// Tracks the current view & filter so the UI can be re-rendered in one place
const state = {
  view: "all", // "all" | "saved" | "category" | "feed"
  filterCategory: null, // category name when view === "category"
  filterFeedId: null, // feed id when view === "feed"
  searchQuery: "", // current search text
};

/*---------- THEME ----------*/
const savedTheme = localStorage.getItem("theme");
const deviceIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const startTheme = savedTheme || (deviceIsDark ? "dark" : "light");
root.setAttribute("data-theme", startTheme);

themeToggle?.addEventListener("click", () => {
  const newTheme =
    root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

/*---------- SIDEBAR ----------*/
const isMobile = window.matchMedia("(max-width: 36rem)").matches;
const savedSidebar = localStorage.getItem("sidebar");

if (isMobile ? savedSidebar !== "open" : savedSidebar === "collapsed") {
  document.body.classList.add("sidebar-collapsed");
}

document.addEventListener("click", (e) => {
  const isMobileNow = window.matchMedia("(max-width: 36rem)").matches;
  const isOpen = !document.body.classList.contains("sidebar-collapsed");

  const clickedToggle = e.target.closest(".sidebar-toggle-icon");
  const clickedClose = e.target.closest(".cancel-icon");
  const clickedInside = e.target.closest(".side-bar");

  if (clickedToggle) {
    const collapsed = document.body.classList.toggle("sidebar-collapsed");
    localStorage.setItem("sidebar", collapsed ? "collapsed" : "open");
    return;
  }

  if (clickedClose || (isMobileNow && isOpen && !clickedInside)) {
    document.body.classList.add("sidebar-collapsed");
    localStorage.setItem("sidebar", "collapsed");
  }
});

/*---------- LAYOUT ORDER (GRID / LIST) ----------*/
gridOrder?.addEventListener("click", () => {
  feedLists.forEach((e) => e.classList.add("layout-grid"));
  activeGrid?.classList.add("clicked");
  activeList?.classList.remove("clicked");
});

listOrder?.addEventListener("click", () => {
  feedLists.forEach((e) => e.classList.remove("layout-grid"));
  activeList?.classList.add("clicked");
  activeGrid?.classList.remove("clicked");
});

/*---------- INITIAL RENDER ----------*/
const totalItems = renderFeedItems();
renderCategories();

// Re-initialize Lucide icons for all dynamically injected elements
if (window.lucide) {
  lucide.createIcons();
}

/*---------- COUNTS ----------*/
function updateAllCounts() {
  const unreadVisible = document.querySelectorAll(
    ".feed-body .feed.unread:not(.hidden-by-filter):not(.hidden-by-search)",
  );
  if (allFeedCount) allFeedCount.textContent = totalItems;
  if (unreadAllBadge)
    unreadAllBadge.textContent = `${unreadVisible.length} unread`;

  const saved = getSavedFeeds();
  if (savedFeedCount) savedFeedCount.textContent = saved.length;
}

updateAllCounts();

/*---------- SAVED / BOOKMARK INTERACTION ----------*/
document.addEventListener("click", (e) => {
  const saveContainer = e.target.closest(".saved-container");
  if (!saveContainer) return;

  const { feedId } = saveContainer.dataset;
  if (!feedId) return;

  const updatedSaved = toggleSavedFeed(feedId);
  const isNowSaved = updatedSaved.includes(feedId);

  // Update all instances on the page
  document
    .querySelectorAll(`.saved-container[data-feed-id="${feedId}"]`)
    .forEach((container) => {
      container.classList.toggle("saved-active", isNowSaved);
      container.setAttribute(
        "title",
        isNowSaved ? "Remove from saved" : "Save for later",
      );
    });

  updateAllCounts();

  // If we're in saved view, re-apply the filter so unsaved items disappear
  if (state.view === "saved") {
    applyFilters();
  }
});

/*============================================================
  FEATURE 2: SEARCH & CATEGORY / FEED FILTERING
============================================================*/

/**
 * applyFilters()
 * The single function that hides / shows every .feed card based on
 * the current state (view, filterCategory, filterFeedId, searchQuery).
 *
 * It uses two CSS classes:
 *   .hidden-by-filter  – hidden because of view / sidebar filter
 *   .hidden-by-search  – hidden because the search query doesn't match
 */
function applyFilters() {
  const allCards = document.querySelectorAll(".feed-body .feed");
  const saved = getSavedFeeds();
  const query = state.searchQuery.toLowerCase().trim();

  allCards.forEach((card) => {
    const cardFeedId = card.dataset.feedId;
    const cardText = card.textContent.toLowerCase();

    // --- Filter pass ---
    let passesFilter = true;

    if (state.view === "saved") {
      passesFilter = saved.includes(cardFeedId);
    } else if (state.view === "category") {
      // Look up which category this feed belongs to
      const feedMeta = getMatchingId(cardFeedId);
      if (feedMeta) {
        const belongsToCategory = feed.some(
          (cat) =>
            cat.name === state.filterCategory &&
            cat.feeds.some((f) => f.id === cardFeedId),
        );
        passesFilter = belongsToCategory;
      } else {
        passesFilter = false;
      }
    } else if (state.view === "feed") {
      passesFilter = cardFeedId === state.filterFeedId;
    }
    // view === "all" → passesFilter stays true

    card.classList.toggle("hidden-by-filter", !passesFilter);

    // --- Search pass ---
    let passesSearch = true;
    if (query) {
      passesSearch = cardText.includes(query);
    }
    card.classList.toggle("hidden-by-search", !passesSearch);
  });

  // Update the header text to reflect current view
  if (feedHeaderText) {
    if (state.view === "saved") {
      feedHeaderText.textContent = "SAVED";
    } else if (state.view === "category") {
      feedHeaderText.textContent = state.filterCategory.toUpperCase();
    } else if (state.view === "feed") {
      const meta = getMatchingId(state.filterFeedId);
      feedHeaderText.textContent = meta
        ? meta.title.toUpperCase()
        : "ALL ITEMS";
    } else {
      feedHeaderText.textContent = "ALL ITEMS";
    }
  }

  // Update sidebar active states
  updateSidebarActive();
  updateAllCounts();
}

/**
 * Highlights the currently selected sidebar item
 */
function updateSidebarActive() {
  // Clear all active states
  allItemBtn?.classList.remove("sidebar-active");
  savedBtn?.classList.remove("sidebar-active");
  document.querySelectorAll(".category-header").forEach((h) => {
    h.classList.remove("sidebar-active");
  });
  document.querySelectorAll(".genre").forEach((g) => {
    g.classList.remove("sidebar-active");
  });

  if (state.view === "all") {
    allItemBtn?.classList.add("sidebar-active");
  } else if (state.view === "saved") {
    savedBtn?.classList.add("sidebar-active");
  } else if (state.view === "category") {
    const header = document.querySelector(
      `.category-group[data-category="${state.filterCategory}"] .category-header`,
    );
    header?.classList.add("sidebar-active");
  } else if (state.view === "feed") {
    const genre = document.querySelector(
      `.genre[data-feed-id="${state.filterFeedId}"]`,
    );
    genre?.classList.add("sidebar-active");
  }
}

/*---------- SEARCH INPUT ----------*/
searchInput?.addEventListener("input", (e) => {
  state.searchQuery = e.target.value;
  applyFilters();
});

// "/" keyboard shortcut to focus search
document.addEventListener("keydown", (e) => {
  if (
    e.key === "/" &&
    !e.ctrlKey &&
    !e.metaKey &&
    document.activeElement !== searchInput
  ) {
    e.preventDefault();
    searchInput?.focus();
  }
  // Escape clears search and blurs
  if (e.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    state.searchQuery = "";
    applyFilters();
    searchInput.blur();
  }
});

/*---------- SIDEBAR: "All items" ----------*/
allItemBtn?.addEventListener("click", () => {
  state.view = "all";
  state.filterCategory = null;
  state.filterFeedId = null;
  applyFilters();
});

/*---------- SIDEBAR: "Saved" ----------*/
savedBtn?.addEventListener("click", () => {
  state.view = "saved";
  state.filterCategory = null;
  state.filterFeedId = null;
  applyFilters();
});

/*---------- SIDEBAR: Category headers ----------*/
document.addEventListener("click", (e) => {
  const categoryHeader = e.target.closest(".category-header");
  if (!categoryHeader) return;

  // Don't trigger if a child .genre was clicked
  if (e.target.closest(".genre")) return;

  const categoryGroup = categoryHeader.closest(".category-group");
  const categoryName = categoryGroup?.dataset.category;
  if (!categoryName) return;

  state.view = "category";
  state.filterCategory = categoryName;
  state.filterFeedId = null;
  applyFilters();
});

/*---------- SIDEBAR: Individual feed (genre) ----------*/
document.addEventListener("click", (e) => {
  const genre = e.target.closest(".genre");
  if (!genre) return;

  const feedId = genre.dataset.feedId;
  if (!feedId) return;

  state.view = "feed";
  state.filterCategory = null;
  state.filterFeedId = feedId;
  applyFilters();
});

/*============================================================
  FEATURE 3: MARK ALL READ & REFRESH
============================================================*/

/*---------- MARK ALL READ ----------*/
markAllBtn?.addEventListener("click", () => {
  const visibleCards = document.querySelectorAll(
    ".feed-body .feed.unread:not(.hidden-by-filter):not(.hidden-by-search)",
  );
  visibleCards.forEach((card) => {
    card.classList.remove("unread");
    const dot = card.querySelector(".unread-dot");
    if (dot) dot.style.display = "none";
  });
  updateAllCounts();
});

/*---------- REFRESH ----------*/
refreshBtn?.addEventListener("click", () => {
  const icon = refreshBtn.querySelector(".refresh-icon");
  if (icon) icon.classList.add("spin");

  // Re-render everything
  renderFeedItems();
  renderCategories();
  if (window.lucide) lucide.createIcons();
  applyFilters();
  updateAllCounts();

  setTimeout(() => {
    if (icon) icon.classList.remove("spin");
  }, 600);
});

// Set initial sidebar active state
applyFilters();

// REMOVED: everything that used to be below here. It was a second, identical
// copy of the search, sidebar, mark-all and refresh code, which made every
// click and keypress run twice.
