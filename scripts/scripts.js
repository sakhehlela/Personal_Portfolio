document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const sidebarClose = document.getElementById("sidebar-close");
  const sidebarLinks = document.querySelectorAll(".sidebar ul li a");

  menuToggle.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar-open");
  });

  sidebarClose.addEventListener("click", function () {
    sidebar.classList.remove("sidebar-open");
  });

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      sidebar.classList.remove("sidebar-open");
    });
  });
});
