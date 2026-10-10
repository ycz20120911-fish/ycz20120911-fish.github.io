// 首页逻辑：拉取 posts/index.json，渲染文章目录与卡片列表
(function () {
  "use strict";

  var listEl = document.getElementById("post-list");
  var statusEl = document.getElementById("status");
  var directoryEl = document.getElementById("directory");
  var directoryListEl = document.getElementById("directory-list");
  var directoryCountEl = document.getElementById("directory-count");
  var directoryPanel = document.getElementById("directory-panel");
  var directorySearch = document.getElementById("directory-search");
  var directoryWide = window.matchMedia("(min-width: 960px)");

  function formatDate(s) {
    // YYYY-MM-DD -> 2026年10月5日
    var m = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec((s || "").trim());
    if (!m) return s;
    return m[1] + "年" + parseInt(m[2], 10) + "月" + parseInt(m[3], 10) + "日";
  }

  function formatMonthDay(s) {
    var m = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec((s || "").trim());
    if (!m) return "";
    return parseInt(m[2], 10) + "月" + parseInt(m[3], 10) + "日";
  }

  function monthLabel(s) {
    var m = /^(\d{4})-(\d{1,2})/.exec((s || "").trim());
    if (!m) return "其他";
    return m[1] + "年" + parseInt(m[2], 10) + "月";
  }

  function cardHTML(post) {
    var cover = "";
    if (post.cover) {
      cover = '<img class="cover" src="' + encodeURI(post.cover) + '" alt="' +
        escapeAttr(post.title) + '" loading="lazy" onerror="this.style.display=\'none\'">';
    } else {
      cover = '<div class="cover"></div>';
    }
    var tags = (post.tags || []).map(function (t) {
      return '<span class="tag">' + escapeHTML(t) + '</span>';
    }).join("");

    return (
      '<a class="post-card" href="post.html?p=' + encodeURIComponent(post.slug) + '">' +
        cover +
        '<div class="body">' +
          '<div class="meta">' + escapeHTML(formatDate(post.date)) + '</div>' +
          '<h2>' + escapeHTML(post.title) + '</h2>' +
          '<p class="summary">' + escapeHTML(post.summary || "") + '</p>' +
          (tags ? '<div class="tags">' + tags + '</div>' : '') +
        '</div>' +
      '</a>'
    );
  }

  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function escapeAttr(s) { return escapeHTML(s); }

  function directoryRowHTML(post) {
    var day = formatMonthDay(post.date);
    return (
      '<li class="directory-item">' +
        '<time datetime="' + escapeAttr(post.date || "") + '">' + escapeHTML(day || "—") + '</time>' +
        '<a href="post.html?p=' + encodeURIComponent(post.slug) + '">' + escapeHTML(post.title || post.slug) + '</a>' +
      '</li>'
    );
  }

  function postMatches(post, query) {
    if (!query) return true;
    var hay = [
      post.title || "",
      (post.tags || []).join(" "),
      post.date || "",
      monthLabel(post.date)
    ].join(" ").toLowerCase();
    return hay.indexOf(query) !== -1;
  }

  function paintDirectory(posts, query) {
    var groups = [];
    var groupMap = {};
    var shown = 0;

    posts.forEach(function (post) {
      if (!post || !post.slug) return;
      if (!postMatches(post, query)) return;
      shown += 1;
      var label = monthLabel(post.date);
      if (!groupMap[label]) {
        groupMap[label] = { label: label, posts: [] };
        groups.push(groupMap[label]);
      }
      groupMap[label].posts.push(post);
    });

    if (!shown) {
      directoryListEl.innerHTML = '<p class="directory-empty">没有匹配的文章</p>';
    } else {
      directoryListEl.innerHTML = groups.map(function (group) {
        return (
          '<section class="directory-group">' +
            '<h3>' + escapeHTML(group.label) + '</h3>' +
            '<ul>' + group.posts.map(directoryRowHTML).join("") + '</ul>' +
          '</section>'
        );
      }).join("");
    }

    if (directoryCountEl) {
      directoryCountEl.textContent = query
        ? (shown + " / " + posts.length + " 篇")
        : (posts.length + " 篇");
    }
  }

  function renderDirectory(posts) {
    if (!directoryEl || !directoryListEl) return;
    var items = posts.filter(function (post) { return post && post.slug; });
    if (!items.length) {
      directoryEl.hidden = true;
      return;
    }

    if (directoryWide.matches && directoryPanel) directoryPanel.open = true;
    directoryEl.hidden = false;
    paintDirectory(items, directorySearch ? directorySearch.value.trim().toLowerCase() : "");

    if (directorySearch && !directorySearch.dataset.bound) {
      directorySearch.dataset.bound = "1";
      directorySearch.addEventListener("input", function () {
        paintDirectory(items, directorySearch.value.trim().toLowerCase());
      });
    }
  }

  function bindDirectoryToggle() {
    if (!directoryPanel) return;
    var summary = directoryPanel.querySelector("summary");
    if (!summary || summary.dataset.bound) return;
    summary.dataset.bound = "1";
    summary.addEventListener("click", function (e) {
      if (directoryWide.matches) e.preventDefault();
    });
    summary.addEventListener("keydown", function (e) {
      if (!directoryWide.matches) return;
      if (e.key === "Enter" || e.key === " ") e.preventDefault();
    });
    directoryWide.addEventListener("change", function (e) {
      if (e.matches) directoryPanel.open = true;
    });
  }

  function renderList(posts) {
    if (!Array.isArray(posts) || posts.length === 0) {
      statusEl.innerHTML = '<p>还没有文章。先在 <code>posts/</code> 里加一篇试试。</p>';
      statusEl.className = "status";
      if (directoryEl) directoryEl.hidden = true;
      return;
    }
    // 按日期倒序（同日保持 index.json 中的顺序）
    posts.sort(function (a, b) { return (b.date || "").localeCompare(a.date || ""); });
    listEl.innerHTML = posts.map(cardHTML).join("");
    statusEl.style.display = "none";
    renderDirectory(posts);
  }

  function fail() {
    statusEl.className = "error";
    statusEl.innerHTML = '<h2>加载文章列表失败</h2><p>请确认 <code>posts/index.json</code> 存在且格式正确，且当前是通过 HTTP 服务预览（不能直接 file:// 打开）。</p>';
    if (directoryEl) directoryEl.hidden = true;
  }

  bindDirectoryToggle();

  fetch("posts/index.json", { cache: "no-cache" })
    .then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.json();
    })
    .then(renderList)
    .catch(fail);
})();
