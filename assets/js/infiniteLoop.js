//testing purpose
    var content = [{'image':'images/banner.png', 'title': 'Gravida veroeros', 'content':'Donec consectetuer ligula vulputate sem tristique cursus. Lorem nulla sed gravida non. Phasellus et ultricesnulla quis nibh. Quisque amet lorem lectus. Magna consectetuer ligula vulputate sem tristique cursus magna.'},
    {'image':'images/Banner.png', 'title': 'Gravida veroeros', 'content':'Donec consectetuer ligula vulputate sem tristique cursus. Lorem nulla sed gravida non. Phasellus et ultricesnulla quis nibh. Quisque amet lorem lectus. Magna consectetuer ligula vulputate sem tristique cursus magna.'},
    {'image':'images/banner.png', 'title': 'Gravida veroeros', 'content':'Donec consectetuer ligula vulputate sem tristique cursus. Lorem nulla sed gravida non. Phasellus et ultricesnulla quis nibh. Quisque amet lorem lectus. Magna consectetuer ligula vulputate sem tristique cursus magna.'},
    {'image':'images/banner.png', 'title': 'Gravida veroeros', 'content':'Donec consectetuer ligula vulputate sem tristique cursus. Lorem nulla sed gravida non. Phasellus et ultricesnulla quis nibh. Quisque amet lorem lectus. Magna consectetuer ligula vulputate sem tristique cursus magna.'}]

    var i = 0;

$(document).ready(function() {
	var win = $(window);

    $('.category').bind("click", function(event){
        $('.category').each(function(i, obj){
         var h4 = $(this).children();
        $(h4).css('color', '#000000');

        });
        var thish4 = $(this).children();
        $(thish4).css('color', '#5dc9dd');

        //show filter articles
        $('#searchWord').text('相關 "'+$(thish4).text()+'" 文章有：');
        $('html,body').animate({        //move to article session when enter is pressed
            scrollTop:$('#three').offset().top}, 'slow');

    });

    $('#text-area').onwebkitspeechchange = function(e){ //doesnt work
        console.log($(this).value);
    }

	$('#text-area').keyup(function(e){
			$('#searchWord').text('相關 "'+$(this).val()+'" 文章有：');
	});

    $('#searchForm').submit(function(e){        //prevent page refreshing when enter is pressed
        e.preventDefault();
        $('.category').each(function(i, obj){
         var h4 = $(this).children();
        $(h4).css('color', '#000000');

        });
        //show filter articles
        $('html,body').animate({        //move to article session when enter is pressed
            scrollTop:$('#three').offset().top}, 'slow');
        });

	// Each time the user scrolls
	win.scroll(function() {

		// End of the document reached?
		if ($(document).height() - win.height() == win.scrollTop()) {
			$('#loading').show();
			// $.ajax({
			// 	url: 'get-post.php',
			// 	dataType: 'html',
			// 	success: function(html) {
			// 		$('#posts').append(html);
			// 		$('#loading').hide();
			// 	}
			// });
            if((content.length - i) / 3 > 1){
                $('#main1').append(randomPost(content[i]));
                $('#main2').append(randomPost(content[i+1]));
                $('#main3').append(randomPost(content[i+2]));
                $('#loading').hide();
                i+=3;
            }else if((content.length - i) / 3 == 1){
                $('#main1').append(randomPost(content[i]));
                $('#main2').append(randomPost(content[i+1]));
                $('#main3').append(randomPost(content[i+2]));
                $('#loading').hide();
                $('body').append(footer());
                i+=3;
            }else if ((content.length - i) / 3 < 1 && (content.length - i) % 3 == 1){
                $('#main1').append(randomPost(content[i]));
                $('#loading').hide();
                $('body').append(footer());
                i+=3;
            }else if((content.length - i) / 3 < 1 && (content.length - i) % 3 == 2){
                $('#main1').append(randomPost(content[i]));
                $('#main2').append(randomPost(content[i+1]));
                $('#loading').hide();
                $('body').append(footer());
                i+=3;
            }else{
                $('#loading').hide();
    		}
        }

	});

});

//==============speech to text search=====================
// $.getScript("artyom.window.js",function(){  // Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.
//     var settings = {
//     continuous:true, // Don't stop never because i have https connection
//     onResult:function(text){
//         // text = the recognized text
//         console.log(text);
//     },
//     onStart:function(){
//         console.log("Dictation started by the user");
//     },
//     onEnd:function(){
//         alert("Dictation stopped by the user");
//     }
// };

