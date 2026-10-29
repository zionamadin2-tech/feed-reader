export const data = [
  {
    categories: [
      {
        name: "Frontend",
        feeds: [
          {
            id: "2d3dbu2b",
            letter: "C",
            title: "CSS-Tricks",
            feedUrl: "https://css-tricks.com/feed/",
            siteUrl: "https://css-tricks.com/",
            description:
              "Tips, Tricks, and Techniques on using Cascading Style Sheets.",
            format: "rss2",
            color: "#e5472f",
          },
          {
            id: "ib3isi2",
            letter: "S",
            title: "Smashing Magazine",
            feedUrl: "https://www.smashingmagazine.com/feed/",
            siteUrl: "https://www.smashingmagazine.com/",
            description: "For web designers and developers.",
            format: "rss2",
            color: "#d33a2c",
          },
          {
            id: "2hsbb28h",
            letter: "J",
            title: "Josh W. Comeau",
            feedUrl: "https://www.joshwcomeau.com/rss.xml",
            siteUrl: "https://www.joshwcomeau.com/",
            description: "Friendly tutorials for developers.",
            format: "rss2",
            color: "#4f46e5",
          },
          {
            id: "i9h1b88",
            letter: "K",
            title: "Kent C. Dodds",
            feedUrl: "https://kentcdodds.com/blog/rss.xml",
            siteUrl: "https://kentcdodds.com/",
            description:
              "Helping people make the world a better place through quality software.",
            format: "rss2",
            color: "#2563eb",
          },
          {
            id: "x20x0j01",
            letter: "W",
            title: "web.dev",
            feedUrl: "https://web.dev/feed.xml",
            siteUrl: "https://web.dev/",
            description: "Building a better web, together.",
            format: "atom",
            notes: "Atom format feed",
            color: "#0b7bc0",
          },
          {
            id: "1i1o9jw9",
            letter: "M",
            title: "MDN Blog",
            feedUrl: "https://developer.mozilla.org/en-US/blog/rss.xml",
            siteUrl: "https://developer.mozilla.org/en-US/blog/",
            description: "The MDN Web Docs blog.",
            format: "rss2",
            color: "#1b1b1b",
          },
        ],
      },
      {
        name: "Design",
        feeds: [
          {
            id: "1i1w99h90",
            letter: "S",
            title: "Sidebar.io",
            feedUrl: "https://sidebar.io/feed.xml",
            siteUrl: "https://sidebar.io/",
            description: "The five best design links, every day.",
            format: "atom",
            notes: "High frequency — posts daily",
            color: "#8b5cf6",
          },
          {
            id: "7vb809bi",
            letter: "N",
            title: "Nielsen Norman Group",
            feedUrl: "https://www.nngroup.com/feed/rss/",
            siteUrl: "https://www.nngroup.com/",
            description:
              "Evidence-based user experience research, training, and consulting.",
            format: "rss2",
            color: "#059669",
          },
          {
            id: "87f89g89h8",
            letter: "F",
            title: "Figma Blog",
            feedUrl: "https://www.figma.com/blog/feed/",
            siteUrl: "https://www.figma.com/blog/",
            description:
              "Stories about how products are designed at Figma and beyond.",
            format: "rss2",
            color: "#1a1d21",
          },
          {
            id: "78t98hi",
            letter: "A",
            title: "A List Apart",
            feedUrl: "https://alistapart.com/main/feed/",
            siteUrl: "https://alistapart.com/",
            description: "For people who make websites.",
            format: "rss2",
            notes: "Infrequent publishing — may appear stale",
            color: "#333333",
          },
          {
            id: "9b8287g",
            letter: "U",
            title: "UX Collective",
            feedUrl: "https://uxdesign.cc/feed",
            siteUrl: "https://uxdesign.cc/",
            description:
              "Curated stories on user experience, usability, and product design.",
            format: "rss2",
            notes: "Medium-based feed — may contain Medium-specific markup",
            color: "#2563eb",
          },
        ],
      },
      {
        name: "Backend & DevOps",
        feeds: [
          {
            id: "87f7y91",
            letter: "C",
            title: "Cloudflare Blog",
            feedUrl: "https://blog.cloudflare.com/rss/",
            siteUrl: "https://blog.cloudflare.com/",
            description: "The Cloudflare Blog.",
            format: "rss2",
            notes: "Rich HTML content with images and code blocks",
            color: "#f38020",
          },
          {
            id: "9h29iwj9j",
            letter: "V",
            title: "Vercel Blog",
            feedUrl: "https://vercel.com/atom",
            siteUrl: "https://vercel.com/blog",
            description: "Updates from Vercel.",
            format: "atom",
            notes: "Atom format — test Atom parsing alongside RSS",
            color: "#000000",
          },
          {
            id: "87uuhkb9",
            letter: "G",
            title: "The GitHub Blog",
            feedUrl: "https://github.blog/feed/",
            siteUrl: "https://github.blog/",
            description: "Updates, ideas, and inspiration from GitHub.",
            format: "rss2",
            color: "#24292f",
          },
          {
            id: "ieiwnsiq1ww",
            letter: "N",
            title: "Netlify Blog",
            feedUrl: "https://www.netlify.com/blog/index.xml",
            siteUrl: "https://www.netlify.com/blog/",
            description: "News and posts from Netlify.",
            format: "rss2",
            color: "#00c7b7",
          },
        ],
      },
      {
        name: "General Tech",
        feeds: [
          {
            id: "e1u2103e",
            letter: "P",
            title: "The Pragmatic Engineer",
            feedUrl: "https://blog.pragmaticengineer.com/rss/",
            siteUrl: "https://blog.pragmaticengineer.com/",
            description:
              "Observations across the software engineering industry.",
            format: "rss2",
            notes: "Some items may be paywalled — feed provides excerpt only",
            color: "#e05a47",
          },
          {
            id: "19hb28",
            letter: "H",
            title: "Hacker News Best",
            feedUrl: "https://hnrss.org/best",
            siteUrl: "https://news.ycombinator.com/",
            description: "Best stories on Hacker News.",
            format: "rss2",
            notes:
              "Very high volume — 100+ items. Good for testing pagination/virtualization. Descriptions often contain HTML.",
            color: "#ff6600",
          },
        ],
      },
      {
        name: "AI & ML",
        feeds: [
          {
            id: "10j2b3h8",
            letter: "S",
            title: "Simon Willison's Weblog",
            feedUrl: "https://simonwillison.net/atom/everything/",
            siteUrl: "https://simonwillison.net/",
            description:
              "Simon Willison's weblog, covering AI, Python, and web development.",
            format: "atom",
            notes:
              "Atom format with full HTML content. Very prolific — many items.",
            color: "#2b5c8f",
          },
          {
            id: "0912b89182",
            letter: "H",
            title: "Hugging Face Blog",
            feedUrl: "https://huggingface.co/blog/feed.xml",
            siteUrl: "https://huggingface.co/blog",
            description: "The latest news from Hugging Face.",
            format: "atom",
            color: "#ffac33",
          },
        ],
      },
    ],
  },
  {
    edgeCases: [
      {
        title: "Defunct Tech Blog (dead feed)",
        feedUrl: "https://example.com/this-feed-does-not-exist.xml",
        siteUrl: "https://example.com/",
        description: "Intentionally dead URL for testing error handling.",
        format: "unknown",
        edgeCase: "dead_url",
      },
      {
        title: "Duplicate — Simon Willison",
        feedUrl: "https://simonwillison.net/atom/everything/",
        siteUrl: "https://simonwillison.net/",
        description: "Duplicate of the Simon Willison feed in the AI category.",
        format: "atom",
        edgeCase: "duplicate",
      },
    ],
  },
];

