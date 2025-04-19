const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", isOpen ? "fa-solid fa-bars" : "fa-solid fa-xmark");
    if (isOpen) {
        navLinks.classList.add("close");
        navLinks.addEventListener(
            "animationend",
            (e) => {
                navLinks.classList.remove("open");
                navLinks.classList.remove("close");
            }, {
                once: true
            }
        );
    } else {
        navLinks.classList.add("open");
    }
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header-container .section-subheader", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header-container .section-header", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header-container .scroll-btn", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header-container .header-socials", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1500,
});

ScrollReveal().reveal(".about-image-1, .about-image-3", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".about-image-2", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".about-content .section-subheader", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".about-content .section-header", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".about-content p", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".about-content .about-btn", {
    ...scrollRevealOption,
    delay: 2000,
});