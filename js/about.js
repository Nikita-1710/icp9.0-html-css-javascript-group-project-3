const images = ["./../img/about/img2.png", "./../img/about/img3.png", "./../img/about/img4.png", "./../img/about/img5.png"];

let index = 0;

const slide = document.getElementById('slide');
function next() {
    if (index < images.length - 1) {
        index++
    }
    else {
        index = 0
    }
    slide.src = images[index]
}
function back() {
    if (index > 0) {
        index--
    }
    else {
        index = images.length - 1;
    }
    slide.src = images[index]
}
setInterval(next, 2000);

// script.js
document.getElementById('search-bar').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const participants = document.querySelectorAll('.participant');
  
    participants.forEach((participant) => {
      const name = participant.textContent.toLowerCase();
      participant.style.display = name.includes(filter) ? 'block' : 'none';
    });
  });
  