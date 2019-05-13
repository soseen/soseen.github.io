//  AJAX - fetch
//fetch('https://jsonplaceholder.typicode.com/posts')
//     .then( response => response.json())
//     .then( response => console.log(response));

// AJAX - $.getJSON()

// $.getJSON
//         ('https://jsonplaceholder.typicode.com/posts',
//         response => {
//             console.log(response);
//         }
// );

// AJAX - $.ajax()
// $.ajax({
//     url: "https://jsonplaceholder.typicode.com/users",
//     dataType: "json",
//     success: function (resultJSON) {
//     console.log(resultJSON);
//     },
//     onerror: function (msg) {
//     console.log(msg);
//     }
//     });

// AJAX - czysty javascript
const ajax = (method, url) => {
    // tworzymy obiekt
    let httpReq = new XMLHttpRequest();

    // otwieramy połączenie
    httpReq.open(method, url);

    // obsluga po dotarciu do serwera
    httpReq.onreadystatechange = () => {
        // czy osiagnieto stan gotowosci
        if(httpReq.readyState == 4){

            // czy jest ok i dane zostaly zwrocone
            if(httpReq.status == 200){
                let response = httpReq.responseText;

                // parsujemy JSON stringa do tablicy obiektow
                response = JSON.parse(response);
                console.log(response);
            }
            
            httpReq = null;
        }
    }

    // wywolujemy onreadystatechange()
    httpReq.send();
}

ajax('GET', 'https://jsonplaceholder.typicode.com/users');


setInterval(() => {
     ajax('GET', 'https://jsonplaceholder.typicode.com/users');
 }, 3000);