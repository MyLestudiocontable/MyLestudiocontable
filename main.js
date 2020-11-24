

$(window).on('scroll', function(){
    
    if($(window).scrollTop()){
    
    $('nav').addClass('black');
   
    }else{
        $('nav').removeClass('black');
        
    }
    })

   

    $(window).on('scroll', function(){
    
        if($(window).scrollTop()){
        
           
            $('.subir').removeClass('borrar');
        }else{
           
            $('.subir').addClass('borrar');
        }
        })