$(document).ready(function () {
  const $swiper = $('#swiper');
  const $slides = $swiper.find('.swiper__slides');
  const $slideList = $swiper.find('.swiper__slide');

  // get swiper width
  const swiperWidth = $swiper.outerWidth();
  // current position let and const with number of slides
  const slidesCounter = $slideList.length;
  let currentSwipe = 0;

  // auto slide change

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

  // set all slides width the same as swiper's
  $slideList.each(function () {
    $(this).width(swiperWidth);
  });

  // make meatballs
  for (let i = 0; i < slidesCounter; i++) {
    $('<div />', {
      class: 'swiper__bullet'
    }).bind('click', function () {
      console.log('Bullet click', i);
      translate(i);
    }).appendTo('#swiper-bullets');
  }

  // add swipe action to arrows
  $('#swiper-prev').on('click', movePrev);
  $('#swiper-next').on('click', moveNext);

  // add swiping to move back arrow
  function movePrev() {
    if (currentSwipe === 0) {
      console.log('First slide we cannot go below 0');
      return;
    }
    // go to previous slide
    currentSwipe--;
    translate(currentSwipe);
  }
  // add swiping to move forward arrow
  function moveNext() {
    if (currentSwipe === slidesCounter - 1) {
      console.log('Last slide');
      return;
    }
    // go to next slide
    currentSwipe++;
    translate(currentSwipe);
  }

  // repositioning on x axis to proper slide
  function translate(position) {
    var offset = position * swiperWidth;
    console.log('Translate to slide', position);
    $slides.css({
      transform: `translate3d(-${offset}px, 0, 0)`
    });
  }

});
