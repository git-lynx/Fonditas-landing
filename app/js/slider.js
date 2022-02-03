$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: false,
    appendArrows:$(".slider-buttons"),
    prevArrow:$(".prev-btn"),
    nextArrow:$(".next-btn"),
    responsive: [ 
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });
});