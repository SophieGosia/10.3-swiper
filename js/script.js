$(document).ready(function () {
  var $swiper = $('#swiper');
  var $slides = $swiper.find('.swiper__slides');
  var $slideList = $swiper.find('.swiper__slide');

  // Pobieram wielkość swipera
  var swiperWidth = $swiper.outerWidth();
  // Zmienna obecnej pozycji i ilośc slajdów
  var slidesCounter = $slideList.length;
  var currentSwipe = 0;

  // Zmiana slajdów

  /*function changeSlide() {
  	$swiper.animate({'marginLeft':$('img').width()}, 500, moveFirstSlide);
  }

  setInterval(changeSlide, 3000);

  function moveFirstSlide() {
  	var $firstSlide = $swiper.find(".swiper__slide:first");
  	var $lastSlide = $swiper.find(".swiper__slide:last");
  	$lastSlide.after($firstSlide);
  	$swiper.css({marginLeft:0});
  } */

  // Ustawiam wszystkim pojedynczym wielkość jak swipera
  $slideList.each(function () {
    $(this).width(swiperWidth);
  });

  // Tworze kulki
  for (var i = 0; i < slidesCounter; i++) {
    $('<div />', {
      class: 'swiper__bullet'
    }).bind('click', function () {
      console.log('Bullet click', i);
      translate(i);
    }).appendTo('#swiper-bullets');
  }

  // Zapinam akcje przesuwania
  $('#swiper-prev').on('click', movePrev);
  $('#swiper-next').on('click', moveNext);

  function movePrev() {
    if (currentSwipe === 0) {
      console.log('First slide we cannot go below 0');
      return;
    }
    // Zmniejsz obecny slajd o jeden
    currentSwipe--;
    translate(currentSwipe);
  }

  function moveNext() {
    if (currentSwipe === slidesCounter - 1) {
      console.log('Last slide');
      return;
    }
    currentSwipe++;
    translate(currentSwipe);
  }

  function translate(currentSwipe) {
    var offset = currentSwipe * swiperWidth;
    console.log('Translate to slide', currentSwipe);
    $slides.css({
      transform: `translate3d(-${offset}px, 0, 0)`
    });
  }

});
