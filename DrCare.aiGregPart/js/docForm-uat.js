var doctor;
var articleCount = 1;
var vaccineCount = 1;
var clinicCount = 1;
var docPrice = 1;
var change = false;
var changedVariable=[];

$(document).ready(function(){ 

	$.getJSON("php/loadDocInfo-uat.php", 
		{ID: GetUrlParam("ID")},
		function(json){
			doctor = json["Result"][0];
			// set all doc info
			autoFillForm();

		});

	$("#docPic").change(function(){
        readURL(this, "docPicPreview", "passDocPic");

    });

	$('#docArticle').click(function(){
		var html = '<div class="row" id="articleDiv-' + articleCount + '">' +
	    			'<div class="col-sm-2">' +
					'</div>' +
					'<div class="col-sm-4">' +
						'<input onchange="detectChange(' + "'醫生網上寫過的文章/網誌'" + ')" id="docArticleurl-' + articleCount + '" name="docArticleurl-' + articleCount + '" class="inputBox" type="url" placeholder="http://www.example.com">' +
					'</div>' +
					'<div class="col-sm-1"> ' + 
					'<button class="add"  onclick="removeArticle(' + articleCount +')"><i class="fa fa-remove"></i></button>' + 
					'</div>' +
					'</div>';

		articleCount++;
		$('.docArticle').append(html);
	});

	$('#docPrice').click(function(){
		var html = '<div class="row" id="priceDiv-' + docPrice +'">' +'<div class="col-sm-2"></div>' +
				'<div class="col-sm-4">' +
					'<input onchange="detectChange(' + "'診金'" + ')" placeholder="服務 e.g. 補牙" id="service-' + docPrice + '" name="service-' + docPrice + '" class="inputBox" type="text"' +
					'>' +
				'</div>' +
				'<div class="col-sm-1">' +
					'<p class="right">$</p>' +
				'</div>' +
				'<div class="col-sm-2">' +
					'<input onchange="detectChange(' + "'診金'" + ')" placeholder="e.g. 500-1000" id="price-' + docPrice + '" name="price-' + docPrice + '" class="inputBox" type="text">' +
				'</div>' + 
				'<div class="col-sm-1"> ' + 
					'<button class="add"  onclick="removePrice(' + docPrice +')"><i class="fa fa-remove"></i></button>' + 
					'</div>' + '</div>';
		docPrice++;
		$('.price').append(html);
	})


	$('#vaccine').click(function(){
		var html = '<div class="row" id="vaccineDiv-' + vaccineCount +'">' +
				'<div class="col-sm-2">' +
					'<p>疫苗</p>' +
				'</div>' +
				'<div class="col-sm-4">' +
					'<input onchange="detectChange(' + "'疫苗'" + ')" id="vaccine-' + vaccineCount + '" name="vaccine-' + vaccineCount + '" class="inputBox" type="text">' +
				'</div>' +
				'<div class="col-sm-1">' +
					'<p class="right">價格	$</p>' +
				'</div>' +
				'<div class="col-sm-2">' +
					'<input onchange="detectChange(' + "'疫苗'" + ')" id="vaccinePrice-' + vaccineCount + '" name="vaccinePrice-' + vaccineCount + '" type="text">' +
				'</div>' +
				'<div class="col-sm-1"> ' + 
					'<button class="add"  onclick="removeVaccine(' + vaccineCount +')"><i class="fa fa-remove"></i></button>' + 
					'</div>' +
			'</div>';

			vaccineCount++;
		$('.vaccine').append(html);
	});

	$('#clinic').click(function(){
		addClinic();
        
	});

	$('#update').click(function(){
		updateInfo();
	});

});

function detectChange(variable){
	change = true;
	var added = false;
	for(var i = 0; i < changedVariable.length; i ++){
		if(changedVariable[i] == variable){
			added = true;
		}
	}
	if(!added){
		changedVariable.push(variable);
	}
	// console.log(changedVariable);
}

