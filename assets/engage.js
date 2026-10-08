// 评论（giscus，存在本仓库的 GitHub Discussions）与转发。所有公开页共用。
(function () {
  "use strict";

  // 仓库 node id，2026-10-08 从 GitHub GraphQL repository.id 读到。
  var GISCUS_REPO = "ycz20120911-fish/ycz20120911-fish.github.io";
  var GISCUS_REPO_ID = "R_kgDOU8MX4Q";
  // 页面评论用的讨论分类。分类 id 必须是仓库里真实存在的 DiscussionCategory id。
  // 查询时仓库未开启 Discussions，discussionCategories 为空，所以这里先留空，
  // 不能编造。开启讨论并出现分类后，只改这两行即可。
  var GISCUS_CATEGORY = "Comments";
  var GISCUS_CATEGORY_ID = "";

  // 与 giscus pathname 映射同一套规则：/ 与 /index.html → index，/about.html → about。
  function pagePathTerm() {
    var path = location.pathname || "/";
    return path.length < 2 ? "index" : path.substring(1).replace(/\.\w+$/, "");
  }

  // 文章都走 post.html，仅 pathname 会合成一条讨论，所以带上 slug。
  function articleSlug() {
    if (!/(^|\/)post\.html$/.test(location.pathname || "")) return "";
    var slug = "";
    try { slug = (new URLSearchParams(location.search).get("p") || "").trim(); } catch (e) {}
    return /^[A-Za-z0-9_-]+$/.test(slug) ? slug : "";
  }

  function currentTheme() {
    var theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark" || theme === "light") return theme;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    return "light";
  }

  function sendGiscusTheme(theme) {
    var frame = document.querySelector("iframe.giscus-frame");
    if (!frame || !frame.contentWindow) return;
    frame.contentWindow.postMessage(
      { giscus: { setConfig: { theme: theme } } },
      "https://giscus.app"
    );
  }

  function fallbackCopy(url) {
    var ta = document.createElement("textarea");
    ta.value = url;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "0";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  function mountShare(row) {
    var nativeBtn = document.createElement("button");
    nativeBtn.type = "button";
    nativeBtn.className = "share-btn";
    nativeBtn.id = "share-native";
    nativeBtn.textContent = "转发";
    if (typeof navigator.share !== "function") nativeBtn.hidden = true;

    var copyBtn = document.createElement("button");
    copyBtn.type = "button";
    copyBtn.className = "share-btn";
    copyBtn.id = "share-copy";
    copyBtn.textContent = "复制链接";

    var status = document.createElement("span");
    status.className = "share-status";
    status.id = "share-status";
    status.setAttribute("aria-live", "polite");

    row.appendChild(nativeBtn);
    row.appendChild(copyBtn);
    row.appendChild(status);

    var timer = 0;
    function setStatus(text) {
      status.textContent = text || "";
      if (timer) window.clearTimeout(timer);
      if (text) {
        timer = window.setTimeout(function () { status.textContent = ""; }, 3000);
      }
    }

    copyBtn.addEventListener("click", function () {
      var url = location.href;
      // execCommand 必须在这次点击里同步执行，异步 clipboard 失败后再调用就来不及了。
      var legacyOk = fallbackCopy(url);
      if (legacyOk) setStatus("已复制");
      if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        var settled = false;
        var pending = window.setTimeout(function () {
          if (!settled && !legacyOk) setStatus("复制失败");
        }, 1500);
        navigator.clipboard.writeText(url).then(function () {
          settled = true;
          window.clearTimeout(pending);
          setStatus("已复制");
        }, function () {
          settled = true;
          window.clearTimeout(pending);
          if (!legacyOk) setStatus("复制失败");
        });
        return;
      }
      if (!legacyOk) setStatus("复制失败");
    });

    nativeBtn.addEventListener("click", function () {
      if (typeof navigator.share !== "function") return;
      navigator.share({ title: document.title, url: location.href }).catch(function (err) {
        if (err && err.name === "AbortError") return;
        setStatus("转发失败");
      });
    });
  }

  function mountGiscus(parent) {
    var slug = articleSlug();
    var script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", GISCUS_REPO);
    script.setAttribute("data-repo-id", GISCUS_REPO_ID);
    script.setAttribute("data-category", GISCUS_CATEGORY);
    script.setAttribute("data-category-id", GISCUS_CATEGORY_ID);
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", currentTheme());
    script.setAttribute("data-lang", "zh-CN");
    if (slug) {
      // pathname 单独无法区分文章，term 仍由路径加 slug 组成。
      script.setAttribute("data-mapping", "specific");
      script.setAttribute("data-term", pagePathTerm() + "/" + slug);
      script.setAttribute("data-strict", "1");
    } else {
      script.setAttribute("data-mapping", "pathname");
      script.setAttribute("data-strict", "1");
    }
    parent.appendChild(script);

    document.addEventListener("blog-theme", function (event) {
      var theme = event.detail && event.detail.theme;
      if (theme !== "dark" && theme !== "light") theme = currentTheme();
      sendGiscusTheme(theme);
    });

    var observer = new MutationObserver(function () {
      var frame = parent.querySelector("iframe.giscus-frame");
      if (!frame || frame.getAttribute("data-theme-bound") === "1") return;
      frame.setAttribute("data-theme-bound", "1");
      frame.addEventListener("load", function () {
        sendGiscusTheme(currentTheme());
      });
    });
    observer.observe(parent, { childList: true, subtree: true });
  }

  function mount() {
    if (document.querySelector(".engage")) return;
    var main = document.querySelector("main");
    if (!main) return;

    var section = document.createElement("section");
    section.className = "engage";
    section.setAttribute("aria-label", "互动");

    var row = document.createElement("div");
    row.className = "share-row";
    row.setAttribute("role", "group");
    row.setAttribute("aria-label", "转发");
    mountShare(row);

    var comments = document.createElement("section");
    comments.className = "comments";
    var heading = document.createElement("h2");
    heading.id = "comments-heading";
    heading.textContent = "评论";
    comments.setAttribute("aria-labelledby", "comments-heading");
    var box = document.createElement("div");
    box.className = "giscus";

    comments.appendChild(heading);
    comments.appendChild(box);
    section.appendChild(row);
    section.appendChild(comments);
    main.appendChild(section);
    // 脚本放在 .giscus 外面，避免 giscus 清空容器时把脚本一起删掉。
    mountGiscus(comments);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
