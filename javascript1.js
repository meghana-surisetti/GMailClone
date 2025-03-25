/*for signin page*/
var cpInput = document.getElementById('pwd1').value;
function myV() {
  let emailInput = document.getElementById('email').value;
  let pwdInput = document.getElementById('pwd').value;

  if (emailInput == "") {
    alert("please enter email");
    return false;
  }
  else if (pwdInput == "") {
    alert('please enter password');
    return false;
  }
  else if (cpInput == "") {
    alert('please fill confirm password field');
    return false;
  }
}
function emailV() {
  let emailInput = document.getElementById('email').value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput)) {
    document.getElementById('emailp').style.display = 'block';
    return false;
  }
  else {
    document.getElementById('emailp').style.display = 'none';
  }
}

function cnfpwd() {
  let pwdInput = document.getElementById('pwd').value;
  let cpInput = document.getElementById('pwd1').value;
  if (pwdInput != cpInput) {
    document.getElementById('warn').style.display = 'block';
    return false;
  }
  else {
    document.getElementById('warn').style.display = 'none';

  }
}

function pwdV() {
  let pwdInput = document.getElementById('pwd').value;
  var lowerCaseLetters = /[a-z]+[A-Z]+[0-9]/g;

  if (pwdInput.length < 8) {
    document.getElementById('num').style.display = 'block';
    alert(pwdInput.length);
    return false;
  }
  else if (!pwdInput.match(lowerCaseLetters)) {
    document.getElementById('num').style.display = 'none';
    document.getElementById('lower').style.display = 'block';
    return false;
  }
  else {
    document.getElementById('num').style.display = 'none';
    document.getElementById('lower').style.display = 'none';
    return true;
  }
}
function myFunction() {
  var x = document.getElementById("pwd");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}