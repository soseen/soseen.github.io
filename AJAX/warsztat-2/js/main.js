

// const getData = () => {

// }





// window.addEventListener('scroll', getData);








// fetch('https://jsonplaceholder.typicode.com/users')
//     .then( response => response.json())
//     .then( response => {
//     var osoby = response;  
//     console.log(osoby);

//     window.onscroll = function() {
//         if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
//             if(osoby.length >=3){
//                 for(var i = 0; i<3; i++){
//                     ['id', 'name', 'email'].forEach((element) => {
//                         let paragraf = document.createElement('p');
//                         paragraf.innerHTML = `${element.toLocaleUpperCase()}: ${osoby[i][element]}`;
//                         document.body.appendChild(paragraf);
//                     });
//                 }
//                 osoby.splice(0,3); 
//                 }
//             }

//             else if(osoby.length >=0 && osoby.length <3){
//                 for(var i = 0; i<osoby.length; i++){
//                     ['id', 'name', 'email'].forEach((element) => {
//                         let paragraf = document.createElement('p');
//                         paragraf.innerHTML = `${element.toLocaleUpperCase()}: ${osoby[i][element]}`;
//                         document.body.appendChild(paragraf);
//                     });
//                 }
//                 osoby.splice(0,3); 
//             }
            
            
//     }
// });
    
        



