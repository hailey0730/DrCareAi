var doctor;

$(document).ready(function(){ 

	$.getJSON("php/loadDocInfo-uat.php", 
		{ID: GetUrlParam("ID")},
		function(json){
			doctor = json["Result"][0];
			// set all doc info
			autoFillForm();

		})

});

function autoFillForm(){
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
	console.log(others);
	for(var i=0; i<others.length; i++) {
		if(others[i].indexOf('：') > 0){
			var attr = others[i].split('：');
			console.log(attr);
			if(attr[0] == " 使用語言"){
				$('#language').val(attr[1]);
			}
			if(attr[0] == "使用醫院"){
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
}

function GetUrlParam(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = encodeURI(window.location.search).substr(1).match(reg);
	if(r!=null)return unescape(r[2]); return null;
}