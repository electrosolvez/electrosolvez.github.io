const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let index = 0;
const slideWidth = slides[0].clientWidth;
const interval = 4000; // 4 seconds

function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlider();
}

function updateSlider() {
    const translateValue = -index * slideWidth;
    slider.style.transform = `translateX(${translateValue}px)`;
}

function startAutoSlide() {
    setInterval(nextSlide, interval);
}

startAutoSlide();

