const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.second-hand');
const numbers = document.querySelectorAll('.number');

let number;

for(let i = 1; i < numbers.length; i++){
    let degrees = 30 * i;
    number = document.querySelector(`.number${i}`);
    number.style.cssText = `transform: rotate(${degrees}deg)`;
}

setInterval(setClock, 1000);

function setClock(){
    let date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes())/60;
    const hour = (minutes + date.getHours())/12;

    rotateHands(secHand, seconds);
    rotateHands (minHand, minutes);
    rotateHands (hourHand, hour);
}

function rotateHands(element, ratio){
    element.style.setProperty('--rotation', ratio * 360);
}

setClock();


