const form = document.getElementById("enquiry-form");


var i = 0;
var txt = 'Web Developer in Training!'; /* The text */
var speed = 250; /* The speed/duration of the effect in milliseconds */




function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

}
typeWriter();

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let comments = document.getElementById("comments").value;
  if (name == "" || email == "" || phone == "") {
    alert("Fields mark with * are compulsory");
    return false;
  }
 
  if (!validateEmail(email)) {
    alert("Invalid email address");
    return false;
  }
 
  if (!validatePhone(phone)) {
    alert("Invalid phone number");
    return false;
  }
 
  return true;
}

function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}
 
function validatePhone(phone) {
  let re = /^\d{11}$/;
  return re.test(phone);
}

form.addEventListener("submit", (e) =>{
  e.preventDefault();
  if (validateForm()) {
      alert("Thank you for contacting me, i will reply shortly");
      form.reset(); 
  }
});

