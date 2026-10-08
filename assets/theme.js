// 主题切换（所有页面共用）
// 策略：首次访问跟随系统；用户手动切换后写入 localStorage 并以手动值为准
(function () {
  "use strict";

  var STORAGE_KEY = "blog-theme";
  var root = document.documentElement;

  function getSystem() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark" : "light";
  }
  function apply(theme) {
    root.setAttribute("data-theme", theme);
    var btn = document.getElementById("theme-toggle");
    if (btn) btn.textContent = theme === "dark" ? "☀" : "☾";
    // 让评论组件跟着切换（engage.js 监听）
    try {
      document.dispatchEvent(new CustomEvent("blog-theme", { detail: { theme: theme } }));
    } catch (e) {}
  }

  // 启动时立即应用（避免闪烁：本脚本应在 head 末尾或 body 起始处同步引入）
  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  apply(saved === "dark" || saved === "light" ? saved : getSystem());

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") || getSystem();
      var next = current === "dark" ? "light" : "dark";
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
      apply(next);
    });
  });
})();
