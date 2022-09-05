// scrolling testimonials
const moveTestimonials = (direction) => {
    const scrollingTestimonials = document.querySelector(".scrolling-testimonials");
    /*const cards = document.querySelector(".testimonials-cards");
    const cardWidth = cards.width;*/

    scrollCompleted = 0;
    let slideVar = setInterval(function () {
        if (direction == 'left') {
            scrollingTestimonials.scrollLeft -= 360;
            scrollingTestimonials.style.scrollBehavior = "smooth"
        } else {
            scrollingTestimonials.scrollLeft += 360;
            scrollingTestimonials.style.scrollBehavior = "smooth"
        }
        scrollCompleted += 360;
        if (scrollCompleted >= 100) {
            window.clearInterval(slideVar);
            scrollingTestimonials.style.scrollBehavior = "smooth"
        }
    }, 30);
}



const backToTop = document.querySelector(".back-to-top-button");

window.addEventListener("scroll", () => {
    // display back to top button
    if (window.pageYOffset > 100) {
        backToTop.classList.add("active");
    } else {
        backToTop.classList.remove("active");
    }


    //show section with transition

    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
})

// back to top button function
function topFunction() {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
}



//form submission
/*
const infoForm = document.getElementById("info-form");

validateInfo = (event) => {
    event.preventDefault();
}

infoForm.addEventListener("submit", validateInfo)*/