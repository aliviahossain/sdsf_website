// Code contributed by Alivia Hossain, SDSF AI/DS, Sem 1
document.addEventListener("DOMContentLoaded", function() {

    // --- Sticky Navbar Logic ---
    const navbar = document.getElementById("navbar");
    // Get the offset position of the navbar
    const stickyOffset = navbar.offsetTop;

    window.onscroll = function() {
        // Add the "sticky" class to the navbar when you reach its scroll position
        // Remove "sticky" when you leave the scroll position
        if (window.pageYOffset > stickyOffset) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    };

    // --- Scroll Reveal Animation Logic ---
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                // Stop observing the element once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // relative to the viewport
        threshold: 0.1 // 10% of the item must be visible
    });

    // Observe each .reveal element
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

});