export const feed = data[0].categories;

export function getCategorySlug(categoryName) {
  const slugMap = {
    Frontend: "frontend",
    Design: "design",
    "Backend & DevOps": "backend",
    "General Tech": "general-tech",
    "AI & ML": "ai-ml",
  };
  return (
    slugMap[categoryName] ||
    categoryName.toLowerCase().replace(/[^a-z0-9]+/g, "-")
  );
}

export function getSavedFeeds() {
  try {
    return JSON.parse(localStorage.getItem("savedFeeds")) || [];
  } catch {
    return [];
  }
}

export function toggleSavedFeed(feedId) {
  const saved = getSavedFeeds();
  const index = saved.indexOf(feedId);
  if (index > -1) {
    saved.splice(index, 1);
  } else {
    saved.push(feedId);
  }
  localStorage.setItem("savedFeeds", JSON.stringify(saved));
  return saved;
}

export function renderFeedItems() {
  const feedLists = document.querySelectorAll(".feed-list");
  if (!feedLists.length) return 0;

  // Clear existing items in all feed containers
  feedLists.forEach((list) => {
    list.innerHTML = "";
  });

  const savedFeeds = getSavedFeeds();
  let count = 1;
  let allItems = 0;

  feed.forEach((categoryGroup) => {
    categoryGroup.feeds.forEach((e) => {
      const feedColor = e.color || "#2563eb";
      const isSaved = savedFeeds.includes(e.id);
      const savedClass = isSaved ? "saved-active" : "";

      const HTML = `
        <div class="feed unread" data-feed-id="${e.id}">
          <div class="saved-container ${savedClass}" data-feed-id="${e.id}" title="${isSaved ? "Remove from saved" : "Save for later"}">
            <i data-lucide="bookmark" class="saved-feed"></i>
          </div>
          <span class="unread-dot" aria-hidden="true"></span>
          <div class="feed-content">
            <div class="feed-name">
              <span class="favicon" style="background-color: ${feedColor};">${e.letter}</span>
              <span class="feed-name-title">${e.title}</span>
              <span aria-hidden="true">&middot;</span>
              <time class="time">2h ago</time>
            </div>
            <h3 class="feed-title">
              <a href="${e.siteUrl}" target="_blank" rel="noopener noreferrer">${e.description}</a>
            </h3>
            <span class="tag" style="background-color: ${feedColor}; color: #ffffff;">${categoryGroup.name}</span>
          </div>
        </div>`;

      const target = count < 10 ? feedLists[0] : feedLists[1] || feedLists[0];
      target.insertAdjacentHTML("beforeend", HTML);
      count++;
      allItems += 1;
    });
  });

  localStorage.setItem("All", allItems);
  return allItems;
}

