function sendEmail(){
	var email = "info@aisabots.com";
	window.location = 'mailto:' + email;
	$(window).blur(function() {
		        // The browser apparently responded, so stop the timeout.
		        clearTimeout(t);
		      });

		      t = setTimeout(function() {
		        // The browser did not respond after 500ms, so open an alternative URL.
		        var altLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=info@aisabots.com';
		         // document.location.href = altLink;
		         window.open(altLink, '_blank');	//open link on new tab
		      }, 500);
}