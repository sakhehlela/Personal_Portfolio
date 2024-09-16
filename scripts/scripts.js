document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebar-close');
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

    // Toggle sidebar open/close
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('sidebar-open');
    });

    // Close sidebar when "X" is clicked
    sidebarClose.addEventListener('click', function() {
        sidebar.classList.remove('sidebar-open');
    });

    // Close sidebar when any menu item is clicked
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidebar.classList.remove('sidebar-open');
        });
    });
});
