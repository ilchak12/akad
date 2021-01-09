let burgerMenu = document.getElementById("xs-icon");
let navMobile = document.getElementById("xs-menu");
let lines = document.querySelectorAll(".line");

navMobile.style.visibility = "hidden";
navMobile.style.opacity = "0";    
navMobile.style.transform = "scaleY(0)";
lines[0].style.width = "30px";
lines[1].style.width = "15px";
lines[2].style.width = "20px";

burgerMenu.addEventListener("click", function() {
    if(navMobile.style.visibility == "hidden" && navMobile.style.opacity == "0") {
        navMobile.style.visibility = "visible";
        navMobile.style.opacity = "1";
        navMobile.style.transform = "scaleY(1)";
        lines.forEach(el => {
            el.style.width = "30px";
        });
    } else {
        navMobile.style.visibility = "hidden";
        navMobile.style.opacity = "0";    
        navMobile.style.transform = "scaleY(0)";
        lines[0].style.width = "30px";
        lines[1].style.width = "15px";
        lines[2].style.width = "20px";  
    }
})
