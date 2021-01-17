//menu mobile
let mobileMenu = document.querySelector(".menu-burger");
let mainMenu = document.querySelector(".menu");

mobileMenu.addEventListener("click", function() {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu");
    }
})

window.addEventListener("scroll", function() {
    if(pageYOffset > 0) {
        mainMenu.classList.remove("active-menu");
        mobileMenu.classList.remove("active-menu");
    }
})

//tabs
let tabItems = document.querySelectorAll(".tab-title-item");
let tabContent = document.querySelectorAll(".tab-content");

for(let i = 0; i < tabItems.length; i++) {
    tabItems[i].addEventListener("click", function() {
        let activeItem = document.querySelector(".tab-title-item.active");
        let activeContent = document.querySelector(".tab-content.active");

        activeItem.classList.remove("active");
        tabItems[i].classList.add("active");

        activeContent.classList.remove("active");
        tabContent[i].classList.add("active");
    })
}

//likes
let likes = document.querySelectorAll(".post-likes .fa-heart");

likes.forEach(el => {
    el.addEventListener("click", function() {
        el.classList.toggle("liked");
    })
})