export function renderCategories() {
  const categoryContainer =
    document.querySelector(".category-list") ||
    document.querySelector(".category");
  if (!categoryContainer) return;

  let html = "";
  feed.forEach((categoryGroup) => {
    const slug = getCategorySlug(categoryGroup.name);
    const feedCount = categoryGroup.feeds.length;

    let feedsHtml = "";
    categoryGroup.feeds.forEach((f) => {
      const feedColor = f.color || "#2563eb";
      feedsHtml += `
        <div class="genre" data-feed-id="${f.id}" title="${f.title}">
          <div class="genre-name">
            <span class="favicon" style="background: ${feedColor};">${f.letter}</span>
            <p>${f.title}</p>
          </div>
          <p class="num">1</p>
        </div>`;
    });

    html += `
      <div class="${slug} category-group" data-category="${categoryGroup.name}">
        <div class="${slug}-header category-header">
          <li class="category-name"><p>${categoryGroup.name}</p></li>
          <p class="num">${feedCount}</p>
        </div>
        ${feedsHtml}
      </div>`;
  });

  const categoryListEl = document.querySelector(".category-list");
  if (categoryListEl) {
    categoryListEl.innerHTML = html;
  } else {
    // If no .category-list wrapper, remove existing dynamic groups and append
    categoryContainer
      .querySelectorAll(".category-group")
      .forEach((el) => el.remove());
    categoryContainer.insertAdjacentHTML("beforeend", html);
  }
}

export function getMatchingId(feedId) {
  for (const cat of feed) {
    const found = cat.feeds.find((w) => w.id === feedId);
    if (found) return found;
  }
  return null;
}

export const finalALLCount = localStorage.getItem("All") || "19";
