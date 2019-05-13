// let paragrafy = $('p');
// // console.log(paragrafy.text());

// paragrafy.text('Nowy tekst paragrafu');

// let paragrafyByHtml = $('p');
// console.log(paragrafyByHtml.html());

// // wstawianie contentu do paragrafu
// paragrafyByHtml.html('<span>Treść ze znacznika span</span>')



 let naglowek2 = $('#naglowek-2');
// naglowek2.prepend('Prependujemy treść nagłówka | ');
// naglowek2.append(' | Apendujemy treść nagłówka');

// naglowek2.before('Before nagłówka');
// naglowek2.after('<p>After nagłówka</p>');

// usuniecie contentu naglowka
// naglowek2.empty();

// usuniecie naglowka
// naglowek2.remove();

naglowek2.replaceWith('<span>Span</span>');


// css kilku parametrow
// let paragrafy = $('p');
// paragrafy.css({
//     'background-color': 'aquamarine',
//     'font-size': '2em',
//     'color': 'green'
//     });

// eq() zwraca podany element tablicy
// let pierwszyParagraf = $('.par').eq(0);
// console.log(pierwszyParagraf);

// pierwszyParagraf.addClass('red');
// pierwszyParagraf.removeClass('red');

$('input#input-1').val('Jan Kowalski');

$('input').change(function(){
    console.log($(this).val());
});