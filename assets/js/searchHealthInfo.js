// var article = {'ID':'', 'CreateDateTime':'', 'Category':'','SubCategory':'', 'Title':'', 'Content':'', 'ImageUrl':'', 'RelatedDoctorCat':''};
    var articles = [];

$(document).ready(function() {
    $('#text-area').keyup(function(e){
        $('#searchWord').text('相關 "'+$(this).val()+'" 文章有：');

    });

    $('#searchForm').submit(function(e){        //prevent page refreshing when enter is pressed
        e.preventDefault();
        $('.articles').empty();
       $('#searchWord').text('相關 "'+$('#text-area').val()+'" 文章有：');
        //show filter articles
       
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
            loadArticles({
                keyword: $('#text-area').val()
            });
        
        });
});

function loadArticles(conf){
    
    var i = 0;
    $.getJSON("Doctor/php/getArticle.php",
        // {keyword: conf.keyword},
        {'target': conf.keyword},
        function(json){
            articles = [];
            for(i in json){
                articles[i] = json[i];
            }
            $(".articles").css("display", "inline");
            var html = articlesHTML(articles[0]);
            $(".articles").append(html);
            // $('#loading').hide();
            i = 1;
            $(window).scroll(function() {

        // End of the document reached?
        if ($(document).height() - $(window).height() == $(window).scrollTop()) {
            if(i < articles.length){
                var html = articlesHTML(articles[i]);
                $(".articles").append(html);
                // $('#loading').hide();
                i ++;
            }else if(i == articles.length){
                $('body').append(footer());
                i++;
            }
        }

        });
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

//===================infinite loop post==================
function articlesHTML(articles){
   var returnHTML = "",
        title = "",
        tag = "",
        time = "",
        author = "",
        authorPic = "",
        media = "",
        mediaPic = "",
        imgURL = "",
        content = "",
        articleURL = "",
        like = "";

    // title
    title = articles["Subject"];
    //tag
    var tags = [];
    if(articles["Tags"]!= null){
        tags = articles["Tags"].split(", ");
    }

    for(i in tags) {
        if(tag == "") {
            tag = '<img src="Doctor/img/tag.png">';
            tag += '<span>' + tags[i] + '</span>';
        }
        else {
            tag += '|<span>' + tags[i] + '</span>';
        }
    }
    //time
    time = articles["CreateDateTime"];
    //author 
    author = articles["Doctor"];
    //author photo
    authorPic = articles["DoctorPhotoUrl"];
    //media
    media = articles["Media"];
    //mediaPic
    mediaPic = articles["MediaLogoUrl"];
    //imgURL
    imgURL = articles["ImageUrl"];
    //content
    content = articles["Desc"];
    //articleURL
    articleURL = articles["Url"];
    //like
    like = articles["Like"];

    returnHTML = "" +
    '<article class="post">' +
        '<header>' +
            '<div class="title">' +
                '<h2><a>' + title + '</a></h2>' +
                '<p>' + tag + '</p>' +
            '</div>' +
            '<div class="meta">' +
                '<time class="published" datetime="' + time + '">' + time + '</time>' +
                '<a href="#" class="author doctor"><span class="name">' + author + '</span><img src="' + authorPic + '" alt="" /></a>' +
                '<a href="#" class="author"><span class="name">' + media + '</span><img src="' + mediaPic + '" alt="" /></a>' +
            '</div>' +
        '</header>' +
        '<div class="Content">' +
            '<div class="image featured"><img src="' + imgURL + '"/></div>' +
            '<p>' + content + '</p>' +
            '<a target="_blank" href="' + articleURL + '">原文： ' + articleURL + '</a>' +
            '<footer>' +
                '<ul class="actions">' +
                    '<li><a target="_blank" href="' + articleURL + '" class="button big">繼續閱讀</a></li>' +
                '</ul>' +
                '<ul class="stats">' +
                    // '<li><a href="#" class="icon fa-heart">加到最愛</a></li>' +
                    '<li><a href="#" class="icon fa-thumbs-o-up">' + like + '</a></li>' +
                '</ul>' +
            '</footer>' +
        '</div>' +
    '</article>';

    return returnHTML;

}

//===================onclick function===================
function passArticle(article){
     window.sessionStorage.setItem('articleContent', article);
     window.location.replace("content.php");
}

//===================add footer==========================
function footer(){
    var footer = '<footer id="footer">              <div class="inner">                 <div class="split style1">                      <div class="contact">                           <h2>聯繫我們</h2>                           <ul class="contact-icons">                              <li class="icon fa-home">217B, 5W Enterprise Place<br>Science Park, NT, HK</li>                             <li class="icon fa-phone">(852)3598-3639</li>                               <li class="icon fa-envelope-o"><a href="http://www.drcare.ai/index.php#five">info@clinicbot.io</a></li>                            </ul>                       </div>                      <div class="contact">                           <h3>熱門專科醫生</h3>                         <div class="">                              <ul style="display: inline-block;">                                 <li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=皮膚及性病科">皮膚科</a></li>                                                           <li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=眼科">眼科</a></li>                                                                    <li><a href="http://www.drcare.ai/Doctor/findoc.php?category=中醫">中醫</a></li>                                                                                   <li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=皮膚及性病科">性病</a></li>                                                            <li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=婦產科">婦產科</a></li>                                                              <li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=耳鼻喉科">耳鼻喉科</a></li>                                </ul>                               <ul style="display: inline-block; position: absolute;">                                                     <li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=整形外科">整形外科</a></li>                                                            <li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=骨科">骨科</a></li>                                                                    <li><a href="http://www.drcare.ai/Doctor/findoc.php?category=牙科">牙科</a></li>                               </ul>                           </div>                      </div>                      <div class="contact">                           <h3>醫生集中大廈</h3>                         <div>                               <ul>                                    <li>旺角中心一期</li>                                 <li>亞太中心</li>                                                                                       <li>萬邦行</li>                                    <li>南豐中心</li>                                                                                               <li>海洋中心</li>                                   <li>新世界大廈</li>                                                                                          <li>中建大廈</li>                               </ul>                           </div>                      </div>                      <div class="contact">                           <h3>熱門私家醫院</h3>                         <div>                               <ul>                                    <li><a href="http://www.stpaul.org.hk/internet/">聖保祿醫院</a></li>                                                                                             <li><a href="http://www.hksh.org.hk/zh-hk/about-us.php">養和醫院</a></li>                                                                                       <li><a href="http://www.union.org/new/cindex.php">仁安醫院</a></li>                                                                                             <li><a href="http://www.hkbh.org.hk/chi/home.php">浸會醫院</a></li>                                                                                             <li><a href="https://www.twah.org.hk/tc/main">港安醫院</a></li>                                                                                                 <li><a href="http://www.sth.org.hk/index.asp?lang_code=zh">聖德肋撒醫院</a></li>                                                                                  <li><a href="http://www.evangel.org.hk/">播道醫院</a></li>                                                                                                      <li><a href="http://www.canossahospital.org.hk/">嘉諾撒醫院</a></li>                             </ul>                           </div>                      </div>                      <div class="contact">                           <h3>Dr. Care</h3>                           <div>                               <ul>                                    <!-- <li><a href="index.php">Home</a></li> -->                                                  <li><a href="http://m.me/2076696632356020">隨行醫生</a></li>                                    <li><a href="http://www.drcare.ai/Doctor/findoc.php">醫生</a></li>                                               <li><a href="searchHealthArticle.php">健康誌</a></li>                                 <li><a href="disclaimer.php">免責聲明</li>                              </ul>                           </div>                      </div>                  </div>                  <div class="copyright">                     <p>&copy; Asiabots. All rights reserved.</p>                        <p>免責聲明︰Dr care 會盡力驗證所有提交的資料和網頁內容正確無誤。 但本公司不會負責當中的任何錯誤和錯誤而引起的責任。 如有任何資料改變，有關的醫生將負責更新個人的資料或告本公司報告。 醫生的費用、所有文章等內容僅供參考，病人應與醫生或診所的有關醫療人員確認為實。</p>                   </div>              </div>          </footer>';

            return footer;
}