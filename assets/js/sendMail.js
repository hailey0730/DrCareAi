$(document).ready(function() {
	$("#sendMail").click(function(){
		$(".error").hide();
		var hasError = false;
		// var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;

		var emailToVal = "info@clinicbot.io";

		var clientName = $('#clientName').val();
		if(clientName == ''){
			$('#clientName').after('<span class="error">You forgot to enter your name.</span>');
			hasError = true;
		}

		var emailFromVal = $("#email").val();
		if(emailFromVal == '') {
			$("#email").after('<span class="error">You forgot to enter the email address to send from.</span>');
			hasError = true;
		} else if(emailFromVal.indexOf("@") == -1 || emailFromVal.indexOf(".") == -1) {
			$("#email").after('<span class="error">Enter a valid email address to send from.</span>');
			hasError = true;
		}

		var categoryVal = $("#category").val();
		if(categoryVal == '') {
			$("#category").after('<span class="error">You forgot to enter the category.</span>');
			hasError = true;
		}

		var messageVal = $("#message").val();
		if(messageVal == '') {
			$("#message").after('<span class="error">You forgot to enter the message.</span>');
			hasError = true;
		}

		if(hasError == false) {
			$(this).hide();
 $("#sendMail li.buttons").append('<img src="/images/template/loading.gif" alt="Loading" id="loading" />');
 // show client it is loading


 // $.post("/play/jqueryajaxform/sendEmail.php",
 // 	{ emailTo: emailToVal, clientName: clientName, emailFrom: emailFromVal, category: categoryVal, message: messageVal },
 // 	function(data){
 // 		$("#sendMail").slideUp("normal", function() {

 // 			$("#sendMail").before('<h1>Success</h1><p>Your email was sent.</p>');
 // 		});
 // 	}
 // 	); 
} 

return false;
});
});