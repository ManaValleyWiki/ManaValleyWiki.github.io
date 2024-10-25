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
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
