
    var articles = [];
    var scrollIndex = 0;
$(document).ready(function() {
    $('#searchWord').hide();
    $('#text-area').keyup(function(e){
        $('#searchWord').text('相關 "'+$(this).val()+'" 文章有：');

    });

    $('#searchForm').submit(function(e){        //prevent page refreshing when enter is pressed
        e.preventDefault();
        $('.articles').empty();
        $('#footer').remove();
       $('#searchWord').text('相關 "'+$('#text-area').val()+'" 文章有：');
       scrollIndex = 0;
        //show filter articles
           // pass search key words to get filter list
            loadArticles({
                keyword: $('#text-area').val()
            });
        

         var win = $(window);

         win.scroll(function() {

        // End of the document reached?
        if ($(document).height() - win.height() - 500 < win.scrollTop()) {
            if(scrollIndex < articles.length){
                var html = articlesHTML(articles[scrollIndex]);
                $(".articles").append(html);
                scrollIndex ++;
            }else if(scrollIndex == articles.length){
                $('body').append(footer());
                scrollIndex++;
            }
        }

        });
         
        });


});

function loadArticles(conf){
    
    $.getJSON("Doctor/php/getArticle.php",
        {KeyPhase: conf.keyword},
        function(json){
            articles = [];
            for(var j = 0; j < json.length; j ++){
                articles[j] = json[j];
            }
            
            $('#searchWord').show();
            $(".articles").css("display", "inline");
            var html = articlesHTML(articles[scrollIndex]);
            scrollIndex ++;
            $(".articles").append(html);
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
                '<a href="#" class="author doctor"><span class="name">' + author + '醫生</span><img src="' + authorPic + '" alt="" /></a>' +
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
// function passArticle(article){
//      window.sessionStorage.setItem('articleContent', article);
//      window.location.replace("content.php");
// }
