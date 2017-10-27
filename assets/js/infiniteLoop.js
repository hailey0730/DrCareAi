// var article = {'ID':'', 'CreateDateTime':'', 'Category':'','SubCategory':'', 'Title':'', 'Content':'', 'ImageUrl':'', 'RelatedDoctorCat':''};
    var articles = [];

    var filter = [];

    var filterClicked = false;

    var cat = '';
    var subcat = '';

$(document).ready(function() {
	var win = $(window);

//E.g.  http://www.drcare.ai/searchHealthArticle.php?Category=疾病專題&SubCategory=疾病病理
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

cat = getUrlParameter('Category');
subcat = getUrlParameter('SubCategory');

if(subcat == null){

loadAllContent({
    SubCategory:''
});

}else{

    loadAllContent({
        SubCategory: subcat
    });

}
var i = 0;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // Each time the user scrolls
        win.scroll(function() {

            // End of the document reached?
            if ($(document).height() - win.height() - 500 < win.scrollTop()) {
                if(!filterClicked){
                    $('#loading').show();
                   
                    if(i < articles.length){
                        $('#main1').append(randomPost(articles[i]));
                        $('#loading').hide();
                        i++;
                    }else if (i == articles.length){
                        $('#loading').hide();
                        $('body').append(footer());
                        i++;
                    }else{
                        $('#loading').hide();
                    }
                }
        }

        });
    }else{

        // Each time the user scrolls
    win.scroll(function() {

        // End of the document reached?
        if ($(document).height() - win.height() == win.scrollTop()) {
            if(!filterClicked){
                $('#loading').show();
              
                if((articles.length - i) / 3 > 1){
                    $('#main1').append(randomPost(articles[i]));
                    $('#main2').append(randomPost(articles[i+1]));
                    $('#main3').append(randomPost(articles[i+2]));
                    $('#loading').hide();
                    i+=3;
                }else if((articles.length - i) / 3 == 1){
                    $('#main1').append(randomPost(articles[i]));
                    $('#main2').append(randomPost(articles[i+1]));
                    $('#main3').append(randomPost(articles[i+2]));
                    $('#loading').hide();
                    $('body').append(footer());
                    i+=3;
                }else if ((articles.length - i) / 3 < 1 && (articles.length - i) % 3 == 1){
                    $('#main1').append(randomPost(articles[i]));
                    $('#loading').hide();
                    $('body').append(footer());
                    i+=3;
                }else if((articles.length - i) / 3 < 1 && (articles.length - i) % 3 == 2){
                    $('#main1').append(randomPost(articles[i]));
                    $('#main2').append(randomPost(articles[i+1]));
                    $('#loading').hide();
                    $('body').append(footer());
                    i+=3;
                }else{
                    $('#loading').hide();
                }
            }
        }

        });

    }

	

});

