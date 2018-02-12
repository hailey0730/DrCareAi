$(document).ready(function(){ 
	
    $("#searchInput").keyup(function(){
      getTagsFromDB($('#searchInput').val());
    });
	
    $(document).bind("click",function(e){ 
      var target = $(e.target); 
      if(target.closest(".searchAuto").length == 0){ 
        $(".searchAuto").css('display', 'none'); 
      } 
    }) 

});


var selectedTag = [];


function getTagsFromDB(keyword){
  var autoInfo = "";
  if(keyword == "") return;

  $.getJSON("php/getTags.php", { 'keyword': keyword },
  	function(data){
  		if (data != '0'){ // return 0 if no result
  			  autoInfo = "<ul>";
  			  for($i=0; $i<data.length; $i++){
    				autoInfo += "<li class='autoResult' style='color:black;'><a href='#' onclick='resetValue(this)'>";
    				autoInfo += data[$i];
    				autoInfo += "</a></li>";
  			}
  			autoInfo += "</ul>";
  			
  			$(".searchAuto").html(autoInfo).css('display', 'block');
  		}
  });
}


function resetValue(selection){
  var temp = "" + selection.innerHTML;
  var currentHTML = "";
  var imgHTMLwithoutEnd;

  if ($.inArray(temp, selectedTag) != -1) { // if the tag is already added
    return;
  }

  selectedTag.push(temp);

  imgHTMLwithoutEnd = "<div class='tagIcon' onclick='hideTag(this)'><img src='img/tag.png' style='width: 20px; height: 20px;'><p>";
  imgHTMLwithoutEnd += temp;
  imgHTMLwithoutEnd += "</p></div>";
  
	$("#searchInput").val("");
	$(".searchAuto").css('display', 'none');
	
  currentHTML = $(".tagsContainer").html();
  $(".tagsContainer").html(currentHTML+imgHTMLwithoutEnd);

  loadDocs();
}

function hideTag(tag){
  selectedTag.splice($.inArray(tag.innerText,selectedTag),1); //remove from the array
  tag.remove(); // remove div
  loadDocs();
}