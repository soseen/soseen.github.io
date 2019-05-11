'use strict';

let parSecond = document.querySelector("#parSecond");
console.log(parSecond);

let parWParSecond = document.getElementById("parWParSecond");
console.log(parWParSecond);

const klikDiv = (e) => {
    console.log("Kliknięto DIV");
}

const klikParagraf = (e) => {
    console.log("Kliknięto Paragraf");
}

parSecond.addEventListener("click", klikDiv);
parWParSecond.addEventListener("click", klikParagraf);


// const klikAlert = () => {
//     alert("kliknięto DIV");
// }

// callback. wykonuje sie tylko w okreslonym momencie a nie w trakcie kompilacji
// parSecond.onclick = klikAlert;

// Najlepszy sposob, ponownie nie piszemy klikalert() bo nie chcemy wywolac tego natychmaist
// parSecond.addEventListener('click', klikAlert);

// inny sposob z Event Listenerem
// parSecond.addEventListener('click', () => {
//     alert('funkcja anonimowa CLICK');
// });

// const linkAlert = (e) => {
//     e.preventDefault();
//     console.log(e.target);
//     alert('kliknieto Link');
// }

// let link = document.querySelector('.link');
// link.addEventListener('click', linkAlert);
