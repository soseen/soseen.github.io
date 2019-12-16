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
    ('https://cors-anywhere.herokuapp.com/https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Oriana%20Brande?api_key=RGAPI-2ffe004c-fa7f-4a5d-9a8b-7f4516ae0a90',
        response => {
            $.each(response, function(key, value){
                console.log(key, value);
                if(key == 'name' || key == 'summonerLevel'){
                    var paragraph = $('<p></p>').text(`${key}: ${value}`);
                    paragraph.css({
                        'margin-left': '2px',
                        'font-family': 'Tahoma, Geneva, sans-serif'
                    });
                    container.append(paragraph);
                }
                });
            $('body').append(container);
            }
    );
})