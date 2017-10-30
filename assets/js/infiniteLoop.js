// var article = {'ID':'', 'CreateDateTime':'', 'Category':'','SubCategory':'', 'Title':'', 'Content':'', 'ImageUrl':'', 'RelatedDoctorCat':''};
    var articles = [];
    var filterClicked = false;
    var cat = '';
    var subcat = '';

$(document).ready(function() {

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
    ArticleID: '',
    SubCategory:'',
    KeyPhase: ''
});

}else{

    loadAllContent({
        ArticleID:'',
        SubCategory: subcat,
        KeyPhase:''
    });

}

var win = $(window);
var scrollIndex = 0;
        // Each time the user scrolls
        win.scroll(function() {
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            // End of the document reached?
            if ($(document).height() - win.height() - 500 < win.scrollTop()) {
                if(!filterClicked){
                    $('#loading').show();
                   
                    if(scrollIndex < articles.length){
                        $('#main1').append(randomPost(articles[scrollIndex]));
                        $('#loading').hide();
                        scrollIndex++;
                    }else if (scrollIndex == articles.length){
                        $('#loading').hide();
                        $('body').append(footer());
                        scrollIndex++;
                    }else{
                        $('#loading').hide();
                    }
                }
        }
        }else{
             // End of the document reached?
        if ($(document).height() - win.height() == win.scrollTop()) {
            if(!filterClicked){
                $('#loading').show();

                appendArticles(articles,scrollIndex);
                scrollIndex += 3;
            }
        }
    }

        });

});



function loadAllContent(conf){
    $.getJSON("php/loadArticleContent.php",
        {ArticleID : conf.ArticleID,
            SubCategory:conf.SubCategory,
            KeyPhase: conf.KeyPhase},
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
            var i = 0;
            while(i < articles.length){
                appendArticles(articles, i);
                i+=3; 
            }
            

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
        $('#text-area').val("");
    loadSubcatArticle({
        ArticleID:'',
        SubCategory:subcat,
        KeyPhase: ''
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
       filterClicked = true;
            loadSubcatArticle({
                ArticleID:'',
                SubCategory: '',
                KeyPhase: $('#text-area').val()
            });
        
        });

}); 


}

function loadSubcatArticle(conf){
    $.getJSON("php/loadArticleContent.php",
        {ArticleID: conf.ArticleID,
            SubCategory: conf.SubCategory,
            KeyPhase: conf.KeyPhase},
        function (json){

             $('article').remove();
             $('#footer').remove();
                articles = [];
                for(var i = 0; i < json.length; i ++){
                    articles[i] = json[i];
                }
                var i = 0;
                while(i < articles.length){
                    appendArticles(articles, i);
                    i += 3;
                }
                

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
function appendArticles(list, y){
    
     if((list.length - y) / 3 > 1){
                    $('#main1').append(randomPost(list[y]));
                    $('#main2').append(randomPost(list[y+1]));
                    $('#main3').append(randomPost(list[y+2]));
                    $('#loading').hide();
                    // y+=3;
                }else if((list.length - y) / 3 == 1){
                    $('#main1').append(randomPost(list[y]));
                    $('#main2').append(randomPost(list[y+1]));
                    $('#main3').append(randomPost(list[y+2]));
                    $('#loading').hide();
                    $('body').append(footer());
                    // y+=3;
                }else if ((list.length - y) / 3 < 1 && (list.length - y) % 3 == 1){
                    $('#main1').append(randomPost(list[y]));
                    $('#loading').hide();
                    $('body').append(footer());
                    // y+=3;
                }else if((list.length - y) / 3 < 1 && (list.length - y) % 3 == 2){
                    $('#main1').append(randomPost(list[y]));
                    $('#main2').append(randomPost(list[y+1]));
                    $('#loading').hide();
                    $('body').append(footer());
                    // y+=3;
                }else{
                    $('#loading').hide();
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

