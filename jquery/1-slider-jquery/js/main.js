
$(function() {
    // const slider = $('#slider');
    const slideShow = $('.slide-show');
    const slides = $('.single-slide');
    const slideWidth = 100 / slides.length;
    const prevButton = $('.prev-slide');
    const nextButton = $('.next-slide');
    var currentSlide = 0;

    // USTAWIAMY DYNAMICZNIE SZEROKOŚĆ KONTENERA
    slideShow.css('width', $(slides).length * 100 + '%');

    // USTAWIAMY DYNAMICZNIE SZEROKOŚĆ OBRAZKÓW
    slides.each(function(index){
        $(this).css({
            'width': slideWidth + '%',
            'margin-left': index * slideWidth + '%'
        });
    });


 

    // EVENTY PRZYCISKÓW

    // function getNextSlide(currentSlide){
    //     if(currentSlide != slides.eq(slides.length-1)){
    //         currentSlide += 1;
    //         slideShow.css('margin-left': )
    //     }

      
    //     return currentSlide;
    // }

    // prevButton.click(getPrevSlide);
    // nextButton.click(getNextSlide);

    prevButton.click(function(){
        slide(currentSlide - 1);
    });

    nextButton.click(function(){
        slide(currentSlide + 1);
    });

    function slide(newSlide){
        if(newSlide >= 0 && newSlide <= slides.length - 1){
            $('.slide-caption').eq(newSlide).fadeOut('0');
            currentSlide = newSlide;
            console.log(currentSlide);

            const marginLeft = newSlide * (-100) + '%';


            slideShow.animate({
                'margin-left': marginLeft
            }, 1000, function() {
                $('.slide-caption').eq(newSlide).fadeIn('3000');
            });
        }
    }
});



// slides.each(function(slide){
//     $(slide).css({'height': '100%'})
// })
