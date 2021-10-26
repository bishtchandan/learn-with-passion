
 const searchForm = document.querySelector('.search-form')
 const Btn = document.getElementById('searchBtn');

Btn.addEventListener('click', () => {
     searchForm.classList.toggle('active');
     navbar.classList.remove('active');
     login.classList.remove('active');
})

 const login = document.querySelector('.login-form')
 const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {
     login.classList.toggle('active');
     navbar.classList.remove('active');
     searchForm.classList.remove('active')
})

 const navbar = document.querySelector('.navbar')
 const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
     navbar.classList.toggle('active');
     login.classList.remove('active');
     searchForm.classList.remove('active')
})

window.onscroll = ()=>{
    navbar.classList.remove('active');
    login.classList.remove('active');
    searchForm.classList.remove('active');
}


var swiper = new Swiper(".course-slider", {
     loop: true,
     spaceBetween: 20,
     breakpoints: {
       640: {
         slidesPerView: 1,
       },
       0: {
         slidesPerView: 2,
       },
       1020: {
         slidesPerView: 3,
       },
     },
   });