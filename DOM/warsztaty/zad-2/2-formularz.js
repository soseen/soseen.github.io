'use strict';

let submit = document.getElementById("formularz").lastElementChild;


const sendForm = (e) => {
        e.preventDefault();
        let name = document.getElementById("formularz").firstElementChild.value;
        // let surname = document.getElementById("formularz").childNodes[5].value;
        let surname = document.querySelector('input[name="lname"]').value;

        console.log(name);
        console.log(surname);
    }

submit.onclick = sendForm;