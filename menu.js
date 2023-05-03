const hamMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const logo = document.getElementById("logo");


hamMenu.addEventListener('click', ()=>{
  hamMenu.classList.toggle('active');
  menu.classList.toggle('active');
})

logo.addEventListener("click", function(){
  document.location.href = 'index.html';
});
