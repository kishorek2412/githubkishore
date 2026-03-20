// Typing effect
const text = "Frontend Developer | AI Enthusiast";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 50);
    }
}
typingEffect();


// Scroll animation
const elements = document.querySelectorAll("section, .card, .certificate-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// Progress bar animation
const certificates = document.querySelectorAll(".certificate-card");

function animateProgress() {
    certificates.forEach(card => {
        const progress = card.querySelector(".progress");
        const percentText = card.querySelector(".percent-text");
        const target = card.getAttribute("data-percent");

        let count = 0;

        const interval = setInterval(() => {
            if (count >= target) {
                clearInterval(interval);
            } else {
                count++;
                progress.style.width = count + "%";
                percentText.innerText = count + "%";
            }
        }, 15);
    });
}

// Trigger when visible
window.addEventListener("scroll", () => {
    const section = document.getElementById("certificates");
    const position = section.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
        animateProgress();
    }
});
