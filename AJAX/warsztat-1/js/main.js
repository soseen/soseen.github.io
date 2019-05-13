

// var btn = document.getElementById('btn-1');

// const getData = () => {
//     fetch('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl')
//     .then( response => response.json())
//     .then( response => console.log(response));
// }

// btn.addEventListener('click', getData);


// PROSTACKO
// var btn = $('#btn-1');
// btn.click(function(){
//     $.getJSON
//         ('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl',
//         response => {
//             console.log(response);
//             ['userName', 'userURL', 'userId'].forEach((element) => {
//                 let value = response[element];
//                 console.log(value);
//                 let elementHtml = document.createElement('p');
//                 elementHtml.innerHTML = `${element}: ${value}`;
//                 document.body.appendChild(elementHtml);
//             })
//         });
// });

// LEPSIEJSZA METODA
var btn = $('#btn-1');

const getData = () => {
    $.getJSON
        ('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl',
        response => {
            console.log(response);
            for(att in response){
                console.log(att, response[att]);
                var paragraph = $('<p></p>').text(`${att}: ${response[att]}`);
                $('body').append(paragraph);
            }
        });
}

btn.click(getData);

