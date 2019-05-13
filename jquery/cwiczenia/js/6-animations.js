
// $('#naglowek-1').hide('slow').show('fast');

// $('#naglowek-2').fadeOut('slow').fadeIn('slow');

// $('#naglowek-2').slideUp('slow').slideDown('slow');




function przesunNaSrodek() {
    $('#naglowek-1').delay(1000).animate({
        'margin-left': '500px',
        'font-size': '4em'
    }, 3000, przesunNaPoczatek);
}

function przesunNaPoczatek() {
    $('#naglowek-1').delay(1000).animate({
        'margin-left': '0px',
        'font-size': 'inherit'
    }, 3000, przesunNaSrodek);
}

przesunNaSrodek();