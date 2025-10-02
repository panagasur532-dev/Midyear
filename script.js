
const form = document.getElementById("regForm");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");


const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function(e) {
  e.preventDefault(); 

  let valid = true;

  
  if (fullname.value.trim() === "") {
    nameError.style.display = "inline";
    valid = false;
  } else {
    nameError.style.display = "none";
  }

  
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    emailError.style.display = "inline";
    valid = false;
  } else {
    emailError.style.display = "none";
  }


  if (password.value.length < 8) {
    passwordError.style.display = "inline";
    valid = false;
  } else {
    passwordError.style.display = "none";
  }

  
  if (valid) {
    alert("Registration successful!");
    form.reset();
  }
});
