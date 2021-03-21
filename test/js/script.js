
$(document).ready(function () {
  $(".our-partners").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });
});

$(document).ready(function () {
  $(".our-feedbacks").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      760: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

});