$(function(){

    $(".main > li").hover(function(){
        $(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    })

    var n = 0;

    setInterval(function(){

        if(n == 2){
            n=0;
        }else{
            n++;
        }//if
        console.log(n)

        $(".top_move").animate({top : n * (-300) + "px"} , 500)

    }, 2500)

    $(".pop").click(function(){
        $(".popup").show();
    })

    $(".close").click(function(){
        $(".popup").hide();
    })



    $(".cont1 h2").click(function(){

        $(".container .cont1 h2").addClass("on")
        $(this).removeClass("on");

        $(".cont1 ul").hide();
        $(this).next().css({display : "flex"})
        

    })// click cont1














})//jQ fin.