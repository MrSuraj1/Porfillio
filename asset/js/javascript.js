    tailwind.config = {
      darkMode: 'class'
    }

    document.addEventListener("DOMContentLoaded", function () {
      const themeBtn = document.getElementById("themeToggle");
      const html = document.documentElement;

      // Load saved theme
      if (localStorage.getItem("theme") === "dark") {
        html.classList.add("dark");
        themeBtn.textContent = "☀️";
      } else {
        themeBtn.textContent = "🌙";
      }

      themeBtn.addEventListener("click", () => {
        html.classList.toggle("dark");
        if (html.classList.contains("dark")) {
          themeBtn.textContent = "☀️";
          localStorage.setItem("theme", "dark");
        } else {
          themeBtn.textContent = "🌙";
          localStorage.setItem("theme", "light");
        }
      });
    });