$(document).ready(function() {
	var win = $(window);

    $('#text-area').onwebkitspeechchange = function(e){ //doesnt work
        console.log($(this).value);
    }

	$('#text-area').keyup(function(e){
			$('#searchWord').text("相關"+$(this).val()+"文章有：");
	});

    $('#searchForm').submit(function(e){        //prevent page refreshing when enter is pressed
        e.preventDefault();                     //try to move to article session when enter is pressed
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

			$('#main1').append(randomPost());
			$('#main2').append(randomPost());
			$('#main3').append(randomPost());
            $('#loading').hide();
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
function randomPost(){
	var content = ['<p>afsd jwe nglka fdjsao, fdjsai ds jeiw jjhsa jklds,dsa s sijf. fdshjakl  hdsfiloa hnjls nfdsiao hofgdsn pi ks knlf, gfdip snpij njd  dpnmj sa.</p>', 
	'<p>In a luctus purus, in tempus mi. Integer vulputate tincidunt arcu quis aliquet. Maecenas sollicitudin nec nisi sit amet dictum. Curabitur sagittis nulla id sem vulputate, eget blandit nibh ullamcorper. Nam feugiat elementum pharetra. Vestibulum a purus eget mi mattis tincidunt a sed felis.</p>', 
	'<p>Integer erat eros, vestibulum at tortor vitae, sollicitudin finibus est. Aliquam ornare, elit necfelis.</p>',
	'<p>Nulla molestie porttitor justo vitae pharetra. Proin non convallis lacus, eget malesuada metus. Duis aliquam eu massa molestie rhoncus. Vestibulum a malesuada nulla. Morbi at libero tempus,eget interdum lectus efficitur.</p>'];

	var content2 = ['<p>aflbvhjsjkhl</p>', '<p>afdhsaklhjkl</p>'];
		// Shuffle the content

    for (var i = content.length - 1; !!i; --i) {
        var j = Math.floor(Math.random() * i);
        var p = content[i];
        content[i] = content[j];
        content[j] = p;
    }

     for (var i = content2.length - 1; !!i; --i) {
        var j = Math.floor(Math.random() * i);
        var p = content2[i];
        content2[i] = content2[j];
        content2[j] = p;
    }

    var k = Math.random();
     // Generate the post
     if(k<0.5){
    var post = '<li>';
    post += '<article id="content">';
    post += '<a href="#" class="image"><img src="images/Banner.png" alt="" />';
    post += '</a>';
    post += '<div class="content">';
    post += '<h3>Random Post!</h3>';
    post += content.join('');
    post += '<ul class="actions"><li><a href="#" class="button">閱讀</a></li></ul></div>';
    post += '</article>';
    post += '</li>';
}else{
	var post = '<li>';
    post += '<article id="content">';
    post += '<a href="#" class="image"><img src="images/Banner.png" alt="" />';
    post += '</a>';
    post += '<div class="content">';
    post += '<h3>Random Post!</h3>';
    post += content2.join('');
    post += '<ul class="actions"><li><a href="#" class="button">閱讀</a></li></ul></div>';
    post += '</article>';
    post += '</li>';
}

    return post;

}