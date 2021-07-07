$(document).ready(function(){
	$(".show-password").change(function(){
	    if ($(this).is(":checked")){
	    	$("#password").attr("type","text");
	    }else{
	      $("#password").attr('type', 'password');
	    }
  	});
	function first_name(){
		if ($("#fname").val().length == "") {
			$("#fname_text").show().html($("#fname").attr("name") + " Field is Required");
			fname_error = false;
			return false;
		}
		else{
			$("#fname_text").hide();
		}
	}
	function last_name(){
		if ($("#lname").val().length == "") {
			$("#lname_text").show().html($("#lname").attr("name") + " Field is Required");
			lname_error = false;
			return false;
		}
		else{
			$("#lname_text").hide();
		}
	}
	function e_mail(){
		if ($("#user_email").val().length == "") {
			$("#e_text").show().html($("#user_email").attr("name") + " Field is Required");
			user_email_error = false;
			return false;
		}
		else{
			$("#e_text").hide();
		}
	}
	function phone_number(){
		if ($("#p_number").val().length == "") {
			$("#phone_text").show().html($("#p_number").attr("name") + " Field is Required");
		}else if ($("#p_number").val().length < 10 || $("#p_number").val().length < 10) {
			$("#phone_text").show().html("characters must be 10");
			p_number_error= false;
			return false;
		}
		else{
			$("#phone_text").hide();
		}
	}
	function address(){
		if ($("#address").val().length == "") {
			$("#address_text").show().html($("#address").attr("name") + " Field is Required");
		}else if ($("#address").val().length < 15) {
			$("#address_text").show().html("characters must be 15");
			address_error = false;
			return false;
		}
		else{
			$("#address_text").hide();
		}
	}
	function country(){
		if ($("#country").val().length == "") {
			$("#country_text").show().html($("#country").attr("name") + " Field is Required");
			country_error = false;
			return false;
		}
		else{
			$("#country_text").hide();
		}
	}
	function gender(){
		if ($('input[name="exampleRadios"]:checked').length === 0) {
			$("#gender_text").show().html("Please Select Your Gender");
			gender_error = false;
			return false;
		}
		else{
			$("#gender_text").hide();
		}
	} 
	function hobbies(){
		if ($('input[name="exampleCheck"]:checked').length < 3) {
			$("#hobbies_text").show().html("Please select minimum 3 hobbies");
			hobbies_error = false;
			return false;

		}
		else{
			$("#hobbies_text").hide();
		}
	}
	function password_text(){
		if ($("#password").val().length == "") {
			$("#password_text").show().html($("#password").attr("name") + " Field is Required");
		}else if ($("#password").val().length < 9 || $("#password").val().length > 13){
			$("#password_text").show().html("Please write password 9 to 13 number");
			password_error = false;
			return false;
		}
		else{
			$("#password_text").hide();
		}
	}
	function confirm_password_text(){
		if ($("#confirm_password").val().length == "") {
			$("#confirm_password_text").show().html($("#confirm_password").attr("name") + " Field is Required");
		}else if ($("#confirm_password").val().length < 9 || $("#confirm_password").val().length > 13){
			$("#confirm_password_text").show().html("Please write password 9 to 13 number");
			confirm_password_error = false;
			return false;
		}
		else{
			$("#confirm_password_text").hide();
		}
	}
	function match_funtion(){
		var password = $("#password").val();
		var confirm_password = $("#confirm_password").val();
		if (password !== confirm_password) {
			$("#password_text1").show().html("password is not match");
			match_password = false;
			return false;
		}
		else{
			$("#password_text1").hide();
		}
	}
	$("#submit").click(function(){
		fname_error = true;
		lname_error = true;
		user_email_error = true;	
		p_number_error= true;
		address_error = true;
		country_error = true;
		gender_error = true;
		hobbies_error = true;
		password_error = true;
		confirm_password_error = true;
		match_password = true;

		var fname = $("#fname").val();
		var lname = $("#lname").val();
		var user_email = $("#user_email").val();	
		var p_number= $("#p_number").val();
		var address_val = $("#address").val();
		var country_val = $("#country").val();
		var gender_val = $('input[name="exampleRadios"]:checked').val();
		var hobbies_val = [];
            $('input[name="exampleCheck"]:checked').each(function(){            
                hobbies_val.push($(this).val());
            });
		var password_val = $("#password").val();
		var confirm_password_val= $("#confirm_password").val();

		first_name();
		last_name();
		e_mail();
		phone_number();
		address();
		country();
		gender();
		hobbies();
		password_text();
		confirm_password_text();
		match_funtion();

		if ((fname_error == true) && (lname_error == true) && (user_email_error == true) && (p_number_error == true) && (address_error == true) &&
		    (country_error == true) && (gender_error == true) && (hobbies_error == true) && (password_error == true) &&
		    (confirm_password_error == true) && (match_password == true) ) {
			console.log(fname_error);
			console.log(hobbies_error);
			var main = $("#get_value").html("");
			$("#only_get").removeClass("blue");
			$("#full_name").html("<span> Full Name </span>" + " : " + fname);
			$("#last_name").html("<span> last Name </span>" + " : " + lname);
			$("#user_id").html("<span> Email Id </span>" + " : " + user_email);
			$("#phone").html("<span> Phone Number </span>" + " : " + p_number);
			$("#house").html("<span> Address </span>" + " : " + address_val);
			$("#country_name").html("<span> Country </span>" + " : " + country_val);
			$("#gender_name").html("<span> Gender </span>" + " : " + gender_val);
			$("#hobbies_name").html("<span> Hobbies </span>" + " : " + hobbies_val.join(", "));
			$("#main_password").html("<span> Password </span>" + " : " + password_val);
			$("#confirm_main_pass").html("<span> Confirm password </span>" + " : " + confirm_password_val);
			$("#only_get").fadeOut(1000);
			$("#only_get").fadeIn(4000);
			$("#only_get").focusin();
			
			console.log(main);
			return false;
		}else{
			$("#get_value").html("<p style='color:red'>Upper Field Is Required</p>");
			$("#only_get").hide();
			console.log("get_value");
			console.log(fname_error);
			console.log(hobbies_error);
			return false;
		}
	});
});
