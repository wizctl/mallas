// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar')
const close = document.getElementById('close')
if(bar)
bar.addEventListener('click',()=>{
    nav.classList.add('active')
})

if(close)
close.addEventListener('click',()=>{
    nav.classList.remove('active')
})

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });