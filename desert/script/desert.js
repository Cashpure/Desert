$(function () {

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
      // centerPadding: '302px',
      // appendArrows: $('.testimonials__slider-arrows'),
      // responsive: 
      //    [
      //       {
      //          breakpoint: 1238,
      //          settings: {
      //             slidesToShow: 1,
      //             dots: true
      //          }
      //       }
      //    ]
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
      $("a[href*='#']").on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      e.preventDefault();
      return false;
   });

   // setInterval(() => {
   //    if ($('.blog__item').hasClass('blog__item-active')) {

   //    } else {
   //       $('.blog__content').fadeOut()
   //    }
   // }, 0);


});
