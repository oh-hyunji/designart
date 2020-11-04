$(document).ready(function(){
    var slideBoxHeight = $('#slideBox img').height();
    $('#slideBox').css('height', slideBoxHeight);

    $(window).resize(function(){
        var slideBoxHeight = $('#slideBox img').height();
        $('#slideBox').css('height', slideBoxHeight);
    });

    var slideLoop;
    var slideNum = 0;
    var circleNum;
    $.slide = function(mark){
        $('#slideBox img').stop().fadeOut();
        $('.slideMark').css('background-color', 'rgba(255, 255, 255, .6)');
       
        if(mark == 'y') slideNum = circleNum;
        if(slideNum > 2) slideNum = 0;
       
        $('#slideBox img').eq(slideNum).stop().fadeIn();
        $('.slideMark').eq(slideNum).css('background-color', '#fff');
        $('.titleBox strong').text('Design ' + (slideNum + 1));

        slideNum++;
        slideLoop = setTimeout(function(){$.slide();}, 2000);
    }
    $.slide();

    $('.slideMark').on('click', function(){
        clearTimeout(slideLoop);
        circleNum = $(this).index();
        $.slide('y');
    });

    $('#naviBox').mouseover(function(){
        $('.slide, .slideBack').slideDown(200);
    }).mouseleave(function(){
        $('.slide, .slideBack').slideUp(200);
    });

    var infoBoxNum = 0;
    $('.right').on('click', function(){
        $('.boxC').stop().css({'left':'0','right':'-100%', 'opacity':'0'});
        $('.markC').stop().css({'background': '#d8d8d8'});

        infoBoxNum++;
        if(infoBoxNum > 1) infoBoxNum = 0;

        $('.markC').eq(infoBoxNum).stop().css({'background': '#9E9E9E'});
        $('.boxC').eq(infoBoxNum).stop().animate({
            'right':'0px',
            'opacity':'1'
        },800);
    });

    $('.left').on('click', function(){
        $('.boxC').stop().css({'right':'0', 'left':'-100%', 'opacity':'0'});
        $('.markC').stop().css({'background': '#d8d8d8'});

        infoBoxNum--;
        if(infoBoxNum < 0) infoBoxNum = 1;

        $('.markC').eq(infoBoxNum).stop().css({'background': '#9E9E9E'});
        $('.boxC').eq(infoBoxNum).stop().animate({
            'left':'0px',
            'opacity':'1'
        },800);
    });
    
    // window scroll event
    $(window).scroll(function(){
        var scrollT = $(this).scrollTop();
        if(scrollT >= 100) { 
            $('#header').css('box-shadow', '0 6px 12px rgba(0, 0, 0, .175)');
            $('#scrollTopBt').fadeIn();
        } else {
            $('#header').css('box-shadow', 'none');
            $('#scrollTopBt').fadeOut();
        }
    });

    // scroll top button
    $('.scrollTopIcon').on('click', function(){
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
        return false;
    });
});
