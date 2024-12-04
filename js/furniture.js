/*  slide-show*/
const images = ["../img/electric-blanket-1.jpg","../img/electric-blanket-2.jpg","../img/electric-blanket-3.jpg","../img/electric-blanket-4.jpg"];

let currentIndex = 0;

function showImage(index) {
    const slideshowImage = document.getElementById('slideshow-image');
    slideshowImage.src = images[index];
}
function prevImage() {
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex--;
    }
    showImage(currentIndex);
}
setInterval(prevImage,3000);
/**
 smart-Thermostat 
 */
 const img = ["../img/Smart-thermostat-1.jpg","../img/Smart-thermostat-2.jpg","../img/Smart-thermostat-3.jpg","../img/Smart-thermostat-4.jpg","../img/Smart-thrmostat-5.jpg"];

 let current = 0;
 
 function showI(index) {
     const slideshowImage = document.getElementById('slideshow-img');
     slideshowImage.src = img[index];
 }
 function prevThermostatImage() {
     if (current === 0) {
         current = img.length - 1;
     } else {
         current--;
     }
     showI(current);
 }
 setInterval(prevThermostatImage,4000);
 
 /**
  Hot-water-bottle
  */
 const pic = ["../img/Hot-water-bottle-1.jpg","../img/Hot-water-bottle-2.jpg","../img/Hot-water-bottle-3.jpg","../img/Hot-water-bottle-4.jpg","../img/Hot-water-bottle-5.jpg"];
 
 let indexA = 0;
 
 function showindex(index) {
     const slideshowImage = document.getElementById('slideshow-3');
     slideshowImage.src = pic[index];
 }
 function prevHotWaterBottleImage() {
     if (indexA === 0) {
         indexA = pic.length - 1;
     } else {
         indexA--;
     }
     showindex(indexA);
 }
 setInterval(prevHotWaterBottleImage,5000);
 
/* description menu */

function descrip(){
    const modal = document.getElementById('myModal');
    modal.style.display= 'block';
}

function closeModal(){
    const modal = document.getElementById('myModal');
    modal.style.display= 'none';
}
/**side-Bar*/
function openSidebar() {
    const sidebar = document.getElementById("sidebar");
    const isVisible = sidebar.style.display === "block";
    sidebar.style.display = isVisible ? "hidde" : "block";
}

function closeSidebar() {
    const sidebar = document.getElementById("sidebar");
    const isVisible = sidebar.style.display === "block";
    sidebar.style.display = isVisible ? "none" : "block";
}