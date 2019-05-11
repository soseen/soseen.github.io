'use strict';

let btn = document.createElement("button");
console.log(btn);
let txBtn = document.createTextNode("Kliknij mnie!");
console.log(txBtn);
let classBtn = document.createAttribute("class");
classBtn.value = "btn";
console.log(classBtn);

btn.appendChild(txBtn);
btn.setAttributeNode(classBtn);
btn.setAttribute("onclick", "btnClick();");

document.body.appendChild(btn);

// document.getElementById('parFirst').appendChild(btn);

btn.removeAttribute("onclick");

btn.parentElement.removeChild(btn);

