var btn = $('#btn-1');

btn.click(function(){

    var container = $('<div></div<').attr('id', 'dane-programisty');
    container.css({
        'background-color': 'bisque',
        'width': '10%',
        'border': '1px solid black',
        'margin-top': '2px'
    });
    $.getJSON
    ('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
        response => {
            $.each(response ,function(key, value){
                console.log(key, value);
                var paragraph = $('<p></p>').text(`${key}: ${value}`);
                paragraph.css({
                    'margin-left': '2px',
                    'font-family': 'Tahoma, Geneva, sans-serif'
                });
                container.append(paragraph);
                });
            $('body').append(container);
            }
    );
})