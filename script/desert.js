$(function () {

   function scrollStatus() {
      if (window.innerWidth <= 430 && getComputedStyle(document.querySelector('body'), null).overflow === 'auto') {
         document.querySelector('body').style.overflow = 'hidden'
      } else document.querySelector('body').style.overflow = 'auto'
   }

   $('.burger').on('click', function (e) {
      e.preventDefault()
      $(this).toggleClass('burger--active')
      $('.header-top__nav').toggleClass('header-top__nav--active')
      $('.overlay').fadeToggle()
      scrollStatus()
      
   })
   $('.overlay').on('click', function () {
      $('.overlay').fadeToggle()
      $('.burger').toggleClass('burger--active')
      $('.header-top__nav').toggleClass('header-top__nav--active')
   })

   $(".header-top__nav-link").on("click", function (e) {
      scrollStatus()
      e.preventDefault();
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      if ($(window).width() <= 750) {
         $('.header-top__nav').toggleClass('header-top__nav--active')
         $('.overlay').fadeToggle('fast')
         $('.burger').toggleClass('burger--active')
      }
      return false;
   });
   $(".footer__nav-link").on("click", function (e) {
      e.preventDefault();
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      return false;
   });

   $('.tours__item-1').hover(function () {
      $('.tours__item-title-1').toggleClass('tours__item-title-active');
      $('.tours__item-text-1').toggleClass('tours__item-text-active');
   })
   $('.tours__item-2').hover(function () {
      $('.tours__item-title-2').toggleClass('tours__item-title-active');
      $('.tours__item-text-2').toggleClass('tours__item-text-active');
   })
   $('.tours__item-3').hover(function () {
      $('.tours__item-title-3').toggleClass('tours__item-title-active');
      $('.tours__item-text-3').toggleClass('tours__item-text-active');
   })
   $('.tours__item-4').hover(function () {
      $('.tours__item-title-4').toggleClass('tours__item-title-active');
      $('.tours__item-text-4').toggleClass('tours__item-text-active');
   });


   $('.carousel__slider').slick({
      arrows: false,
      dots: false,
      slidesToShow: 3,
      infinite: true,
      draggable: true,
      variableWidth: true,
      centerMode: true,
   });


   $('.blog__item-1').on('click', function (e) {
      e.preventDefault()
      $(this).addClass('blog__item-active');
      $('.blog__item-date-1').addClass('blog__date-active');
      $('.blog__item-text-1').addClass('blog__text-active');
      $('.blog__content').fadeOut();
      $('.blog__content-1').fadeIn();

      if ($('.blog__item-2').hasClass('blog__item-active')) {
         $('.blog__item-2').removeClass('blog__item-active');
         $('.blog__item-date-2').removeClass('blog__date-active');
         $('.blog__item-text-2').removeClass('blog__text-active');
      };
      if ($('.blog__item-3').hasClass('blog__item-active')) {
         $('.blog__item-3').removeClass('blog__item-active');
         $('.blog__item-date-3').removeClass('blog__date-active');
         $('.blog__item-text-3').removeClass('blog__text-active');
      };
      if ($('.blog__item-4').hasClass('blog__item-active')) {
         $('.blog__item-4').removeClass('blog__item-active');
         $('.blog__item-date-4').removeClass('blog__date-active');
         $('.blog__item-text-4').removeClass('blog__text-active');
      };


   });
   $('.blog__item-2').on('click', function (e) {
      e.preventDefault()
      $(this).addClass('blog__item-active');
      $('.blog__item-date-2').addClass('blog__date-active');
      $('.blog__item-text-2').addClass('blog__text-active');
      $('.blog__content').fadeOut();
      $('.blog__content-2').fadeIn();

      if ($('.blog__item-1').hasClass('blog__item-active')) {
         $('.blog__item-1').removeClass('blog__item-active');
         $('.blog__item-date-1').removeClass('blog__date-active');
         $('.blog__item-text-1').removeClass('blog__text-active');
      };
      if ($('.blog__item-3').hasClass('blog__item-active')) {
         $('.blog__item-3').removeClass('blog__item-active');
         $('.blog__item-date-3').removeClass('blog__date-active');
         $('.blog__item-text-3').removeClass('blog__text-active');
      };
      if ($('.blog__item-4').hasClass('blog__item-active')) {
         $('.blog__item-4').removeClass('blog__item-active');
         $('.blog__item-date-4').removeClass('blog__date-active');
         $('.blog__item-text-4').removeClass('blog__text-active');
      };
   });
   $('.blog__item-3').on('click', function (e) {
      e.preventDefault()
      $(this).addClass('blog__item-active');
      $('.blog__item-date-3').addClass('blog__date-active');
      $('.blog__item-text-3').addClass('blog__text-active');
      $('.blog__content').fadeOut();
      $('.blog__content-3').fadeIn();

      if ($('.blog__item-1').hasClass('blog__item-active')) {
         $('.blog__item-1').removeClass('blog__item-active');
         $('.blog__item-date-1').removeClass('blog__date-active');
         $('.blog__item-text-1').removeClass('blog__text-active');
      };
      if ($('.blog__item-2').hasClass('blog__item-active')) {
         $('.blog__item-2').removeClass('blog__item-active');
         $('.blog__item-date-2').removeClass('blog__date-active');
         $('.blog__item-text-2').removeClass('blog__text-active');
      };
      if ($('.blog__item-4').hasClass('blog__item-active')) {
         $('.blog__item-4').removeClass('blog__item-active');
         $('.blog__item-date-4').removeClass('blog__date-active');
         $('.blog__item-text-4').removeClass('blog__text-active');
      };
   });
   $('.blog__item-4').on('click', function (e) {
      e.preventDefault()
      $(this).addClass('blog__item-active');
      $('.blog__item-date-4').addClass('blog__date-active');
      $('.blog__item-text-4').addClass('blog__text-active');
      $('.blog__content').fadeOut();
      $('.blog__content-4').fadeIn();


      if ($('.blog__item-1').hasClass('blog__item-active')) {
         $('.blog__item-1').removeClass('blog__item-active');
         $('.blog__item-date-1').removeClass('blog__date-active');
         $('.blog__item-text-1').removeClass('blog__text-active');
      };
      if ($('.blog__item-2').hasClass('blog__item-active')) {
         $('.blog__item-2').removeClass('blog__item-active');
         $('.blog__item-date-2').removeClass('blog__date-active');
         $('.blog__item-text-2').removeClass('blog__text-active');
      };
      if ($('.blog__item-3').hasClass('blog__item-active')) {
         $('.blog__item-3').removeClass('blog__item-active');
         $('.blog__item-date-3').removeClass('blog__date-active');
         $('.blog__item-text-3').removeClass('blog__text-active');
      };
   });
});
