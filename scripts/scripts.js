document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const sidebarClose = document.querySelector(".sidebar-close");
    const sidebarLinks = document.querySelectorAll(".sidebar ul li a"); // Select all sidebar links

    // Toggle sidebar open when menu toggle is clicked
    menuToggle.addEventListener("click", function () {
        sidebar.classList.add("sidebar-open");
    });

    // Close sidebar when close button is clicked
    sidebarClose.addEventListener("click", function () {
        sidebar.classList.remove("sidebar-open");
    });

    // Close sidebar when any sidebar link is clicked
    sidebarLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            sidebar.classList.remove("sidebar-open");
        });
    });
});