function autoFillForm(){
	$('#docId').val(doctor["ID"]);
	$('#token').val(GetUrlParam("token"));
	$('#chName').val(doctor["Name"]);
	$('#enName').val(doctor["FullName"].split(doctor["Name"])[1]);
	$('input[name="gender"]').each(function(i,obj){
		if($(this).val() == doctor["Sex"]){
			$(this).prop("checked", true);
		}
	});
	$('#specialist').val(doctor["SubCategory"]);
	$('#serviceProduct').val();
	$('#certificate').val(doctor["Certification"].split(' 專業資格')[1]);

	//others
	var others = doctor["Remarks"].replace("\r", "").split("\n");
	// console.log(others);
	for(var i=0; i<others.length; i++) {
		if(others[i].indexOf('：') > 0){
			var attr = others[i].split('：');
			// console.log(attr);
			if(attr[0] == " 使用語言"){
				$('#language').val(attr[1]);
			}
			if(attr[0] == " 使用醫院"){
				$('#hospital').val(attr[1]);
			}
			if(attr[0] == " 傳真機"){
				$('#fax').val(attr[1]);
			}
			if(attr[0] == " 傳呼機"){
				$('#call').val(attr[1]);
			}
			if(attr[0] == " 電郵地址"){
				$('#email').val(attr[1]);
			}
		}
		
	}

	
	$('#phone').val();
	// $('input[name="phone"]').each(function(i,obj){
	// 	if($(this).val() == doctor[""]){
	// 		$(this).prop("checked", true);
	// 	}
	// });

	fillInClinic();
}

function removeArticle(count){
	$("#articleDiv-"+count).remove();
}

function removePrice(count){
	$("#priceDiv-"+count).remove();
}

function removeVaccine(count){
	$("#vaccineDiv-"+count).remove();
}

function removeClinic(count){
	$("#clinicDiv-"+count).remove();
}

