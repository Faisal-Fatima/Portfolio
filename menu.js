const hamMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.navbar');
const logo = document.getElementById("logo");


hamMenu.addEventListener('click', ()=>{
  hamMenu.classList.toggle('active');
  menu.classList.toggle('active');
  nav.classList.toggle('active');
})

logo.addEventListener("click", function(){
  document.location.href = 'index.html';
});


window.onscroll = function() {myFunction()};

var header = document.getElementById("navbar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
