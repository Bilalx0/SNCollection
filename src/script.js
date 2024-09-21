const menuToggle = document.getElementById("menu-toggle");
      const menuToggleSidebar = document.getElementById("menu-toggle-sidebar");
      const sidebar = document.getElementById("sidebar");
      const overlay = document.getElementById("overlay");

      function closeSidebar() {
        menuToggle.checked = false;
        sidebar.classList.add("-translate-x-full");
        overlay.classList.add("hidden");
      }

      menuToggle.addEventListener("change", function () {
        if (this.checked) {
          sidebar.classList.remove("-translate-x-full");
          overlay.classList.remove("hidden");
        } else {
          closeSidebar();
        }
      });

      overlay.addEventListener("click", closeSidebar);

      menuToggleSidebar.addEventListener("change", function () {
        if (this.checked) {
          closeSidebar();
        }
      });