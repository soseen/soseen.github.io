'use strict';

var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);
console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.parentElement);

console.log(pierwszyDiv.children);

console.log(pierwszyDiv.firstChild);
console.log(pierwszyDiv.lastChild);

var pierwszyChild = pierwszyDiv.childNodes[5];
console.log(pierwszyChild);
console.log(pierwszyChild.nextElementSibling.nextElementSibling);