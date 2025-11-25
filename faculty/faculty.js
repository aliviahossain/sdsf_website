// Fade-in animations
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    cards.forEach(card => observer.observe(card));
});


// Back to Top Button
const topBtn = document.createElement("div");
topBtn.id = "backToTop";
topBtn.innerHTML = "↑";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
