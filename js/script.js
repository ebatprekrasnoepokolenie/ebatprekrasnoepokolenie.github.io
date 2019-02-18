$(document).ready(function () {
  var $link = $('.menu-item a')

  $link.click(function (e) {
    e.preventDefault()

    $link.removeClass('active')
    var id = $(this).addClass('active').attr('href')
    var target = $(id).offset().top - 20

    $('html,body').animate({
      scrollTop: target
    }, 1000)
  })
  $(window).scroll(function () {
    var scroll = $(this).scrollTop()

    $link.each(function () {
      var attr = $(this).attr('href')
      var selector = $(attr).offset().top - 20

      if (scroll >= selector) {
        $link.removeClass('active')
        $(this).addClass('active')
      }
    })
  })

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '60px'
  });

  var $burger = $('.burger')
  var $close = $('.close')

  $burger.click(function () {
    $menu.addClass('active-menu');
    $close.show();
    $menuTop.removeClass('fixed');
  });
  $close.click(function (e) {
    e.preventDefault();
    $menu.removeClass('active-menu');
    $close.hide();
    $menuTop.addClass('fixed');
  });
});