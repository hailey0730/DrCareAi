$(document).ready(function() {

//===========send email===================
	$("#sendMail").click(function(){
		$(".error").hide();
		event.preventDefault();
		var hasError = false;
		// // var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;

		var email = "info@clinicbot.io";

		var clientName = $('#clientName').val();
		if(clientName == ''){
			$('#clientName').after('<span class="error">請填上您的名稱。</span>');
			hasError = true;
		}

		var emailFromVal = $("#email").val();
		if(emailFromVal == '') {
			$("#email").after('<span class="error">請填上您的電郵。</span>');
			hasError = true;
		} else if(emailFromVal.indexOf("@") == -1 || emailFromVal.indexOf(".") == -1) {
			$("#email").after('<span class="error">請填上有效的電郵。</span>');
			hasError = true;
		}

		var subject = $("#category").val();
		if(subject == null) {
			// $("#category").after('<span class="error">請填上類別。</span>');
			// hasError = true;
			subject = 'ClinicbotPage';
		}

		var emailBody = $("#message").val();
		if(emailBody == '') {
			$("#message").after('<span class="error">請填上您的信息。</span>');
			hasError = true;
		}
		// console.log(clientName);
		// console.log(emailFromVal);
		// console.log(subject);
		// console.log(emailBody);
		// if(hasError == false) {
		// 			$(this).hide();
		 
		//  $.post("php/sendEmail.php",
		//  	{clientName: clientName, emailFrom: emailFromVal, category: subject, message: emailBody },
		//  	function(data){
		//  		$("#sendMail").slideUp("normal", function() {

		//  			$("#sendMail").before('<h1>謝謝</h1><p>您的電郵已成功發送。</p>');
		//  			// $("#sendMail").before('<h1>Success</h1><p>Your email was sent.</p>');
		//  		});
		//  	}
		//  	); 
		// } 

		// return false;

		if(hasError == false){
		    window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody + '	來自:' + clientName + ' 先生/小姐';

			$(window).blur(function() {
		        // The browser apparently responded, so stop the timeout.
		        clearTimeout(t);
		      });

		      t = setTimeout(function() {
		        // The browser did not respond after 500ms, so open an alternative URL.
		        var altLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=info@clinicbot.io&su=';
		        altLink += subject;
		        altLink += '&body=';
		        altLink += emailBody;
		        altLink += '%20%20%20來自:%20';
		        altLink += clientName;
		        altLink += '%20先生/小姐';
		         document.location.href = altLink;
		      }, 500);

		    $(this).hide();
		    $("#sendMail").before('<h1>謝謝</h1><p>您的電郵已成功發送。</p>');
		}
		return false;
		});
});
