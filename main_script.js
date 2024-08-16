let counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 5){
    counter = 1;
  }
}, 5000);
 

let currentSlide = [0, 0]; // Initialize current slide index for both sliders
const slideIntervalTime = 7000; // Slide interval time in milliseconds (7 seconds)

// Function to change slides for a specific slider
function changeSlide(n, sliderIndex = 0) {
    const sliderElements = document.querySelectorAll('.slider');
    const slides = sliderElements[sliderIndex].querySelectorAll('.slide');
    const notes = sliderElements[sliderIndex].querySelectorAll('.note');
    const totalSlides = slides.length;

    // Hide all slides and notes
    slides.forEach(slide => slide.classList.remove('active'));
    notes.forEach(note => note.classList.remove('active'));

    // Update currentSlide index
    currentSlide[sliderIndex] = (currentSlide[sliderIndex] + n + totalSlides) % totalSlides;

    // Show the current slide and note
    slides[currentSlide[sliderIndex]].classList.add('active');
    notes[currentSlide[sliderIndex]].classList.add('active');
}

// Auto-move slides every 7 seconds for both sliders
function startSlideShow() {
    setInterval(() => {
        changeSlide(1, 0); // Change slide for the first slider
        changeSlide(1, 1); // Change slide for the second slider
    }, slideIntervalTime);
}

// Start the slideshow
startSlideShow();

// Initial display
changeSlide(0, 0); // Initialize the first slider
changeSlide(0, 1); // Initialize the second slider