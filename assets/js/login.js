$(document).ready(function(){ 
	
    $(document).bind("click",function(e){ 
        var target = $(e.target); 
       
        if(target.closest("#loginbtn").length == 1){ 
            createLoginWindow();
        }
        if(target.closest("#logoutbtn").length == 1){ 
            $.get("../../Doctor/php/logout.php", {},
                function(){
                    window.location.reload();
            });
        }

    });

    // $("#loginbtn").bind("click",function(e){ 
        
    //         createLoginWindow();
        
    // });

    // $("#logoutbtn").bind("click",function(e){

    //         $.get("../../Doctor/php/logout.php", {},
    //             function(){
    //                 window.location.reload();
    //         });
        
    // })
});


function createMidlayer(NODE) {
    var height = $(NODE).height(),
        width = $(NODE).width(),
        top = $(NODE).offset().top,
        left = $(NODE).offset().left;

    $(NODE).before("<div class='midlayer'></div>");
    $(".midlayer").css("top", top);
    $(".midlayer").css("left", left);
    $(".midlayer").css("height", height);
    $(".midlayer").css("width", width);
}


function createLoginWindow() {
    var loginHTML = "";
    var curURL = window.location.href;


    loginHTML = "" + 
        '<div class="loginWindow">' + 
            '<div class="userInput">' + 
                '<form name="LoginForm" method="post" action="../../Doctor/php/login.php?action=login" onSubmit="return InputCheck(this)" class="loginForm">' + 
                    '<label>用戶登入</label>' + 
                    
                    '<input id="username" name="username" type="text" class="input" placeholder="用戶名稱" />' + 
                    '<input id="password" name="password" type="password" class="input" placeholder="密碼" />' + 
                    '<input type="hidden" name="url" type="text" value="' + curURL + '">' +

                    '<input type="button" name="register" value="用戶註冊" id="register" />' + 
                    '<input type="submit" name="submit" value=" 登入 " id="submit" />' + 
                    

                    '<p>' + 
                        '<span>免費註冊</span>' + 
                        '<span>註冊用戶可以使用以下功能</span>' + 
                    '</p>' + 
                '</form>' + 
            '</div>' + 
            
            '<div class="loginFunc">' + 
                '<div><img src="../../Doctor/img/login/heart.png"><p>儲存最愛文章</p></div>' + 
                '<div><img src="../../Doctor/img/login/doctor_favor.png"><p>記下要找的醫生</p></div>' + 
            '</div>' + 

            '<button class="closeWindow">X</button>' +

        '</div>';


    createMidlayer("#pageContent");
    $(".midlayer").before(loginHTML);

    $(".closeWindow").unbind("click").click(function(){
    	$(this).closest(".loginWindow").remove();
    	$(".midlayer").remove();
    });

}



