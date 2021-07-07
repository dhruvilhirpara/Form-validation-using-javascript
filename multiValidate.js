$(document).ready(function() {

    var current_fs, next_fs, previous_fs;
    var left, opacity, scale;
    var animating;

    function first_names() {
        var regName = /[A-Z]+[a-z]+$/;
        var first_names = $(".myform1.active .first-name").val();
        if (first_names.length == "") {
            $().show().html($(".first-name").attr("name") + " Field is Required");
        } else if (!regName.test(first_names)) {
            $(".first-text").show().html("First letter capitalize");
        } else {
            $(".first-text").hide();
        }
    }

    function last_name() {
        var regName = /[A-Z]+[a-z]+$/;
        var last_names = $(".myform1.active .last-name").val();
        if (last_names.length == "") {
            $(".last_text").show().html($(".last-name").attr("name") + " Field is Required");
        } else if (!regName.test(last_names)) {
            $(".last_text").show().html("Last Name in-valid");
        } else {
            $(".last_text").hide();
        }
    }

    function phone_number() {
        var pregex = /[0-9 -()+]+$/;
        var phone_number = $(".myform1.active .phone-number").val();
        if (phone_number.length == "") {
            $(".phone_text").show().html($(".phone-number").attr("name") + " Field is Required");
            fname_error = false;
        } else if (!pregex.test(phone_number)) {
            $(".phone_text").show().html("Phone Number Is in-valid");
            fname_error = false;
        } else if (phone_number.length < 6 || phone_number.length > 10) {
            $(".phone_text").show().html("Phone Number Minimam 6 character And Maximam 10 character");
            fname_error = false;
        } else {
            $(".phone_text").hide();
        }
    }

    function IsEmail() {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var email_id = $(".myform2.active .emilid").val();
        if (email_id.length == "") {
            $(".email_text").show().html($(".emilid").attr("name") + " Field is Required");
            fname_error = false;
        } else if (!regex.test(email_id)) {
            $(".email_text").show().html("Email id in-valid");
            fname_error = false;
        } else {
            $(".email_text").hide();
        }
    }

    function password() {
        var password_regex = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
        var password_main = $(".myform2.active .password-main").val();
        if (password_main.length == "") {
            $(".password_text").show().html($(".password-main").attr("name") + " is Required ");
            console.log("first");
            fname_error = false;
        } else if (!password_regex.test(password_main)) {
            console.log("second");
            $(".password_text").show().html("Must be at least 8 characters" + "<br>" + "At least 1 number, 1 lowercase, 1 uppercase letter" + "<br>" + "At least 1 special character from @#$%&");
            fname_error = false;
        } else {
            $(".password_text").hide();
        }
    }
    $(".show-password").change(function() {
        if ($(this).is(":checked")) {
            $(".password-main").attr("type", "text");
        } else {
            $(".password-main").attr('type', 'password');
        }
    });

    function confirm_password() {
        var password_regex = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
        var confirm_password = $(".myform2.active .confirm-password").val();
        if (confirm_password.length == "") {
            $(".confirm_password_text").show().html($(".confirm-password").attr("name") + " is Required ");
            console.log("first");
            fname_error = false;
        } else if (!password_regex.test(confirm_password)) {
            console.log("second");
            $(".confirm_password_text").show().html("Must be at least 8 characters" + "<br>" + "At least 1 number, 1 lowercase, 1 uppercase letter" + "<br>" + "At least 1 special character from @#$%&");
            fname_error = false;
        } else {
            $(".confirm_password_text").hide();
        }
    }

    function matchpassword() {
        var password_main = $(".myform2.active .password-main").val();
        var confirm_password = $(".myform2.active .confirm-password").val();
        if (password_main != confirm_password) {
            $(".match-password").show().html("Password is not Match");
            fname_error = false;
        } else {
            $(".match-password").hide();
        }
    }
    $(".next-btn").click(function(e) {
        fname_error = true;
        if ($(".myform1").hasClass('active')) {
            first_names();
            last_name();
            phone_number();
        } else if ($(".myform2").hasClass('active')) {
            IsEmail();
            password();
            confirm_password();
            matchpassword();
        }
        if (fname_error == true) {

            if ($(".form-input")) {
                $(this).parent().removeClass("active");
                $(this).parent().next().addClass("active");
            }

            if (animating) return false;
            animating = true;
            current_fs = $(this).parent();
            next_fs = $(this).parent().next();
            $(".progress-bar li").eq($("fieldset").index(next_fs)).addClass("active");
            next_fs.show();
            current_fs.hide();
            current_fs.animate({ opacity: 0 }, {
                step: function(now, mx) {
                    scale = 0.8 + (1 - now) * 0.2;
                    left = (now * 50) + "%";
                    opacity = 1 - now;
                    current_fs.css({ 'transform': 'scale(' + scale + ')' });
                    next_fs.css({ 'left': left, 'opacity': opacity });
                },
                duration: 800,
                complete: function() {
                    current_fs.hide();
                    animating = false;
                },
                easing: 'easeOutQuint'
            });
        }
    });
    $(".previous-btn").click(function() {
        if (animating) return false;
        animating = true;
        if ($(".form-input")) {
            $(this).parent().removeClass("active");
            $(this).parent().prev().addClass("active");
        }
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();
        $(".progress-bar li").eq($("fieldset").index(current_fs)).removeClass("active");
        previous_fs.show();
        current_fs.hide();
        current_fs.animate({ opacity: 0 }, {
            step: function(now, mx) {
                scale = 0.8 + (1 - now) * 0.2;
                left = ((1 - now) * 50) + "%";
                opacity = 1 - now;
                current_fs.css({ 'left': left });
                previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
            },
            duration: 800,
            complete: function() {
                current_fs.hide();
                animating = false;
            },
            easing: 'easeOutQuint'
        });
    });
});
