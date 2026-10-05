// 文章详情页逻辑：URL 参数 ?p=slug -> fetch posts/<slug>.md -> marked 渲染
(function () {
  "use strict";

  // 简单 slug 校验：只允许字母数字下划线-连字符
  function parseSlug() {
    var q = new URLSearchParams(location.search);
    var p = (q.get("p") || "").trim();
    if (!p) return null;
    if (!/^[A-Za-z0-9_-]+$/.test(p)) return null;
    return p;
  }

  function formatDate(s) {
    var m = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec((s || "").trim());
    if (!m) return s;
    return m[1] + "年" + parseInt(m[2], 10) + "月" + parseInt(m[3], 10) + "日";
  }

  function findPost(slug, cb) {
    fetch("posts/index.json", { cache: "no-cache" })
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(function (posts) {
        var found = null;
        for (var i = 0; i < posts.length; i++) {
          if (posts[i].slug === slug) { found = posts[i]; break; }
        }
        cb(null, found, posts);
      })
      .catch(function (e) { cb(e); });
  }

  function renderNotFound() {
    var stage = document.getElementById("stage");
    stage.className = "error";
    stage.innerHTML =
      '<h2>文章不存在</h2>' +
      '<p>请检查网址是否正确，或回到首页查看所有文章。</p>' +
      '<p style="margin-top:18px"><a class="back-link" href="index.html">← 返回首页</a></p>';
    document.title = "文章不存在";
  }

  function renderPost(meta, mdText) {
    var stage = document.getElementById("stage");
    var dateStr = formatDate(meta.date);
    var tags = (meta.tags || []).map(function (t) {
      return '<span class="tag">' + escapeHTML(t) + '</span>';
    }).join("");

    // 同步 marked 已加载完毕（post.html 末尾引入 marked.min.js 在本脚本之前）
    var html = "";
    if (window.marked && typeof window.marked.parse === "function") {
      html = window.marked.parse(mdText);
    } else {
      // 退化：纯文本预格式化
      html = "<pre>" + escapeHTML(mdText) + "</pre>";
    }

    stage.className = "post";
    stage.innerHTML =
      '<header class="post-header">' +
        '<div class="meta">' + escapeHTML(dateStr) + '</div>' +
        '<h1>' + escapeHTML(meta.title) + '</h1>' +
        (tags ? '<div class="tags">' + tags + '</div>' : '') +
      '</header>' +
      (meta.cover ? '<img class="post-cover" src="' + encodeURI(meta.cover) + '" alt="' + escapeAttr(meta.title) + '" onerror="this.style.display=\'none\'">' : '') +
      '<article class="markdown" id="markdown-body">' + html + '</article>' +
      '<footer class="post-footer">' +
        '<a class="back-link" href="index.html">← 返回首页</a>' +
        '<span class="meta">最后更新于 ' + escapeHTML(dateStr) + '</span>' +
      '</footer>';

    document.title = meta.title + " · " + (document.title || "博客");
  }

  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function escapeAttr(s) { return escapeHTML(s); }

  // ===== 入口 =====
  var slug = parseSlug();
  if (!slug) { renderNotFound(); return; }

  findPost(slug, function (err, meta) {
    if (err || !meta) { renderNotFound(); return; }
    fetch("posts/" + slug + ".md", { cache: "no-cache" })
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.text();
      })
      .then(function (text) { renderPost(meta, text); })
      .catch(function () { renderNotFound(); });
  });
})();
