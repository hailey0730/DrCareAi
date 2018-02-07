
    var articles = [];
    var scrollIndex = 0;
    var wVal = "";
    var cVal = "";
    var eVal = "";
    var hT = $('thead').offset().top,
               hH = $('thead').outerHeight(),
               wH = $(window).height();
   var $table = $('.vaccineTable');
   var index = 1;

$(document).ready(function() {
    $('#searchWord').hide();

    $.get("http://www.chatbot.hk/DrCare.Region.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513", function(data){
        var json = JSON.parse(data);
        loadSelectOptions(json);
    });

     if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        var detail = '<p>季節性流感疫苗SIV(包括 孕婦-W, 兒童-C, 長者-E), 肺炎球菌疫苗(23vPPV)(只包括長者-E23), 肺炎球菌疫苗(PCV13)(只包括長者-E13)</p>';
        $('#three header').append(detail);
    }

    initLoad();
    

    // $('#searchForm').submit(function(e){       
    $('.filter').change(function(e){       
        e.preventDefault();
        console.log("search");
        console.log($('#area').val());
        $('.tableHeader').empty();
        $('.tableContent').remove();
        $('#footer').remove();
       scrollIndex = 0;
        $table.floatThead('destroy');
        
       wVal = $('#pregnant').is(':checked')? "Y":"N";
       cVal = $('#children').is(':checked')? "Y":"N";
       eVal = $('#elderly').is(':checked')? "Y":"N";


            var url = "http://www.chatbot.hk/DrCare.SIV.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513"
            + "&Region=" + $('#area').val() + "&Women=" + wVal + "&Children=" + cVal
            + "&Elder=" + eVal;


            $.get(url, function(data){
                var json  = JSON.parse(data);
                loadVaccine(json);
                
            });
        

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
        if ($(document).height() - win.height() - 500 < win.scrollTop()) {
            
            if(scrollIndex < articles.length){
               
                var html = articlesHTML(articles[scrollIndex], wVal, cVal, eVal);
                $("tbody").append(html);
                scrollIndex ++;
            }else if(scrollIndex == articles.length){
                $('body').append(footer());
                scrollIndex++;
            }
        }

        });

        });


});

function initLoad(){
    $('.tableHeader').empty();
    $('.tableContent').remove();
    $('#footer').remove();
   scrollIndex = 0;
    $table.floatThead('destroy');

    wVal = "Y";
    cVal = "Y"; 
    eVal = "Y";

        var url = "http://www.chatbot.hk/DrCare.SIV.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513"+ "&Women=" + wVal + "&Children=" + cVal
            + "&Elder=" + eVal;;

        $.get(url, function(data){
            var json  = JSON.parse(data);
            loadVaccine(json);
            
        });
    

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
    if ($(document).height() - win.height() - 500 < win.scrollTop()) {
        
        if(scrollIndex < articles.length){
           
            var html = articlesHTML(articles[scrollIndex], wVal, cVal, eVal);
            $("tbody").append(html);
            scrollIndex ++;
        }else if(scrollIndex == articles.length){
            $('body').append(footer());
            scrollIndex++;
        }
    }

    });
}

    function loadVaccine(json){
            articles = [];
            for(var j = 0; j < json.length; j ++){
                articles[j] = json[j];
            }
            
            $('#searchWord').show();
            // $(".articles").css("display", "inline");

            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                    // var detail = '<p>季節性流感疫苗SIV(包括 孕婦-W, 兒童-C, 長者-E), 肺炎球菌疫苗(23vPPV)(只包括長者-E23), 肺炎球菌疫苗(PCV13)(只包括長者-E13)</p>';
                    // $('#three header').append(detail);
                    var header = headerhtmlMobile(wVal, cVal, eVal);
                    // $('td:first').css('width', '5em');

                }else{
                    var header = headerhtml(wVal, cVal, eVal);
                }
            
            // var header = headerhtml(conf.women, conf.children, conf.elderly);
            // console.log(articles);
            var html = articlesHTML(articles[scrollIndex],wVal, cVal, eVal);
            // var html = articlesHTML(articles[scrollIndex],conf.women, conf.children, conf.elderly);
            scrollIndex ++;
            $(".tableHeader").append(header);
            $("tbody").append(html);
            $('html,body').animate({        //move to article session when enter is pressed
            scrollTop:$('#three').offset().top}, 'slow');
}

