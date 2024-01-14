const carousel = document.querySelector(".carousel"),
firstImg = document.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".img-slider i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;

arrowIcons.forEach (icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});
    

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}
const dragStop = (e) => {
    isDragStart = false;
}

carousel.addEventListener("mousedown" , dragStart);
carousel.addEventListener("mousemove" , dragging);
carousel.addEventListener("mouseup" , dragging);


const slideContainer = document.querySelector('.slide-container');
const slideContent = document.querySelector('.slide-content');

// Adjust the width based on the number of cards and margin-right
const cardWidth = 352; // Adjust as needed
const marginRight = 16; // Adjust as needed

let currentIndex = 0;

function updateSlider() {
    slideContent.style.transform = `translateX(${-currentIndex * (cardWidth + marginRight)}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideContent.children.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slideContent.children.length) % slideContent.children.length;
    updateSlider();
}

// Auto slide functionality
setInterval(nextSlide, 3000); // Adjust the interval as needed

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }                 