'use strict';

var divPoID = document.querySelector('#parSecond');
console.log(divPoID);

var pierwszyLinkPoSelektorze = document.querySelector('.superlink');
console.log(pierwszyLinkPoSelektorze);

var linkiPoSelektorze = document.querySelectorAll('.superlink');
console.log(linkiPoSelektorze);

linkiPoSelektorze.forEach( (link, i) => {
    console.log(link, i);
});