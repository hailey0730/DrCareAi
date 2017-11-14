
    var articles = [];
    var scrollIndex = 0;
    var wVal = "";
    var cVal = "";
    var eVal = "";

$(document).ready(function() {
    $('#searchWord').hide();

    loadSelectOptions();
    

    $('#searchForm').submit(function(e){        //prevent page refreshing when enter is pressed
        e.preventDefault();
        console.log("search");
        console.log($('#area').val());
        $('.tableHeader').empty();
        $('.tableContent').remove();
        $('#footer').remove();
       scrollIndex = 0;
        
       wVal = $('#pregnant').is(':checked')? "Y":"N";
       cVal = $('#children').is(':checked')? "Y":"N";
       eVal = $('#elderly').is(':checked')? "Y":"N";

            loadVaccine({
                region: $('#area').val(),
                women: wVal,
                children: cVal,
                elderly: eVal
            });
        

         var win = $(window);

         win.scroll(function() {

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



function loadVaccine(conf){
    
    $.getJSON("../../php/loadVaccine.php",
        {
            Region: conf.region,
            Women: conf.women,
            Children: conf.children,
            Elderly: conf.elderly,

        },
        function(json){
            articles = [];
            for(var j = 0; j < json.length; j ++){
                articles[j] = json[j];
            }
            
            $('#searchWord').show();
            // $(".articles").css("display", "inline");
            var header = headerhtml(conf.women, conf.children, conf.elderly);
            var html = articlesHTML(articles[scrollIndex],conf.women, conf.children, conf.elderly);
            scrollIndex ++;
            $(".tableHeader").append(header);
            $("tbody").append(html);
            $('html,body').animate({        //move to article session when enter is pressed
            scrollTop:$('#three').offset().top}, 'slow');
            
       
        });
}

//===================load select options=================
function loadSelectOptions(){
    var areaList = ["中西區","九龍城","元朗","北區","南區","大埔","屯門","東區","沙田","油尖旺","深水埗","灣仔","荃灣","葵青","西貢","觀塘","離島","黃大仙"];
    var areas = '';
    for(var i = 0; i < areaList.length; i++){
        areas += '<option value="' + areaList[i] + '">' + areaList[i] + '</option>';
    }
    $('#area').append(areas);

    // var vaccineList = ["季節性流感疫苗 (SIV)","肺炎球菌疫苗 (23vPPV)","肺炎球菌疫苗 (PCV13)"];
    // var vaccines = '';
    // for(var i = 0; i < vaccineList.length; i ++){
    //     '<option value="' + vaccineList[i] + '">' + vaccineList[i] + '</option>';
    // }
    // $('#type').append(vaccines);

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
   var returnHTML = "",
        
    returnHTML = "<tr class='tableContent'><td><div><p>" + articles.Name + "</p><p>" + articles.Doctor
    + "</p><div></td><td><div><p>" + articles.Address + "</p><p>" + articles.Phone
    + "</p></div></td>";
        // console.log(w);
        // console.log(c);
        // console.log(e);

     if(w == "Y"){
        returnHTML += "<td>" + temp(articles.SIV_Women) + "</td>";
    }
    if(c == "Y"){
        returnHTML +=　 "<td>" + temp(articles.SIV_Children) + "</td>";
    }
    if(e == "Y"){
        returnHTML +=  "<td>" + temp(articles.SIV_Elder) + "</td>"
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