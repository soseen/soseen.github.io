'use strict';



const walidujFormularz = (e) => {

    e.preventDefault();

    console.log("Wszedlem do funkcji przed ifem");

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let checkbox = document.getElementById("zgoda-marketingowa-1");

    let errorMessage = document.createElement("p");
    let messageText = document.createTextNode("Wypełnij wszystkie pola");
    errorMessage.appendChild(messageText);

        
    if(name.value == "" || email.value == "" || checkbox.value == null){
        console.log("Wszedlem do funkcji");
        document.body.appendChild(errorMessage);
    } 
}

let send = document.getElementById("wyslij");
send.onclick = walidujFormularz;

