var resizeTime = 100;     // total duration of the resize effect, 0 is instant
var resizeDelay = 100;  
  var moreCounter = 3;
  var nextPage = 2;
  var liked = false;
  var faved = false;
  var likeNum = 30;
  var favNum = 25;
  var listOfDoc = [];
  var docNum = 0;
  var doctorType = '';
$(document).ready(function(){
	
  //E.g.  http://www.drcare.ai/sickness.php?name=厭食症
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

var name = getUrlParameter('name');
if(name == null){
  //content value determine content to show in page
   name = sessionStorage.getItem('sickness');
}
  
  if(window.matchMedia("(max-width:720px)").matches){
    $('#wrapper').css("margin-right", 5+'em');
  }else{
    $('#wrapper').css("margin-right", $('body').width() * 1/3 + 'px');  
  }
  
  //set content of this page
  $.ajax({
  method: "GET",
  url: "DrCare.Disease.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513",
  data: { Name:  name}
})
  .done(function( msg ) {
    var json = JSON.parse(msg);

    $('#title').text(name);
    $('#whatTitle').text('甚麼是'+name+'? (What)');
    $('#whyTitle').text('為甚麼會'+name+'? (Why)');
    $('#howTitle').text(name+'治療⽅方法? (How)');
    if(json[0].Desc != ""){
      $('#desc').text(json[0].Desc);
    }else{
      var children = $('#wrapper').children();
      $(children[0]).css("margin-bottom", "0px");
    }
    $('#what').text(json[0].What);
    $('#why').text(json[0].Why);
    $('#how').text(json[0].How);
    if(json[0].ImageUrl != null){
      // $('#contentBanner').attr("src", json[0].ImageUrl);
      var imgurl = 'url(';
      imgurl += json[0].ImageUrl;
      imgurl += ')';
      $('#banner').css('background-image', imgurl);
      $('#banner').css('background-size', 'cover');
      $('#banner').css('background-position', 'center');

    }
    doctorType = json[0].RelatedDoctor;
//show relatedDoctor
    var docCat = '(';
        docCat += doctorType;
        docCat += '醫生）'
        $('#blue').text(docCat);

   loadDocFromDB({
    curPage: 1,
    type: doctorType,   //SubCategory
    specialist: ''      //Category
  });

  });

    $(".more").click(function(){

        loadDocFromDB({
          curPage: nextPage,
          type: doctorType,   //SubCategory
          specialist: ''      //Category
        });
       nextPage++;
    });

  $(".fa-thumbs-o-up").text(likeNum);
  $('.fa-heart').text(favNum);

});

 $(window).bind('resize',onWindowResize);

 // load doc from DB
function loadDocFromDB(conf) {
  var docsNumPerPage = 3;
 
  if(conf.name == undefined) {
    conf.name = "";
  }
  // conf.curPage;
  // conf.specialist;
  // conf.area;
  // conf.type;
  // conf.keyword;
  $.getJSON("php/loadDoc.php",
    {curPage: conf.curPage,
    perPage: docsNumPerPage,
    Category: conf.specialist,
    SubCategory: conf.type},
    function(json){
     // console.log(json);

     docNum = json.pop();
        for(var i = 0; i < json[0].length; i ++){
          listOfDoc[i] = json[0][i];   //{ID, Name, FullName, Sex, PhotoUrl, Category, SubCategory, Region, Address_ch, Address_en, Phone, Email, Language, Certification, Latitude_X, Longitude_Y, Map, Service, Remarks, Opentime, CreateDateTime:{date, timezone_type, timezone}, Ref_url, Clinicbot, NumOfArticle, RowNum}
        }
        $('.nameTag').each(function(i,obj){
          $($(this).children()[0]).text(listOfDoc[i].Name);   //doctor name
          $($(this).children()[2]).text(conf.type);   //doctor type
        });

        $('.address').each(function(i,obj){
          $($(this).children()[0]).text(listOfDoc[i].Region);   //address area
          $($(this).children()[1]).text(listOfDoc[i].Address_ch);    //address
        });


        $('.contentSickness').each(function(i,obj){
          var docLink = 'Doctor/docPage.php?Name=';
          docLink += listOfDoc[i].Name;
          docLink += '&ID=';
          docLink += listOfDoc[i].ID;
          var a = $(this).children()[1];
          $(a).attr('href', docLink);    //set link to doctor
        });
      
  }).fail(function(d, textStatus, error){
    console.error("getJSON failed, status: " + textStatus + ", error: "+error)
  });

}
// end

//===========to load more doctors=========================================
 function moreDoc(list){
  var doc = '';
   //testing
        var name = "錢德光";
        var category = "兒科";
        var location = "沙田";
        var address = "香港香港";
for(var i = 0; i < 6; i ++){
   moreCounter ++;
        doc += '<div class="contentSickness"><div class="bulletsDiv"><p>';
        doc += moreCounter;
        doc +='</p></div><a href=""><div id="nameTag" class="nameTag"><h3>';
        doc += name;    //list[moreCounter-1].name
        doc += '</h3><span>醫生</span><p>';
        doc += category;  //list[moreCounter-1].category
        doc += '</p></div><div id="address1" class="address"><h3>';
        doc +- location;  //list[moreCounter].location
        doc += '</h3><p>';
        doc += address;   //list[moreCounter-1].address
        doc += '</p></div></a></div>';
      }

        return doc;
}

 function addFavourite(){
      //add to favourite and send info back
      if(faved == false){
        favNum++;
    $('.fa-heart').text(favNum);
    faved = true;
      //send info back 
    
      }else{
        favNum--;
    $('.fa-heart').text(favNum);
    faved = false;
      //send info back 
      }
      
 }

 function like(){
  if(liked == false){
      likeNum++;
      $(".fa-thumbs-o-up").text(likeNum);
      liked = true;
      //send info back 
      }else{
        likeNum--;
      $(".fa-thumbs-o-up").text(likeNum);
      liked = false;
      //send info back 
      }
 }

 function resize(newWidth,newHeight) {
  if(newWidth > 720){

    $('#wrapper').css("margin-right", newWidth * 1/3 + 'px');
  }else{
    $('#wrapper').css("margin-right", 5+'em');

  }

}

// Track window resizing events, but only actually call the map resize when the
// window isn't being resized any more

function onWindowResize() {
var curWidth = $(window).width(),
curHeight = $(window).height(),
checking=false;
if (checking) {
  return;
}
checking = true;
window.setTimeout(function() {
  var newWidth = $(window).width(),
  newHeight = $(window).height();
  if (newWidth === curWidth &&
    newHeight === curHeight) {
    resize(newWidth,newHeight);

}
checking=false;
},resizeDelay );
}

