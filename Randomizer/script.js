
let value3 = document.getElementById("3-dropdown").value;
let value4 = document.getElementById("4-dropdown").value;
let value5 = document.getElementById("5-dropdown").value;


const maximumNumbers = 32;
let numbersCollection = new Array;

let initValue3 = document.getElementById("3-dropdown").value;
let initValue4 = document.getElementById("4-dropdown").value;
let initValue5 = document.getElementById("5-dropdown").value;

 let howManyLeft = maximumNumbers - initValue3 - initValue4 - initValue5;

 let counter = document.getElementById("counter");
 counter.append(`Pozostało: ${howManyLeft}`);


let selectElement = document.querySelectorAll('select');

for (var i = 0; i<selectElement.length; i++){
selectElement[i].addEventListener('input', () => {
    console.log("Zauwazono zmiane");

    value3 = document.getElementById("3-dropdown").value;
    value4 = document.getElementById("4-dropdown").value;
    value5 = document.getElementById("5-dropdown").value;

    counter = document.getElementById("counter");

    let howManyLeft = maximumNumbers - value3 - value4 - value5;
    counter.innerHTML = `Pozostało: ${howManyLeft}`;

    return value3, value4, value5;
});
}




const defineCollection = (e) => {

    e.preventDefault();

            for(var i = 0; i<value3; i++){
                numbersCollection.push("3");
            }

            for(var j = 0; j<value4; j++){
                numbersCollection.push("4");
            }

            for(var k = 0; k<value5; k++){
                numbersCollection.push("5");
            }

    console.log(numbersCollection);

    return numbersCollection;
}

let btn = document.getElementById("define-btn");
btn.addEventListener("click", defineCollection);