function loadAllContent(conf){
    $.getJSON("php/loadArticleContent.php",
        {SubCategory:conf.SubCategory},
        function(json){
             for(var i = 0; i < json.length; i ++){
            articles[i] = json[i];
        }

        if(conf.SubCategory != ''){
            // switch to the right panel with filter selected
var x = 0;
        $('.title').each(function(i,obj){
            $(this).removeClass('active');
            if($(this).text() == cat){
                $(this).addClass('active');
                x = i;
            }
        });

        $('.panel').each(function(i,obj){
            $(this).removeClass('active');
            $(this).css('display','none');
            if(i == x){
                $(this).addClass('active');
                $(this).css('display','');
            }
        });
    
        $('.category').each(function(i, obj){
         var h4 = $(this).children();
        $(h4[0]).css('color', '#000000');
        if($(h4[0]).text() == subcat){
            $(h4[0]).css('color', '#5dc9dd');
            filterClicked = true;
            appendArticles(articles);

            //show filter articles
            $('#searchWord').text('相關 "'+$(h4[0]).text()+'" 文章有：');
             $('html,body').animate({        //move to article session when enter is pressed
                    scrollTop:$('#three').offset().top}, 'slow');
        }

        });
        }

//===============================================

    $('.category').bind("click", function(event){
        $('.category').each(function(i, obj){
         var h4 = $(this).children();
        $(h4[0]).css('color', '#000000');

        });
        var thish4 = $(this).children();
        $(thish4[0]).css('color', '#5dc9dd');
        subcat = $(thish4[0]).text();
        filterClicked = true;
        //show filter articles
        $('#searchWord').text('相關 "'+$(thish4[0]).text()+'" 文章有：');

    loadSubcatArticle({
        SubCategory:subcat,
        keyword: ''
    });

    });


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
        var input = $(this).children();
        // console.log($(input[0]).val());     //input value
           // pass search key words to get filter list
            // $.ajax({
            //     method:"GET",
            //     url:"",
            //     data: { searchKeyWord  :  $('#text-area').val()}   //filter by search key word
            // }).done(function(data){
            //     var json = JSON.parse(data);
            //     filter = [];
            //     for(var i = 0; i < json.length; i ++){
            //         filter[i] = json[i];
            //     }

            //     filterClicked = true;
            //     $('article').remove();
            //     appendArticles(filter);
            //     $('html,body').animate({        //move to article session when enter is pressed
            //         scrollTop:$('#three').offset().top}, 'slow');
            // });
            loadSubcatArticle({
                SubCategory: '',
                keyword: $('#text-area').val()
            });
        
        });

}); 


}

function loadSubcatArticle(conf){
    $.getJSON("php/loadArticleContent.php",
        {SubCategory: conf.SubCategory,
            KeyPhase: conf.keyword},
        function (json){

             $('article').remove();
             $('#footer').remove();
                articles = [];
                for(var i = 0; i < json.length; i ++){
                    articles[i] = json[i];
                }

                appendArticles(articles);

        $('html,body').animate({        //move to article session when enter is pressed
            scrollTop:$('#three').offset().top}, 'slow');
        });
}

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


//===================append articles=====================
function appendArticles(list){
     var y = 0
while(y < list.length){
     if((list.length - y) / 3 > 1){
                    $('#main1').append(randomPost(list[y]));
                    $('#main2').append(randomPost(list[y+1]));
                    $('#main3').append(randomPost(list[y+2]));
                    $('#loading').hide();
                    y+=3;
                }else if((list.length - y) / 3 == 1){
                    $('#main1').append(randomPost(list[y]));
                    $('#main2').append(randomPost(list[y+1]));
                    $('#main3').append(randomPost(list[y+2]));
                    $('#loading').hide();
                    $('body').append(footer());
                    y+=3;
                }else if ((list.length - y) / 3 < 1 && (list.length - y) % 3 == 1){
                    $('#main1').append(randomPost(list[y]));
                    $('#loading').hide();
                    $('body').append(footer());
                    y+=3;
                }else if((list.length - y) / 3 < 1 && (list.length - y) % 3 == 2){
                    $('#main1').append(randomPost(list[y]));
                    $('#main2').append(randomPost(list[y+1]));
                    $('#loading').hide();
                    $('body').append(footer());
                    y+=3;
                }else{
                    $('#loading').hide();
                }
            }
}

//===================infinite loop post==================
function randomPost(json){
    // console.log(json);
    var imgurl= 'images/健康認文章圖片-20171012T090814Z-001/健康認文章圖片/';
    imgurl += json.ImageUrl;
    // Generate the post
    var post = '';
    post += '<li>';
    post += '<article id="content">';
    post += '<a class="image"><img src="';
    post += imgurl;
    post += '" alt="" />';
    post += '</a>';
    post += '<div class="content">';
    post += '<h3>';
    post += json.Title;
    post += '</h3><p>';
    post += json.Content.substring(0,50);
    post += '...';
    post += '</p><ul class="actions"><li><a onclick=passArticle("';
    post += json.ID;
    post += '") class="button">閱讀</a></li></ul></div>';
    post += '</article>';
    post += '</li>';

    return post;

}

//===================onclick function===================
function passArticle(article){
     window.sessionStorage.setItem('articleContent', article);
     window.location.replace("content.php");
}

