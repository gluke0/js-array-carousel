// array 5 immagini
// una è in html e le altre vengono aggiunte da js
// frecce attive per cambiare immagini, una si nasconde e compare altra

// let path = ['./assets/img/']

const images = [
    './assets/img/01.webp', 
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp',
];

let slider = document.querySelector('.main-img');

for (let i = 0; i < images.length; i++) {
    slider.innerHTML += `<div class="item"><img src="${images[i]}" alt="image"></div>`
}

const item = document.querySelector('.item');
item.classList.add('active');

const thumb = document.querySelector('.thumb');
thumb.classList.add('selected');

let arrowUp = document.querySelector('.up');
let arrowDown = document.querySelector('.down');
let items = document.querySelectorAll('.item');
let thumbs = document.querySelectorAll('.thumb');

let active = 0;

arrowDown.addEventListener('click',
function() {
    items[active].classList.remove('active');
    thumbs[active].classList.remove('selected');

    if (active == images.length - 1) {
        active = 0;
    } else {
        active++;
    }

    items[active].classList.add('active');
    thumbs[active].classList.add('selected');
})