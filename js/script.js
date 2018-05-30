$(document).ready(function () {
  const $swiper = $('#swiper');
  const $slides = $swiper.find('.swiper__slides');
  const $slideList = $swiper.find('.swiper__slide');

  // Pobieram wielkość swipera
  const swiperWidth = $swiper.outerWidth();
  // Zmienna obecnej pozycji i ilośc slajdów
  const slidesCounter = $slideList.length;
  let currentSwipe = 0;

  // Automatyczna zmiana slajdów

  function autoMove() {
    console.log('Move auto');
    if (currentSwipe === slidesCounter - 1) {
      console.log('Last slide');
      currentSwipe = 0;
    } else {
      currentSwipe++;
    }
    translate(currentSwipe);
  }
  setInterval(autoMove, 3000);

  // Ustawiam wszystkim pojedynczym wielkość jak swipera
  $slideList.each(function () {
    $(this).width(swiperWidth);
  });

  // Tworze kulki
  for (let i = 0; i < slidesCounter; i++) {
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

  function translate(position) {
    var offset = position * swiperWidth;
    console.log('Translate to slide', position);
    $slides.css({
      transform: `translate3d(-${offset}px, 0, 0)`
    });
  }

});
