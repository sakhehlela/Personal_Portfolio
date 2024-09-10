document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const sidebarClose = document.querySelector(".sidebar-close");

  menuToggle.addEventListener("click", function () {
      sidebar.classList.add("sidebar-open");
  });

  sidebarClose.addEventListener("click", function () {
      sidebar.classList.remove("sidebar-open");
  });
});