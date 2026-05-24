// 导航栏统一配置 —— 以后只改这里！
const navConfig = [
  { name: "主页", path: "/" },
  { name: "项目", path: "/project/" },
  // 你以后新增页面，只需要在这里加一行！
  // { name: "新页面", path: "/新文件夹/" },
];

// 自动生成导航栏
function renderNavbar() {
  const currentPath = window.location.pathname;
  const navContainer = document.querySelector(".nav");
  if (!navContainer) return;

  // 清空原有导航
  navContainer.innerHTML = "";

  // 遍历配置生成按钮
  navConfig.forEach((item) => {
    const a = document.createElement("a");
    a.textContent = item.name;
    a.href = item.path;

    // 自动高亮当前页面
    if (
      currentPath === item.path ||
      (currentPath === "/index.html" && item.path === "/") ||
      (currentPath.startsWith(item.path) && item.path !== "/")
    ) {
      a.className = "active";
    }

    navContainer.appendChild(a);
  });

  // 加入主题切换按钮
  const themeBtn = document.createElement("button");
  themeBtn.className = "theme-switch";
  themeBtn.id = "themeBtn";
  navContainer.appendChild(themeBtn);
}

// 主题切换功能（统一写在这里，所有页面共用）
function initTheme() {
  const themeBtn = document.getElementById("themeBtn");
  const html = document.documentElement;

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      html.hasAttribute("data-theme")
        ? html.removeAttribute("data-theme")
        : html.setAttribute("data-theme", "dark");
    });
  }
}

// 页面加载后自动执行
window.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  initTheme();
});
