const slideImg = ["./img/home-slider/autumn.jpg", "./img/home-slider/monsoon.avif", "./img/home-slider/pre-winter.avif", "./img/home-slider/spring.avif", "./img/home-slider/summer.avif", "./img/home-slider/winter.avif"]

let index = 0;
const slide = document.getElementById('slide');

function nextSlide() {
    if (index < slideImg.length - 1) {
        index++;
    }
    else {
        index = 0
    }
    slide.src = slideImg[index]
}

function prevSlide() {
    if (index > 0) {
        index--;
    }
    else {
        index = slideImg.length - 1;
    }
    slide.src = slideImg[index]
}

setInterval(nextSlide, 2500);