//===================add footer==========================
// <li><a href="knowledge.php"> 健康資訊</a></li>
// function footer(){
//     var footer = '<footer id="footer">              <div class="inner">                 <div class="split style1">                      <div class="contact">                           <h2>聯繫我們</h2>                           <ul class="contact-icons">                              <li class="icon fa-home">217B, 5W Enterprise Place<br>Science Park, NT, HK</li>                             <li class="icon fa-phone">(852)3598-3639</li>                               <li class="icon fa-envelope-o"><a onclick="sendEmail();return false;" style="cursor:pointer;">info@aisabots.com</a></li>                            </ul>                       </div>                      <div class="contact">                           <h3>熱門專科醫生</h3>                         <div class="">                              <ul style="display: inline-block;">                                 <li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=皮膚及性病科">皮膚科</a></li>                                                           <li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=眼科">眼科</a></li>                                                                    <li><a href="http://www.drcare.ai/Doctor/findoc.php?category=中醫">中醫</a></li>                                                                                   <li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=皮膚及性病科">性病</a></li>                                                            <li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=婦產科">婦產科</a></li>                                                              <li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=耳鼻喉科">耳鼻喉科</a></li>                                </ul>                               <ul style="display: inline-block; position: absolute;">                                                     <li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=整形外科">整形外科</a></li>                                                            <li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=骨科">骨科</a></li>                                                                    <li><a href="http://www.drcare.ai/Doctor/findoc.php?category=牙科">牙科</a></li>                               </ul>                           </div>                      </div>                      <div class="contact">                           <h3>醫生集中大廈</h3>                         <div>                               <ul>                                    <li>旺角中心一期</li>                                 <li>亞太中心</li>                                                                                       <li>萬邦行</li>                                    <li>南豐中心</li>                                                                                               <li>海洋中心</li>                                   <li>新世界大廈</li>                                                                                          <li>中建大廈</li>                               </ul>                           </div>                      </div>                      <div class="contact">                           <h3>熱門私家醫院</h3>                         <div>                               <ul>                                    <li><a href="http://www.stpaul.org.hk/internet/">聖保祿醫院</a></li>                                                                                             <li><a href="http://www.hksh.org.hk/zh-hk/about-us.php">養和醫院</a></li>                                                                                       <li><a href="http://www.union.org/new/cindex.php">仁安醫院</a></li>                                                                                             <li><a href="http://www.hkbh.org.hk/chi/home.php">浸會醫院</a></li>                                                                                             <li><a href="https://www.twah.org.hk/tc/main">港安醫院</a></li>                                                                                                 <li><a href="http://www.sth.org.hk/index.asp?lang_code=zh">聖德肋撒醫院</a></li>                                                                                  <li><a href="http://www.evangel.org.hk/">播道醫院</a></li>                                                                                                      <li><a href="http://www.canossahospital.org.hk/">嘉諾撒醫院</a></li>                             </ul>                           </div>                      </div>                      <div class="contact">                           <h3>Dr. Care</h3>                           <div>                               <ul>                                    <!-- <li><a href="index.php">Home</a></li> -->                                                  <li><a href="http://m.me/2076696632356020">隨行醫生</a></li>                                    <li><a href="http://www.drcare.ai/Doctor/findoc.php">醫生</a></li>                                                 <li><a href="searchHealthArticle.php">健康誌</a></li>                                 <li><a href="disclaimer.php">免責聲明</li>                              </ul>                           </div>                      </div>                  </div>                  <div class="copyright">                     <p>&copy; Asiabots. All rights reserved.</p>                        <p>免責聲明︰Dr care 會盡力驗證所有提交的資料和網頁內容正確無誤。 但本公司不會負責當中的任何錯誤和錯誤而引起的責任。 如有任何資料改變，有關的醫生將負責更新個人的資料或告本公司報告。 醫生的費用、所有文章等內容僅供參考，病人應與醫生或診所的有關醫療人員確認為實。</p>                   </div>              </div>          </footer>';

//             return footer;
// }