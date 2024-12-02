const slideImg = ["./img/home-slider/slide1jpg", "./img/home-slider/slide2.jpeg", "./img/home-slider/slide3.jpeg"]

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
