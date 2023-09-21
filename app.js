menu = [
    {
        id : 1,
        title : "chocolate cake",
        img : "./images/menu-item-01.jpg",
        price : 5,
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, tempora?"
    },
    {
        id : 2,
        title : "classy panecake",
        img : "./images/menu-item-02.jpg",
        price : 8,
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, tempora?"
    },
    {
        id : 3,
        title : "Tall classy bread",
        img : "./images/menu-item-03.jpg",
        price : 9,
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, tempora?"
    },
    {
        id : 4,
        title : "blueberry cheesecake",
        img : "./images/menu-item-04.jpg",
        price : 2,
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, tempora?"
    },
    {
        id : 5,
        title : "classy cupcake",
        img : "./images/menu-item-05.jpg",
        price : 3,
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, tempora?"
    },
    {
        id : 6,
        title : "classy cupcake",
        img : "./images/menu-item-03.jpg",
        price : 3,
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, tempora?"
    },
    {
        id : 7,
        title : "classy cupcake",
        img : "./images/menu-item-01.jpg",
        price : 3,
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, tempora?"
    },
    {
        id : 8,
        title : "classy cupcake",
        img : "./images/menu-item-05.jpg",
        price : 3,
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, tempora?"
    },
    {
        id : 8,
        title : "classy cupcake",
        img : "./images/menu-item-04.jpg",
        price : 3,
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, tempora?"
    }
]

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
// parent container
const menuItems = document.querySelector(".menu-items");
window.addEventListener("DOMContentLoaded", function(){
    let displayMenu = menu.map(function(item){
        // console.log(item);
        return `<div class="menu-item">
        <img src=${item.img}>
        <h5 class="price">$${item.price}</h5>
        <div class="item-info">
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
            <a href="#" class="item-link">Make a reservation</a>
        </div>
    </div>`
    });
    displayMenu = displayMenu.join('');
    console.log(displayMenu)
    menuItems.innerHTML = displayMenu;
});