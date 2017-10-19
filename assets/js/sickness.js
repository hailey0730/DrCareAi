var resizeTime = 100;     // total duration of the resize effect, 0 is instant
var resizeDelay = 100;  
  var moreCounter = 3;
  var clicked = false;
  var liked = false;
  var faved = false;
  var likeNum = 30;
  var favNum = 25;
  var listOfDoc = [];
  
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

    }

//show relatedDoctor
    var docCat = '(';
        docCat += json[0].RelatedDoctor;
        docCat += '醫生）'
        $('#blue').text(docCat);

     $.ajax({
      method: "GET",
      url: "",
      data: //pass in relatedDoctor
    })
      .done(function( data ) {
        var json = JSON.parse(data);
        for(var i = 0; i < json.length; i ++){
          listOfDoc[i] = json[i];  
        }
        $('.nameTag').each(function(i,obj){
          $($(this).children()[0]).text();   //doctor name
          $($(this).children()[2]).text();   //doctor type
        });

        $('.address').each(function(i,obj){
          $($(this).children()[0]).text();   //address area
          $($(this).children()[1]).text();    //address
        });

        $('.contentSickness').each(function(i,obj){
          var a = $(this).children()[1];
          $(a).attr('href', '');    //set link to doctor
        })
        
      });

  });

    $(".more").click(function(){

        if (clicked == false){
        
       clicked = true;
        $('.posts').append(moreDoc(listOfDoc));
      }
       
    });

  $(".fa-thumbs-o-up").text(likeNum);
  $('.fa-heart').text(favNum);

});

 $(window).bind('resize',onWindowResize);

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

