$(function(){
    // 사이즈
    $(".size button:nth-of-type(1)").click(function(){
        $(".payment").hide();
        $("#payone").show();
    });
    $(".size button:nth-of-type(2)").click(function(){
        $(".payment").hide();
        $("#paytwo").show();
    });
    $(".size button:nth-of-type(3)").click(function(){
        $(".payment").hide();
        $("#paythree").show();
    });
    $(".size button:nth-of-type(4)").click(function(){
        $(".payment").hide();
        $("#payfour").show();
    });
    $(".size button:nth-of-type(5)").click(function(){
        $(".payment").hide();
        $("#payfive").show();
    });
    $(".size button:nth-of-type(6)").click(function(){
        $(".payment").hide();
        $("#paysix").show();
    });
    $(".size button:nth-of-type(7)").click(function(){
        $(".payment").hide();
        $("#payseven").show();
    });
    $(".size button:nth-of-type(8)").click(function(){
        $(".payment").hide();
        $("#payeight").show();
    });
    $(".size button:nth-of-type(9)").click(function(){
        $(".payment").hide();
        $("#paynine").show();
    });
    $(".size button:nth-of-type(10)").click(function(){
        $(".payment").hide();
        $("#payten").show();
    });
    $(".size button").click(function(){
      $("section").css("height","700px");

      $("#product ul:nth-of-type(2)").css("display","block");
      $("#product ul:nth-of-type(2) li").css("margin","575px 0 0 0");
      $("#product ul:nth-of-type(1)").css("display","block");
      $("#product ul:nth-of-type(1)").css("position","absolute");
      $("#product ul:nth-of-type(1)").css("z-index","99");
      $("#product button").css("display","none");
    });
    $(".top button").click(function(){
        $(".payment").hide();
        $("section").css("height","600px");
        $("#product ul:nth-of-type(2)").css("display","none")
        $("#product ul:nth-of-type(2) li").css("margin","470px 0 0 0")
        $("#product button").css("display","block");

    });
    // 리뷰,문의
    $("#review .textboxd ul li a").click(function(){
        $("#review .textboxd ul li a").css("background-color","#fff");
        $("#review .textboxd ul li a").css("color","#333");
        $("#review .textboxd ul li a").css("border","1px solid #666");
    });
    $("#qna .textboxd ul li a").click(function(){
        $("#qna .textboxd ul li a").css("background-color","#fff");
        $("#qna .textboxd ul li a").css("color","#333");
        $("#qna .textboxd ul li a").css("border","1px solid #666");
    });
    $("#review .textboxd ul li:nth-of-type(1) a").click(function(){
        $(this).css("background-color","#333");
        $(this).css("color","#fff");
        $(this).css("border","2px solid #aaa");
    });
    $("#review .textboxd ul li:nth-of-type(2) a").click(function(){
        $(this).css("background-color","#333");
        $(this).css("color","#fff");
        $(this).css("border","2px solid #aaa");
    });
    $("#review .textboxd ul li:nth-of-type(3) a").click(function(){
        $(this).css("background-color","#333");
        $(this).css("color","#fff");
        $(this).css("border","2px solid #aaa");
    });
    $("#review .textboxd ul li:nth-of-type(4) a").click(function(){
        $(this).css("background-color","#333");
        $(this).css("color","#fff");
        $(this).css("border","2px solid #aaa");
    });
    $("#review .textboxd ul li:nth-of-type(5) a").click(function(){
        $(this).css("background-color","#333");
        $(this).css("color","#fff");
        $(this).css("border","2px solid #aaa");
    });
    $("#qna .textboxd ul li:nth-of-type(1) a").click(function(){
        $(this).css("background-color","#333");
        $(this).css("color","#fff");
        $(this).css("border","2px solid #aaa");
    });
    $("#qna .textboxd ul li:nth-of-type(2) a").click(function(){
        $(this).css("background-color","#333");
        $(this).css("color","#fff");
        $(this).css("border","2px solid #aaa");
    });
    $("#qna .textboxd ul li:nth-of-type(3) a").click(function(){
        $(this).css("background-color","#333");
        $(this).css("color","#fff");
        $(this).css("border","2px solid #aaa");
    });
    $("#qna .textboxd ul li:nth-of-type(4) a").click(function(){
        $(this).css("background-color","#333");
        $(this).css("color","#fff");
        $(this).css("border","2px solid #aaa");
    });
    $("#qna .textboxd ul li:nth-of-type(5) a").click(function(){
        $(this).css("background-color","#333");
        $(this).css("color","#fff");
        $(this).css("border","2px solid #aaa");
    });
    $("#click").click(function(){
        $("#guide").show();
        $('html, body').css({'overflow': 'hidden'});
    });
    $("#close").click(function(){
        $("#guide").hide();
        $('html, body').css({'overflow': 'auto'});

    });
    $("#product ul:nth-of-type(1) li:nth-of-type(1)").mouseover(function(){
        $(".best1").attr("src","img/best/best1_1.jpg");
    });
    $("#product li:nth-of-type(2)").mouseover(function(){
        $(".best1").attr("src","img/best/best1_0.jpg");
    });
    $("#product li:nth-of-type(3)").mouseover(function(){
        $(".best1").attr("src","img/best/best1_2.jpg");
    });
    $("#product li:nth-of-type(4)").mouseover(function(){
        $(".best1").attr("src","img/best/best1_3.jpg");
    });
    $("#product ul:nth-of-type(2) li:nth-of-type(1)").mouseover(function(){
        $(".best1").attr("src","img/best/best1_4.jpg");
    });
    $("#product ul:nth-of-type(2) li:nth-of-type(2)").mouseover(function(){
        $(".best1").attr("src","img/best/best1_5.jpg");
    });
    $("#product ul:nth-of-type(2) li:nth-of-type(3)").mouseover(function(){
        $(".best1").attr("src","img/best/best1_6.jpg");
    });
    $("#product ul:nth-of-type(2) li:nth-of-type(4)").mouseover(function(){
        $(".best1").attr("src","img/best/best1_7.jpg");
    });
    $("#product button:first-of-type").click(function(){
        $("#product ul:nth-of-type(1)").show();
        $("#product ul:nth-of-type(2)").hide();
    });
    $("#product button:nth-of-type(2)").click(function(){
        $("#product ul:nth-of-type(2)").show();
        $("#product ul:nth-of-type(1)").hide();
    });
});