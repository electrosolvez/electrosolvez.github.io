document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = slider.querySelectorAll(".slide-in");
    let currentIndex = 0;
  
    function slideToLeft() {
      currentIndex = (currentIndex + 1) % slides.length;
      const newPosition = -currentIndex * 600; /* Adjust the width as needed */
      slider.style.transform = `translateX(${newPosition}px)`;
    }
  
    setInterval(slideToLeft, 2000); /* Adjust the interval as needed (2 seconds) */
  });
  
  