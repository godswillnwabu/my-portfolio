// CODE FOR THE HAMBURGER MENU
let hambugerIcon = document.querySelector(".hamburger-icon");
let navMenu = document.querySelector(".nav-menu");

hambugerIcon.addEventListener("click", responsiveView)

function responsiveView() {
    hambugerIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// CODE FOR THE NAME SLIDES
document.querySelectorAll(".slide").forEach(function(node) {
    // Do something with node
    node.onanimationend = () => {
        node.style.opacity = 1;
    }
  });

const fadeIn = document.querySelector(".heading");
fadeIn.onanimationend = () => {
    fadeIn.style.opacity = 1;
};


// CODE FOR REVEALING OF THE LINK TO HOME
const linkToHome = document.querySelector(".link-to-home");

window.addEventListener("scroll", function() {
    const scrollHeigth = window.scrollY;
    
    if (scrollHeigth > 2000) {
        linkToHome.classList.add("show-link");
    }
    else {
        linkToHome.classList.remove("show-link");
    }
});


// CODE FOR SMOOTH SCROLLING ON PAGE
let navLinks = document.querySelectorAll(".nav-link");

for (const link of navLinks) {
    link.addEventListener("click", smoothScroll);
}

function smoothScroll(event) {
    event.preventDefault();

    const href = this.getAttribute("href");
    
    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
}
