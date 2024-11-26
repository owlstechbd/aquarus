//slider-hero
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Function to change slide
function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');

    currentSlide += direction;

    // Looping around the slides
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Loop to last slide
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Loop to first slide
    }

    slides[currentSlide].classList.add('active');
    document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto slide function
function autoSlide() {
    changeSlide(1);
}

// Set interval for auto sliding every 3 seconds
let autoSlideInterval = setInterval(autoSlide, 5000);

