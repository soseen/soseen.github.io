let naglowek1 = $('#naglowek-1');

naglowek1.click(function(){
    $(this).css({
    'background-color': 'gray',
    'color': 'yellow', 
    'text-decoration': 'underline'
    });
});

let naglowek2 = $('#naglowek-2');

naglowek2.on({
    'click': function() {
        $(this).css('background-color', 'green');
    },
    'mouseenter': function() {
        $(this).css({
            'font-size': '3em',
            'transition': 'all .4s'});
    },
    'mouseleave': function() {
        $(this).css('font-size', 'inherit');
    }
});


