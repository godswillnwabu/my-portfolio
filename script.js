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

//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: 'smooth'
//     });
// });

