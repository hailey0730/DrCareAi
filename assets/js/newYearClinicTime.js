var clinicList = [];
var hT = $('thead').offset().top,
               hH = $('thead').outerHeight(),
               wH = $(window).height();

$(document).ready(function() {
	loadTable();

	var win = $(window);
         win.scroll(function() {
            
            //hT+hH-wH is better for browser but not for mobile
            if($(this).scrollTop() > (hT+hH-wH + 700)){
                
                $table.floatThead();
                $('.floatThead-container').addClass('float');
            }else{
                $('.floatThead-container').removeClass('float');

            }

        // End of the document reached?
        // if ($(document).height() - win.height() - 500 < win.scrollTop()) {
            
        //     if(scrollIndex < articles.length){
               
        //         var html = articlesHTML(articles[scrollIndex], wVal, cVal, eVal);
        //         $("tbody").append(html);
        //         scrollIndex ++;
        //     }else if(scrollIndex == articles.length){
        //         $('body').append(footer());
        //         scrollIndex++;
        //     }
        // }

        });
});

function loadTable(){
	console.log('should append table');
	$.getJSON("php/loadClinicTime.php", 
		function(data){
			console.log(data);
			for(var i = 0; i < clinicList.length; i ++){
				var html = '<tr class="tableContent">' + '<td>' +
				clinicList[i].Regions + '</td>' + '<td>' +
				clinicList[i].District + '</td>' + '<td class="clinic">' +
				clinicList[i].Name + '</td>' + '<td class="phone">' +
				clinicList[i].Phone + '</td>' + '<td>' + clinicList[i]['2018-02-16'] + '</td>' 
				+ '<td>' + clinicList[i]['2018-02-17'] + '</td>'
				+ '<td>' + clinicList[i]['2018-02-18'] + '</td>'
				+ '<td>' + clinicList[i]['2018-02-19'] + '</td>' + '</tr>';

				$('tbody').append(html);
			}
		});

}