function updateInfo(){
	var filledIn = true;
	var chName = $('#chName').val() == null? "":$.trim($('#chName').val());
	var enName = $('#enName').val() == null? "":$.trim($('#enName').val());
	var gender = $('input[name="gender"]').val() == null? "":$('input[name="gender"]').val();
	var docPic = $('#docPicPreview').attr('src') == null? "":$('#docPicPreview').attr('src');
	var specialist = $("#specialist").val() == null? "":$.trim($("#specialist").val());
	var serviceProduct = $("#serviceProduct").val() == null? "":$("#serviceProduct").val();
	var certificate = $("#certificate").val() == null? "":$("#certificate").val();
	// var price = $('#price').val() == null?"":$('#price').val();
	// loop to get price and service
	var language = $("#language").val() == null? "":$("#language").val();
	var hospital = $("#hospital").val() == null? "":$("#hospital").val();
	var phone = $("#phone").val() == null? "":$("#phone").val();
	var phonePub = $("input[name='phone']").val() == null? "":$('input[name="phone"]').val();
	var fax = $("#fax").val() == null? "":$("#fax").val();
	var call = $("#call").val() == null? "":$("#call").val();
	var email = $("#email").val() == null? "":$("#email").val();
	var facebook = $("#facebook").val() == null? "":$("#facebook").val();
	var article = [];
	for(var i = 0; i < articleCount; i ++){
		var articleId = "#docArticleurl-" + i;
		var articleObj = $(articleId).val() == null? "": $(articleId).val();
		article.push(articleObj);
	}
	var ticket = $('input[name="ticket"]').val() == null? "":$('input[name="ticket"]').val();
	var night = $('input[name="night"]').val() == null? "":$('input[name="night"]').val();
	var vaccine = [];
	for(var i = 0; i < vaccineCount; i ++){
		var vaccineId = "#vaccine-" + i;
		var vaccinePriceId = "#vaccinePrice-" + i;
		var vaccineName = $(vaccineId).val() == null? "":$(vaccineId).val();
		var vaccinePrice = $(vaccinePriceId).val() == null? "":$(vaccinePriceId).val();
		var vaccineObj = {
			"Name":vaccineName,
			"Price":vaccinePrice};
		vaccine.push(vaccineObj);
	}
	var clinic = [];
	for(var i = 0; i < clinicCount; i ++){
		var clinicName = $('#clinicName-' +i).val() == null? "":$.trim($('#clinicName-' +i).val());
		var address = $('#address-' + i).val() == null? "":$.trim($('#address-' +i).val());
		var clinicTime = $('#clinicTime-' + i).val() == null? "":$.trim($('#clinicTime-' +i).val());
		var clinicHoliday = $('#clinicHoliday-' + i).val() == null? "":$.trim($('#clinicHoliday-' +i).val());
		var clinicPhone = $("#clinicPhone-"+i).val() == null? "":$.trim($('#clinicPhone-' +i).val());
		var enquiry = $('input[name="enquiry-' + i+'"]').val() == null? "":$('input[name="enquiry-' + i+'"]').val();
		var clinicUrl = $('#clinicUrl-' + i).val() == null? "":$('#clinicUrl-' +i).val();
		var clinicEmail = $('#clinicEmail-'+i).val() == null? "":$('#clinicEmail-' +i).val();
		var clinicPic = $('#clinicPicPreview-'+i).attr('src') == null? "":$('#clinicPicPreview-'+i).attr('src');
		var clinicIntro = $('#clinicIntro-'+i).val() == null? "":$('#clinicIntro-'+i).val();
		var clinicObj = {
			"Address":address,
			"Opentime":clinicTime
		}
		
		if(i == 0 ){
			if(address==""){
				filledIn = false;
			}
		}
		if(chName=="" || enName=="" || gender=="" || specialist=="" ){
			filledIn = false;
		}else{
			clinic.push(clinicObj);
		}

	}

	var ps = $('#ps').val()== null? "":$('#ps').val();

	// console.log(change);

// to show which variable changed
	// for(var i = 0; i < changedVariable.length; i ++){
	// 	switch(changedVariable[i]){
	// 		case '中文姓名':
	// 			 += "(改)";
	// 			break;
	// 		case '英文姓名'
				
	// 			break;
	// 		case '性別'
				
	// 			break;
	// 		case '醫生照片'

	// 			break;
	// 		case '專業科目'
	// 		case '特別的服務和產品'
	// 		case '專業資格'
	// 		case '診金'
	// 		case '使用語言'
	// 		case '使用醫院'
	// 		case '醫生電話'
	// 		case '醫生傳真機'
	// 		case '醫生傳呼機'
	// 		case '電郵地址'
	// 		case '醫生Facebook'
	// 		case '醫生網上寫過的文章/網誌'
	// 		case '醫療券'
	// 		case '夜診'
	// 		case '疫苗'
	// 		case '診所名稱'
	// 		case '診所地址'
	// 		case '診所開診時間'
	// 		case '診所公眾假期'
	// 		case '診所電話'
	// 		case '診所集團網站'
	// 		case '診所集團電郵'
	// 		case '診所集團圖片'
	// 		case '診所集團介紹'
	// 		case '備注'
	// 	}
	// }
			
	if(filledIn){
		swal({
			text:"閣下的資料已成功提交,我們將盡快為您更新網上資料。感謝閣下的時間。",
			icon:"success",
		});
		var  data = {
		"method": "write",
		"name": "Hailey",
		"sex": "female",
		"remark": "測試寫入功能"
		}

		// var xhr = new XMLHttpRequest();
		// xhr.open('POST', 'https://script.google.com/macros/s/AKfycbyG_pdTU6ZGhXsWHrUkp0BPI8BDh01p-8i_cri8T9vY3x75SoAv/exec?chName=newName');
		// xhr.send();

		// $.post('php/updateGoogleSpreadsheet.php',data,function(response){
		// 	console.log(response);
		// },'json');

		// $.ajax({
  //           url: "https://script.google.com/macros/s/AKfycbyG_pdTU6ZGhXsWHrUkp0BPI8BDh01p-8i_cri8T9vY3x75SoAv/exec", 
  //           type: "GET",   
  //           dataType: 'jsonp',
  //           cache: false,
  //           success: function(response){                          
  //               alert(response);                   
  //           }           
  //       });    

		// $.ajax({
		// type: "post",
		// crossDomain:true,
		// data: {
		// "method": "write",
		// "name": "Hailey",
		// "sex": "female",
		// "remark": "測試寫入功能"
		// },
		// dataType:'json',
		// url: "https://script.google.com/macros/s/AKfycbyG_pdTU6ZGhXsWHrUkp0BPI8BDh01p-8i_cri8T9vY3x75SoAv/exec", // 填入網路應用程式網址
		// headers: {
  //                   'Access-Control-Allow-Origin': '*',
  //                   'Access-Control-Allow-Methods': 'GET, POST, PUT',
		// 			'Access-Control-Allow-Headers': 'Content-Type'
  //               },
		// success:function(){
		// 	console.log('done');
		// }
		// });

	}else{
		swal({
			  text: "有些必填項目還沒有填寫,請於有*項目補上資料。",
			  icon: "error",
			});
		return false;
	}
}

