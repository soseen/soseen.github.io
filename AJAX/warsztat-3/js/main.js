
var btn = $('#btn-1');


function getItems() {
    $.getJSON
    ('http://leguralnie.pl/json/ogloszenia-json.json',
        response => {
            console.log(response);
            response.forEach((element, index) => {
                console.log(element);
                // console.log(index);
                console.log(element.image);
                // console.log(response[index]);
                var container = document.createElement('div');
                container.classList.add('ad-container');
                var info = document.createElement('div');
                info.classList.add('info');
                document.body.appendChild(container);
                var figure = document.createElement('figure');
                var img = document.createElement('img');
                img.setAttribute("src", element.image);
                figure.appendChild(img);
                container.appendChild(figure);
                ['id', 'title', 'description', 'category', 'city', 'contact'].forEach((el) => {
                    let paragraf = document.createElement('p');
                    paragraf.innerHTML = `${element[el]}`;
                    info.appendChild(paragraf);
                });
                
                container.appendChild(info);
                document.body.appendChild(container);
            });
        }
    );
}



btn.click(getItems);