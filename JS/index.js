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