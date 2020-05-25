let h1 = document.getElementById('h1');
let heart = document.getElementById('heart');
let bigHeart = document.getElementById('big-heart');
let hugeHeart = document.getElementById('huge-heart');
let textBox1 = document.getElementById('container1');
let textBox2 = document.getElementById('container2');
let textBox3 = document.getElementById('container3');
let h2 = document.getElementById('h2');
let nextButton = document.getElementById('next');
let endContainer = document.getElementById('end-container');
let reloadButton = document.getElementById('reload');


function animation() {

    h1.style.opacity = '0';

    setTimeout( ()=>{
        textBox1.style.left = '400%';
    }, 500);

    setTimeout( ()=>{
        textBox2.style.left = '-200%';
    }, 500);

    setTimeout( ()=>{
        textBox3.style.top = '4vh';
        h2.style.top = '20%';
        h2.style.transform = 'translate(-50%, -20%)';
        nextButton.style.top = '50%';
    }, 2500);

    setTimeout ( () => {
        nextButton.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 3000)

    setTimeout( ()=> {
        heart.style.transform = 'scale(6) rotate(45deg)';
    },900)

    setTimeout( ()=> {
        bigHeart.style.transform = 'scale(6) rotate(45deg)';
    },600)

    setTimeout( ()=> {
        hugeHeart.style.transform = 'scale(6) rotate(45deg)';
    },300)

    
    setTimeout( ()=> {
        heart.style.animation = 'aa';
        bigHeart.style.animation = 'aa';
        hugeHeart.style.animation = 'aa';
        h1.style.display = 'none';
    },1000)
    
}

function next() {
    setTimeout( () => {
        reloadButton.style.top = '2vh';
    },2300)

    setTimeout( () => {
        endContainer.style.transform = 'scale(1)';
    },1900)

    setTimeout( ()=> {
        heart.style.transform = 'scale(0) rotate(45deg)';
        heart.style.animation = 'animation-core';
    },900)

    setTimeout( ()=> {
        bigHeart.style.transform = 'scale(0) rotate(45deg)';
        bigHeart.style.animation = 'big-animation-core';
    },600)

    setTimeout( ()=> {
        hugeHeart.style.transform = 'scale(0) rotate(45deg)';
        hugeHeart.style.animation = 'huge-animation-core';
    },300)

    setTimeout( () => {
        textBox3.style.opacity = '0';
        h2.style.opacity = '0';
        nextButton.style.opacity = '0';
    },600)
}

function reload() {
    window.location.reload(true);
}
