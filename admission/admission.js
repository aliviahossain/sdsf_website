// Code contributed by Alivia Hossain, SDSF AI/DS, Sem 1
document.addEventListener("DOMContentLoaded", function() {

    // ===== WAIT FOR HEADER TO LOAD FIRST =====
    function initScripts() {

        const navbar = document.getElementById("navbar");

        // Run sticky navbar only if navbar exists
        if (navbar) {
            const stickyOffset = navbar.offsetTop;

            window.addEventListener("scroll", () => {
                if (window.pageYOffset > stickyOffset) {
                    navbar.classList.add("sticky");
                } else {
                    navbar.classList.remove("sticky");
                }
            });
        }

        // ===== Scroll Reveal Animation =====
        const revealElements = document.querySelectorAll(".reveal");

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    // ===== If header loads via fetch, wait for it =====
    const header = document.getElementById("header");

    if (header) {
        const checkHeaderLoaded = setInterval(() => {
            // header is loaded when it contains nav
            if (header.innerHTML.includes("<nav")) {
                clearInterval(checkHeaderLoaded);
                initScripts();
            }
        }, 50);
    } else {
        // If no dynamic header → run normally
        initScripts();
    }

});
