 $(document).ready(function(){
 	
 	//===========send email===================
	$("#sendMail").click(function(){
		// event.preventDefault();
		$(".error").hide();
		var hasError = false;
		// var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;

		var emailToVal = "info@clinicbot.io";

		var clientName = $('#name').val();
		if(clientName == ''){
			$('#name').after('<span class="error">請填上您的名稱。</span>');
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

		var categoryVal = 'ClinicbotPage';
		// var categoryVal = $("#category").val();
		// if(categoryVal == '') {
		// 	$("#category").after('<span class="error">You forgot to enter the category.</span>');
		// 	hasError = true;
		// }

		var messageVal = $("#message").val();
		if(messageVal == '') {
			$("#message").after('<span class="error">請填上您的信息。</span>');
			hasError = true;
		}

		if(hasError == false) {
					$(this).hide();
		 // $("#sendMail li.buttons").append('<img src="/images/template/loading.gif" alt="Loading" id="loading" />');
		 // show client it is loading

		 $.post("php/sendEmail.php",
		 	{ emailTo: emailToVal, clientName: clientName, emailFrom: emailFromVal, category: categoryVal, message: messageVal },
		 	function(data){
		 		$("#sendMail").slideUp("normal", function() {

		 			$("#sendMail").before('<h1>謝謝</h1><p>您的電郵已成功發送。</p>');
		 		});
		 	}
		 	); 
		} 

		return false;
		});

 });