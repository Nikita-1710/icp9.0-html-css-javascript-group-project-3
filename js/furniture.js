function opensidebar(){
    const sidebarElement = document.getElementById('sidebar');
    sidebarElement.style.visibility = 'visible';
}
function closesidebar(){
    const sidebarElement = document.getElementById('sidebar');
    sidebarElement.style.visibility= 'hidden';
}
const images = [
];

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
function nextImage() {
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    showImage(currentIndex);
}
setInterval(prevImage,6000);
/* description menu */
const modal = document.getElementById('myModal');
const menu = document.getElementById('discription');
const span = document.getElementsByClassName('close');
function descrip(){
    modal.style.display= 'block';
}
function close(){
    modal.style.display= 'none';
}