function fillInClinic(){
	for(var i = 0; i < doctor["Clinic"].length; i ++){
	var html = '<div class="row"><div class="col-sm-2"><p>診所名稱</p></div>' +
					'<div class="col-sm-4">' +
						'<input onchange="detectChange(' + "'診所名稱'" + ')" id="clinicName-0" name="clinicName-0" type="text" class="inputBox">' +
					'</div>' +
					'</div>'+
				'<div class="row"><div class="col-sm-2"><p>地址 *</p></div>' +
				'<div class="col-sm-6">' +
					'<textarea onchange="detectChange(' + "'診所地址'" + ')" name="address-0" class="address" id="address-0" rows="1" value="">' + doctor["Clinic"][i]["Address_ch"] + '</textarea>' +
				'</div>' +
			'</div>' +
			'<div class="row"><div class="col-sm-2"><p>開診時間</p></div>' +
				'<div class="col-sm-6">' +
					'<textarea onchange="detectChange(' + "'診所開診時間'" + ')" name="clinicTime-0" id="clinicTime-0" rows="7" value="">' + doctor["Clinic"][i]["Opentime"] + '</textarea>' +
				'</div>' +
			'</div>' +
			'<div class="row"><div class="col-sm-2"><p>公眾假期</p></div>' +
				'<div class="col-sm-6">' +
					'<textarea onchange="detectChange(' + "'診所公眾假期'" + ')" name="clinicHoliday-0" id="clinicHoliday-0" rows="3" value=""></textarea>' +
				'</div>' +
			'</div>' +
			'<div class="row"><div class="col-sm-2"><p>診所電話</p></div>' +
				'<div class="col-sm-4">' +
					'<input onchange="detectChange(' + "'診所電話'" + ')" id="clinicPhone-0" name ="clinicPhone-0" class="inputBox" type="tel" value="' + doctor["Clinic"][i]["Phone"] +'">' +
				'</div>' +
			'</div>' +
			'<div class="row"><div class="col-sm-2"><p>預先致電查詢</p></div>' +
    			'<div class="col-sm-1">' +
    				'<input onchange="detectChange(' + "'診所電話'" + ')" class="radio" type="radio" name="enquiry-0" value="need"><p class="radioP">需要</p>' +
    			'</div>' +
    			'<div class="col-sm-1">' +
    				'<input onchange="detectChange(' + "'診所電話'" + ')" class="radio" type="radio" name="enquiry-0" value="dontneed"><p class="radioP">不需要</p>' +
    			'</div>' +
			'</div>' +
			'<div class="row"><div class="col-sm-2"><p>診所集團網站</p></div>' +
				'<div class="col-sm-4">' +
					'<input onchange="detectChange(' + "'診所集團網站'" + ')" id="clinicUrl-0" name="clinicUrl-0" type="url" placeholder="http://www.example.com" class="inputBox">' +
				'</div>' +
			'</div>' +
			'<div class="row"><div class="col-sm-2"><p>診所集團電郵</p></div>' +
				'<div class="col-sm-4">' +
					'<input onchange="detectChange(' + "'診所集團電郵'" + ')" id="clinicEmail-0" name="clinicEmail-0" type="email" placeholder="example@something.com" class="inputBox">' +
				'</div>' +
			'</div>' +
			'<div class="row"><div class="col-sm-2"><p>診所集團圖片</p></div>' +
				'<div class="col-sm-4">' +
					'<div id="form1" runat="server">' +
						'<input type="file" id="clinicPic-0"  onchange="readURL(this,' + "'clinicPicPreview-0'"+ ",'passClinicPic-0'" + ')" />' +
	    				'<img id="clinicPicPreview-0" src=""/>' +
	    				'<input id="passClinicPic-0" type="text" name="clinicPic-0" style="display: none;">'+
	    	// '<input type="text" id="clinicPic-0" class="inputBox" name="clinicPic-0" onchange="detectChange(' + "'診所集團圖片'" + ')" placeholder="www.example.jpg" />' +
	    			'</div>' +
				'</div>' +
			'</div>' +
			'<div class="row"><div class="col-sm-2"><p>診所集團介紹</p></div>' +
				'<div class="col-sm-6">' +
					'<textarea onchange="detectChange(' + "'診所集團介紹'" + ')" name="clinicIntro-0" id="clinicIntro-0" rows="7" value=""></textarea>' +
				'</div>' +
			'</div>';

			$('.clinic').append(html);
		}
}

