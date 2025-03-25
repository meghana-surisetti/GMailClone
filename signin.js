function validate() {
  var e = document.getElementById('email').value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (e === "") {
    alert("Please enter an email");
    return false;  
  }
  if (!emailPattern.test(e)) {
    document.getElementById('emailp').style.display = 'block';
    return false;  
  } else {
    document.getElementById('emailp').style.display = 'none';
    window.location.href = 'password.html';
    return true;  
  }
}

function togglePassword() {
  var passwordField = document.getElementById('pwd');
  var checkbox = document.getElementById('sppwd');
  if (checkbox.checked) {
    passwordField.type = "text"; 
  } else {
    passwordField.type = "password"; 
  }
}

function vep(){
  let pwdInput = document.getElementById('pwd').value;
  var lowerCaseLetters = /[a-z]+[A-Z]+[0-9]/g;

  if(pwdInput == ""){
      document.getElementById('pmsg').style.display='block';
      return false;
    }
  else if (pwdInput.length < 8) {
    document.getElementById('pmsg').style.display='none';
    document.getElementById('emailp').style.display = 'block';
    return false;
  }
  else if (!pwdInput.match(lowerCaseLetters)) {
    document.getElementById('emailp').style.display = 'none';
    document.getElementById('lower').style.display = 'block';
    return false;
  }
  else {
    document.getElementById('emailp').style.display = 'none';
    document.getElementById('lower').style.display = 'none';
    window.location.href = 'https://mail.google.com/mail/u/0/#inbox';
    return true;
  }

}
