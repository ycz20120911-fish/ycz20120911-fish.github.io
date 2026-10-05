// 首页逻辑：拉取 posts/index.json 渲染文章列表
(function () {
  "use strict";

  var listEl = document.getElementById("post-list");
  var statusEl = document.getElementById("status");

  function formatDate(s) {
    // YYYY-MM-DD -> 2026年10月5日
    var m = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec((s || "").trim());
    if (!m) return s;
    return m[1] + "年" + parseInt(m[2], 10) + "月" + parseInt(m[3], 10) + "日";
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

  function renderList(posts) {
    if (!Array.isArray(posts) || posts.length === 0) {
      statusEl.innerHTML = '<p>还没有文章。先在 <code>posts/</code> 里加一篇试试。</p>';
      statusEl.className = "status";
      return;
    }
    // 按日期倒序
    posts.sort(function (a, b) { return (b.date || "").localeCompare(a.date || ""); });
    listEl.innerHTML = posts.map(cardHTML).join("");
    statusEl.style.display = "none";
  }

  function fail() {
    statusEl.className = "error";
    statusEl.innerHTML = '<h2>加载文章列表失败</h2><p>请确认 <code>posts/index.json</code> 存在且格式正确，且当前是通过 HTTP 服务预览（不能直接 file:// 打开）。</p>';
  }

  fetch("posts/index.json", { cache: "no-cache" })
    .then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.json();
    })
    .then(renderList)
    .catch(fail);
})();
