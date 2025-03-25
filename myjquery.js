
$(document).ready(function(){
    var fg;
    fg= function(){
            $.ajax({
                type: "GET",
                url: "text.json",
                async: false,
                contentType: "application/json",
                crossDomain: true,
                success: function (msg) {
                    console.log("resp text.json", msg);
                }
            })
        }
        
    


$("#pwd").on('blur', function () {
    var password = $(this).val();
    if (password.length < 8) {
        $('#num').show();
        return false;
    }
    else {
        $('#num').hide();
        return true;
    }
});

let emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
$('#email').on('blur', function () {
    let ep = $('#email').val();
    if (!emailpattern.test(ep)) {
        $('#emailp').show();
        return false;
    }
    else {
        $('#emailp').hide();
        return true;
    }
});

$("#pwd1").on('blur', function () {
    let pwi = $('#pwd').val();
    let cpwi = $('#pwd1').val();
    if (pwi != cpwi) {
        //alert('Re-check your password');
        $('#warn').show();
        return false;
    }
    else {
        $('#warn').hide();
        return true;

    }
});

$("#spwd").click(function () {
    if ('password' == $('#pwd').attr('type')) {
        $('#pwd').prop('type', 'text');
    } else {
        $('#pwd').prop('type', 'password');
    }
});

$("#sppwd").click(function () {
    if ('password' == $('#pwd1').attr('type')) {
        $('#pwd1').prop('type', 'text');
    } else {
        $('#pwd1').prop('type', 'password');
    }
});

$("#btn1").click(function () {
    let pwi = $('#pwd').val();
    let ep = $('#email').val();

    //var jsonData = JSON.parse(ep);

    $.post("text.json", {
        email: ep,
        pwd: pwi,
    }, function (response) {
        console.log("response ", response)
        alert("succesfully text inserted into file!");
        $("#email").val("");
        $("#pwd").val("");
    });
});

});
