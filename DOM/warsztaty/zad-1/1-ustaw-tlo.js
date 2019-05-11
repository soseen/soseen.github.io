'use strict';



const ustawTlo = () => {

    let paragraf1 = document.getElementById("paragraf-1");
    let paragraf2 = document.getElementById("paragraf-2");

    paragraf1.style.backgroundColor = "red";
    paragraf2.style.backgroundColor = "yellow";
}

let btn = document.getElementById("btn-1");

btn.addEventListener("click", ustawTlo);

