// javascrip para boton cambio de color
document.addEventListener("DOMContentLoaded", function() {
    const btnDarkMode = document.getElementById("toggle-dark-mode");
    
    btnDarkMode.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            btnDarkMode.textContent = "Modo claro";
        } else {
            btnDarkMode.textContent = "Modo oscuro";
        }
    });
});



// javascrip para carrucel
const track = document.getElementById('carousel-track');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
const totalProjects = 2; 
const autoSlideInterval = 5000; 

function updateCarousel() {
  
    const percentage = currentIndex * -50;
    track.style.transform = `translateX(${percentage}%)`;
}

function nextSlide() {  
    currentIndex = (currentIndex + 1) % totalProjects;
    updateCarousel();
}

function prevSlide() { 
    currentIndex = (currentIndex - 1 + totalProjects) % totalProjects;
    updateCarousel();
}


nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide(); 
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});


let slideTimer = setInterval(nextSlide, autoSlideInterval);
function resetAutoSlide() {
    clearInterval(slideTimer);
    slideTimer = setInterval(nextSlide, autoSlideInterval);
}
