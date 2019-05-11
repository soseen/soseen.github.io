'use strict';

var mainHeader = document.getElementById('header');

// caly skrypt HTML wewnatrz podanego
console.log(mainHeader.innerHTML);
// tylko biale pola HTML tj tekst
console.log(mainHeader.innerText);
// caly skrypt HTML lacznie z tym do ktorego sie odwolujemy
console.log(mainHeader.outerHTML);


mainHeader.id = "nowe-id";

mainHeader.setAttribute("class", "header");

mainHeader.className = "nowa-klasa";

// petla przyporzadkowuje elementy danej klasy do zmiennej "klasy"
let klasy = mainHeader.className;


// Dodanie nowej klasy do elementu
// mainHeader.classList.add("active");

console.log(mainHeader);


var btn = document.getElementById('toggle');
btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    console.log(btn);
});

console.log(btn);

btn.style.color = "red";
// nie zmieni sie wtedy w event listenerze bo ta komenda jest wyzej w hierarchii
btn.style.backgroundColor = "lime";

