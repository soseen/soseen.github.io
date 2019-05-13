var btn = $('#btn-1');

btn.click(function(){

    var container = $('<div></div<');
    $.getJSON
    ('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
        response => {
            $.each(response ,function(key, value){
                console.log(key, value);
                container.append(`<p>${key}: ${value}</p>`);
                });
            $('body').append(container);
            }
    );
})