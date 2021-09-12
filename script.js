const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');
const logo = document.getElementById('logo');
const header = document.getElementById('headerfontsize');
const btnSize = document.querySelectorAll('.main-slider-button');
let count = 0;
let width;

function init() {
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    logo.style.width = width / 4 + 'px';
    header.style.fontSize = width / 40 + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    btnSize.forEach(item => {
        item.style.width = width / 8 + 'px';
        item.style.height = 'auto';
        item.style.fontSize = width / 95 + 'px';
    });
};

init();

window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}