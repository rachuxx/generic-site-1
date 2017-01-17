$(function(){
  $('.starter').fadeIn('slow');
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.fading_in').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop();
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},5000);

            }

        });

    });

});