// var UserDictation = artyom.newDictation(settings);

// function startRecognition(){
//   UserDictation.start();
//   setTimeout(
//   function() 
//   {
//     UserDictation.stop();
//   }, 5000);
// }
// });




//===================infinite loop post==================
function randomPost(json){
    // Generate the post
    var post = '';
    post += '<li>';
    post += '<article id="content">';
    post += '<a href="#" class="image"><img src="';
    post += json.image;
    post += '" alt="" />';
    post += '</a>';
    post += '<div class="content">';
    post += '<h3>';
    post += json.title;
    post += '</h3>';
    post += json.content;
    post += '<ul class="actions"><li><a href="#" class="button">閱讀</a></li></ul></div>';
    post += '</article>';
    post += '</li>';

    return post;

}

//===================add footer==========================
function footer(){
    var footer = '<!-- Footer -->            <footer id="footer">                <div class="inner">                    <div class="split style1">                        <div class="contact">                            <h2>聯繫我們</h2>                            <ul class="contact-icons">                                <li class="icon fa-home">217B, 5W Enterprise Place<br>Science Park, NT, HK</li>                                <li class="icon fa-phone">(852)3598-3639</li>                                <li class="icon fa-envelope-o"><a href="#">info@clinicbot.io</a></li>                            </ul>                        </div>                        <div class="contact">                            <h3>熱門專科醫生</h3>                            <div class="">                                <ul style="display: inline-block;">                                    <li>皮膚科</li>                                    <li>眼科</li>                                    <li>中醫</li>                                    <li>性病</li>                                    <li>婦產科</li>                                    <li>耳鼻喉科</li>                                </ul>                                <ul style="display: inline-block; position: absolute;">                                    <li>整形外科</li>                                    <li>骨科</li>                                    <li>牙科</li>                                </ul>                            </div>                        </div>                        <div class="contact">                            <h3>醫生集中大廈</h3>                            <div>                                <ul>                                    <li>旺角中心一期</li>                                    <li>亞太中心</li>                                    <li>萬邦行</li>                                    <li>南豐中心</li>                                    <li>海洋中心</li>                                    <li>新世界大廈</li>                                    <li>中建大廈</li>                                </ul>                            </div>                        </div>                        <div class="contact">                            <h3>熱門私家醫院</h3>                            <div>                                <ul>                                    <li><a href="http://www.stpaul.org.hk/internet/">聖保祿醫院</a></li>                                    <li><a href="http://www.hksh.org.hk/zh-hk/about-us.php">養和醫院</a></li>                                    <li><a href="http://www.union.org/new/cindex.php">仁安醫院</a></li>                                    <li><a href="http://www.hkbh.org.hk/chi/home.php">浸會醫院</a></li>                                    <li><a href="https://www.twah.org.hk/tc/main">港安醫院</a></li>                                    <li><a href="http://www.sth.org.hk/index.asp?lang_code=zh">聖德肋撒醫院</a></li>                                    <li>=<a href"http://www.evangel.org.hk/">播道醫院</a></li>                                    <li><a href="http://www.canossahospital.org.hk/">嘉諾撒醫院</a></li>                                </ul>                            </div>                        </div>                        <div class="contact">                            <h3>Dr. Care</h3>                            <div>                                <ul>                                    <!-- <li><a href="index.php">Home</a></li> -->                                    <li><a href="http://m.me/2076696632356020">隨行醫生</a></li>                                    <li><a href="http://test.drcare.ai/Doctor/findoc.php">醫生</a></li>                                    <li><a href="knowledge.php"> 健康資訊</a></li>                                    <li><a href="searchHealthArticle.php">文章報導</a></li>                                    <li><a href="disclaimer.php">免責聲明</li>                                </ul>                            </div>                        </div>                    </div>                    <div class="copyright">                        <p>&copy; Asiabots. All rights reserved.</p>                        <p>免責聲明︰Dr care 盡力驗證所有提交的資料和網頁內容正確無誤。 但本公司不會負責當中的任何錯誤和錯誤而引起的責任。 如有任何資料改變，有關的醫生將負責更新個人的資料或告本公司報告。 醫生的費用、所有文章等內容僅供參考，病人應與醫生或診所的有關醫療人員確認為實。</p>                    </div>                </div>            </footer>';

            return footer;
}