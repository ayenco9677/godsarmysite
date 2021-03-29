const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear();

const linksContainer = document.querySelector(".links-container")
const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

navToggle.addEventListener('click', function() {
    containerHeight = linksContainer.getBoundingClientRect().height;
    linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
})

const navbar = document.getElementById('.nav')
const topLink = document.querySelector("top-link")
window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav")
    } else {
        navbar.classList.remove("fixed-nav")
    }
    if (scrollHeight > 500) {
        topLink.classList.add("show-link")
    } else {
        topLink.classList.reomove("show-link")
    }
})