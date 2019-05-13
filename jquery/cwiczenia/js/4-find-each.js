$('body')
.find('.par-2')
.text('Tekst zmieniony w metodzie find()')
.css('color', 'red');

let par2 = $('.par-2');


par2.each(function(index, element) {
    console.log(index, element);
    if (index == 0 || index == 2){
        $(element)
        .css('color', 'gray')
        .text('Tekst zmieniony w metodzie each()');
    } else if (index == 1){
        $(element)
        .css('color', 'blue')
        .text('Tekst zmieniony w metodzie each()');
    }
});