//===================load select options=================
function loadSelectOptions(areaList){
    // var areaList = ["中西區","九龍城","元朗","北區","南區","大埔","屯門","東區","沙田","油尖旺","深水埗","灣仔","荃灣","葵青","西貢","觀塘","離島","黃大仙"];
    var areas = '';
    for(var i = 0; i < areaList.length; i++){
        areas += '<option value="' + areaList[i].Region + '">' + areaList[i].Region + '</option>';
    }
    $('#area').append(areas);

    // var vaccineList = ["季節性流感疫苗 (SIV)","肺炎球菌疫苗 (23vPPV)","肺炎球菌疫苗 (PCV13)"];
    // var vaccines = '';
    // for(var i = 0; i < vaccineList.length; i ++){
    //     '<option value="' + vaccineList[i] + '">' + vaccineList[i] + '</option>';
    // }
    // $('#type').append(vaccines);

}

// function showHeader(text, i){
//     $('th:nth-child('+i+')').text(text);
// }

function headerhtmlMobile(w,c,e){
    
    var returnHTML = "<th>疫苗提供者</th><th>地址和電話號碼</th>";

    if(w == "Y"){
        returnHTML += "<th>W</th>";
    }
    if(c == "Y"){
        returnHTML +=　"<th>C</th>";
    }
    if(e == "Y"){
        returnHTML += "<th>E</th><th>E23</th><th>E13</th>";
    }

    return returnHTML;
}

function headerhtml(w,c,e){
    var returnHTML = "<th>疫苗提供者</th><th>地址和電話號碼</th>";

    if(w == "Y"){
        returnHTML += "<th>季節性流感疫苗(SIV)(孕婦)</th>";
    }
    if(c == "Y"){
        returnHTML +=　"<th>季節性流感疫苗(SIV)(兒童)</th>";
    }
    if(e == "Y"){
        returnHTML += "<th>季節性流感疫苗(SIV)(長者)</th><th>肺炎球菌疫苗(23vPPV)(長者)</th><th>肺炎球菌疫苗(PCV13)(長者)</th>";
    }

    return returnHTML;
}

//===================infinite loop post==================
function articlesHTML(articles, w,c,e){
    // console.log(articles);   //DEBUG
   var returnHTML = "",
        
    returnHTML = "<tr class='tableContent'><td><div><a href='http://www.drcare.ai/Doctor/docPage.php?Name=" 
    + articles.Doctor + "&ID=" + articles.DoctorID + "'>" + "<u><p>" + articles.Name + "</p><p>" + articles.Doctor
    + "</p></a><div></td><td><div><p>" + articles.Address + "</p></u><a href='tel:852" + articles.Phone  + "' data-rel='external'><u>" + articles.Phone + "</u></a>"
    + "</div></td>";

    if(w == "Y"){
        returnHTML += "<td>" + temp(articles.SIV_Women) + "</td>";
    }
    if(c == "Y"){
        returnHTML +=　 "<td>" + temp(articles.SIV_Children) + "</td>";
    }
    if(e == "Y"){
        returnHTML +=  "<td>" + temp(articles.SIV_ElderSiv) + "</td>"
        + "<td>" + temp(articles.SIV_Elder23) + "</td>" + "<td>" + temp(articles.SIV_Elder13) + "</td>";
    }

    returnHTML += "</tr>"

    return returnHTML;

}

function temp(val){
    var result = "";
    if(val == null){
        result = "不適用";
    }else{
        result = "$" + val;
    }
    return result;
}