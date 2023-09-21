// ===========Nav Toggler ==========
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", ()=> {
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    }else {
        linksContainer.style.height = 0;
    }
})

// ===========Nav Toggler ==========
const navbar = document.getElementById("nav");
window.addEventListener("scroll", ()=> {
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > 400) {
        navbar.classList.add("fixed-nav")
    }else{
        navbar.classList.remove("fixed-nav")
    }
});