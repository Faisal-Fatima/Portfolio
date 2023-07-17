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

// function validateForm() {
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let phone = document.getElementById("phone").value;
//   let comments = document.getElementById("comments").value;
//   if (name == "" || email == "" || phone == "") {
//     alert("Fields mark with * are compulsory");
//     return false;
//   }
 
//   if (!validateEmail(email)) {
//     alert("Invalid email address");
//     return false;
//   }
 
//   if (!validatePhone(phone)) {
//     alert("Invalid phone number");
//     return false;
//   }
 
//   return true;
// }

// function validateEmail(email) {
//   let re = /\S+@\S+\.\S+/;
  
//     return re.test(email) ;
//   }
 
// function validatePhone(phone) {
//   let re = /^\d{11}$/;
//   return re.test(phone);
// }

function ValidateEmail(input) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {

    // alert("Valid email address!");

    // document.form1.text1.focus();

    return true;

  } else {

    // alert("Invalid email address!");

    // document.form1.text1.focus();

    return false;

  }

}



function validation(){ 
  if(document.myform.email.value == "" ||document.myform.fname.value == ""||document.myform.lname.value == ""){ 
       document.getElementById('errors').innerHTML="It would be easier to contact you, if I have your name and valid email address.";
              
  }
  else if (!ValidateEmail(email)) {
    document.getElementById('errors').innerHTML="Please enter a valid email address.";
         
      }
else{ 

  console.log(document.myform.email.value); 
  document.getElementById('submit').value="Submitting";
  setTimeout('', 2000);
  document.getElementById('thanks').style.display = 'block';
  document.getElementById('form').style.display = 'none';
  document.getElementById('errors').style.display = 'none';
}
}



