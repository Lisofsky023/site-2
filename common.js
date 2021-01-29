$(document).ready(function() {
   $('.header__burger').click(function(event) {
     $('.header__burger,.header__menu').toggleClass('active');
     $('body').toggleClass('lock');
   });
});

// Swiper

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    hide: true,
  },

  effect: 'cube',
});