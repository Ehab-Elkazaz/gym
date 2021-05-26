$(document).ready(function(){

    $('#menue').click(function(){
        $(this).toggleClass('fa-times');
        $('.nav-bar').toggleClass('tog-nav');
    });

    $(window).on('scroll load',function(){
        $('#menue').removeClass('fa-times');
        $('.nav-bar').removeClass('tog-nav'); 

        if($(window).scrollTop()>900){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }
        
        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.nav-bar ul li a').removeClass('active');
                $('.nav-bar').find(`[href="#${id}"]`).addClass('active');
            }

        });
    });

    

});