function addClinic(){
	var html = '<div id="clinicDiv-' + clinicCount +'"><div class="line"></div>' +
		'<div class="row"><div class="col-sm-2">'+
				'<div id="clinic" onclick="addClinic()" class="add" ><i class="fa fa-plus"></i> 新增診所</div>'+
			'</div>'+
			'<div class="col-sm-2">'+
		'<button class="add"  onclick="removeClinic(' + clinicCount +')"><i class="fa fa-remove"></i> 取消診所</button>'+
		'</div></div>'+
					'<div class="row">' +
	    			'<div class="col-sm-2">' +
	    			'<p>診所名稱</p>' +
					'</div>' +
					'<div class="col-sm-4">' +
						'<input onchange="detectChange(' + "'診所名稱'" + ')" id="clinicName-' + clinicCount + '" name="clinicName-' + clinicCount + '" type="text" class="inputBox">' +
					'</div>' +
					'</div>'+
					' <div class="row">' +
				'<div class="col-sm-2">' +
					'<p>地址</p>' +
				'</div>' +
				'<div class="col-sm-6">' +
					'<textarea onchange="detectChange(' + "'診所地址'" + ')" name="address-' + clinicCount +'" class="address"  id="address-' + clinicCount +'" rows="1" value=""></textarea>' +
				'</div>' +
			'</div>' +
			'<div class="row">' +
				'<div class="col-sm-2">' +
					'<p>開診時間</p>' +
				'</div>' +
				'<div class="col-sm-6">' +
					'<textarea onchange="detectChange(' + "'診所開診時間'" + ')" name="clinicTime-' + clinicCount +'" id="clinicTime-' + clinicCount +'" rows="7" value=""></textarea>' +
				'</div>' +
			'</div>' +
			'<div class="row"><div class="col-sm-2"><p>公眾假期</p></div>' +
				'<div class="col-sm-6">' +
					'<textarea onchange="detectChange(' + "'診所公眾假期'" + ')" name="clinicHoliday-' + clinicCount +'" id="clinicHoliday-' + clinicCount +'" rows="3" value=""></textarea>' +
				'</div>' +
			'</div>' +
			'<div class="row"><div class="col-sm-2"><p>診所電話</p></div>' +
				'<div class="col-sm-4">' +
					'<input onchange="detectChange(' + "'診所電話'" + ')" id="clinicPhone-' + clinicCount +'" name="clinicPhone-' + clinicCount +'" type="tel" class="inputBox">' +
				'</div>' +
			'</div>' +
			'<div class="row">' +
				'<div class="col-sm-2">' +
    				'<p>預先致電查詢</p>' +
    			'</div>' +
    			'<div class="col-sm-1">' +
    				'<input onchange="detectChange(' + "'診所電話'" + ')" class="radio" type="radio" name="enquiry-' + clinicCount +'" value="need"><p class="radioP">需要</p>' +
    			'</div>' +
    			'<div class="col-sm-1">' +
    				'<input onchange="detectChange(' + "'診所電話'" + ')" class="radio" type="radio" name="enquiry-' + clinicCount +'" value="dontneed"><p class="radioP">不需要</p>' +
    			'</div>' +
			'</div>' +
			'<div class="row">' +
    			'<div class="col-sm-2">' +
					'<p>診所集團網站</p>' +
				'</div>' +
				'<div class="col-sm-4">' +
					'<input onchange="detectChange(' + "'診所集團網站'" + ')" id="clinicUrl-' + clinicCount +'" name="clinicUrl-' + clinicCount +'" type="url" placeholder="http://www.example.com" class="inputBox">' +
				'</div>' +
			'</div>' +
			'<div class="row">' +
    			'<div class="col-sm-2">' +
					'<p>診所集團電郵</p>' +
				'</div>' +
				'<div class="col-sm-4">' +
					'<input onchange="detectChange(' + "'診所集團電郵'" + ')" id="clinicEmail-' + clinicCount +'" name="clinicEmail-' + clinicCount +'" type="email" placeholder="example@something.com" class="inputBox">' +
				'</div>' +
			'</div>' +
			'<div class="row">' +
    			'<div class="col-sm-2">' +
					'<p>診所集團圖片</p>' +
				'</div>' +
				'<div class="col-sm-4">' +
					'<div id="form1" runat="server">' +
						'<input type="file" id="clinicPic-' + clinicCount +'" onchange="readURL(this,' + "'clinicPicPreview-" + clinicCount + "'"+ ",'passClinicPic-" + clinicCount + "'" + ')" />' +
						// '<input type="text" id="clinicPic-' + clinicCount +'" class="inputBox" name="clinicPic-' + clinicCount +'" onchange="detectChange(' + "'診所集團圖片'" + ')" placeholder="www.example.jpg" />' +
	    				'<img id="clinicPicPreview-' + clinicCount +'" src=""/>' +
	    				'<input id="passClinicPic-' + clinicCount +'" type="text" name="clinicPic-' + clinicCount +'" style="display: none;">'+
	    			'</div>' +
				'</div>' +
			'</div>' +
			'<div class="row">' +
    			'<div class="col-sm-2">' +
					'<p>診所集團介紹</p>' +
				'</div>' +
				'<div class="col-sm-6">' +
					'<textarea onchange="detectChange(' + "'診所集團介紹'" + ')" name="clinicIntro-' + clinicCount +'" id="clinicIntro-' + clinicCount +'" rows="7" value=""></textarea>' +
				'</div>' +
			'</div></div>';

			clinicCount++;
			$('.clinic').append(html);
			var num = clinicCount-1;
			var scrollId = "#clinicDiv-" + num;
			console.log(scrollId);
			$('html,body').animate({        //move to article session when enter is pressed
                    scrollTop:$(scrollId).offset().top}, 'slow');
                    // scrollTop:$(scrollId).offset().top}, 'slow');
}

function readURL(input,id, inputid) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
            	var divId = "#" + id;
            	var passId = "#" + inputid;
                $(divId).attr('src', e.target.result);

                var form = new FormData();
				form.append("image", e.target.result.split(',')[1]);

				var settings = {
				  "async": true,
				  "crossDomain": true,
				  "url": "https://api.imgur.com/3/image",
				  "method": "POST",
				  "headers": {
				    "Authorization": "Client-ID 6004c1196bd631d"
				  },
				  "processData": false,
				  "contentType": false,
				  "mimeType": "multipart/form-data",
				  "data": form
				}

				$.ajax(settings).done(function (response) {
					console.log(response);
					var json = JSON.parse(response);
					var link = json['data']['link'];
					console.log(link);
					console.log(passId);
				  	
	                if(id.split('-')[0] == 'clinicPicPreview'){
	                	detectChange('診所集團圖片');
	                	$(passId).val(link);
	                }else{
	                	$(passId).val(link);
	                }
				});
            	
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

function GetUrlParam(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = encodeURI(window.location.search).substr(1).match(reg);
	if(r!=null)return unescape(r[2]); return null;
}