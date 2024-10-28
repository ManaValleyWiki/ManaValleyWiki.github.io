document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Get all elements with the class "collapsible"
var collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach(function(collapsible) {
    collapsible.addEventListener("click", function() {
        // Toggle the "active" class to open/close the collapsible
        this.classList.toggle("active");

        // Get the next element (the content div) and toggle its display
        var content = this.nextElementSibling;
        
        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const themeLink = document.getElementById("theme-link");

    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");

    // Apply the saved theme or default to light mode
    if (savedTheme) {
        themeLink.href = savedTheme === "dark" ? "dmstyles.css" : "styles.css";
        themeToggle.textContent = savedTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
        const isDarkMode = themeLink.href.includes("dmstyles.css");
        
        if (isDarkMode) {
            // Switch to light mode
            themeLink.href = "styles.css";
            themeToggle.textContent = "Switch to Dark Mode";
            localStorage.setItem("theme", "light");
        } else {
            // Switch to dark mode
            themeLink.href = "dmstyles.css";
            themeToggle.textContent = "Switch to Light Mode";
            localStorage.setItem("theme", "dark");
        }
    });
});

