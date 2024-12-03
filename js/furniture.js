function opensidebar(){
    const sidebarElement = document.getElementById('sidebar');
    sidebarElement.style.visibility = 'visible';
}
function closesidebar(){
    const sidebarElement = document.getElementById('sidebar');
    sidebarElement.style.visibility= 'hidden';
}
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
 const img = ["../img/Smart-thermostat-1.jpg","../img/Smart-thermostat-2.jpg","../img/Smart-thermostat-3.jpg","../img/Smart-thermostat-4.jpg","../img/Smart-thermostat-5.jpg"];

 let current = 0;
 
 function showI(index) {
     const slideshowImage = document.getElementById('slideshow-img');
     slideshowImage.src = img[index];
 }
 function prevI() {
     if (current === 0) {
         current = images.length - 1;
     } else {
         current--;
     }
     showI(current);
 }
 setInterval(prevI,3000);
/* description menu */

function descrip(){
    const modal = document.getElementById('myModal');
    modal.style.display= 'block';
}

function closeModal(){
    const modal = document.getElementById('myModal');
    modal.style.display= 'none';
}

