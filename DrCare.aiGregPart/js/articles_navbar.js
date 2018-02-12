$(document).ready(function(){
	
    changeLeftNavbarLayout("out");

    $(document).bind("click",function(e){ 
        var target = $(e.target); 

        // if(target.closest("#navbar").length == 1){ 
        //     $("#navbar").css("left", "-200px");
        // }
    });


	$("#navbarTop > #menuBtn").unbind("click").click(function(){
		if($("#navbar").css("left") == "0px"){
            $('#navbar').animate({"left": '-=200'});
            if(!$(".loginWindow")){
                $(".midlayer").remove();
            }
        }
        else if($("#navbar").css("left") == "-200px"){
            $('#navbar').animate({"left": '+=200'});
            createMidlayer(".mainContainer");
        }
	});

    $("#navbar").find("#menuBtn").unbind("click").click(function(){
        if($(window).width() > 980) {
            if($("#navbar").css("width") == "180px"){
                changeLeftNavbarLayout("in");
        $('.mainContainer').css("cssText", "width:calc(100% - 50px) !important;left:50px !important");
            }
            else if($("#navbar").css("width") == "30px"){
            	changeLeftNavbarLayout("out");
        $('.mainContainer').css("cssText", "width:calc(100% - 200px) !important;left:200px !important");
            } 
        }
    });

    $("#navbar > #bottomNav > .category").children("button").unbind("click").click(function(){
        $(this).parent().children("div").fadeToggle();
    });

});

function changeLeftNavbarLayout(action) {
	if(action == "in") {
		$('#navbar').css("width", "30px");
        $('#upperNav').find(".navIcon").css("left", "0");
        $('#upperNav').find(".navText").css("left", "50px");


        // btns
        $('.navBtn').css("width", "30px");
        $(".navBtn").unbind("mouseenter").unbind("mouseleave");

        // bottom
        $(".userInfo").css("display", "none");
        $(".category").children("button").css("display", "none");
        $(".category").children("div").css("display", "inline");

        //status
        $("#navbar").find("#login").css("display", "none");
        $("#navbar").find("#register").css("display", "none");
        $("#navbar").find("#logout").css("display", "none");

        
        $(".navBtn").css("transition", "all 0.5s");
        $(".navBtn").hover(function(){
		    $(this).css("width","180px");
		},function(){
		    $(this).css("width","30px");
		});


	}
	else if(action == "out") {
		$('#navbar').css("width", "180px");
        $('#upperNav').find(".navIcon").css("left", "10px");
        $('#upperNav').find(".navText").css("left", "60px");


        // btns
        $('.navBtn').css("width", "180px");
        $(".navBtn").unbind("mouseenter").unbind("mouseleave");

        // bottom
        $(".userInfo").css("display", "inline");
        $(".category").children("button").css("display", "inline");

        //status
        $("#navbar").find("#login").css("display", "inline");
        $("#navbar").find("#register").css("display", "inline");
        $("#navbar").find("#logout").css("display", "inline");

        $(".navBtn").hover(function(){
		    $(this).css("background","#AAA");
		},function(){
		    $(this).css("background","#003E3E");
		});
		
        $(".navBtn").css("transition", "all 0.5s");
	}
}
