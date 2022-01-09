'use strict';

$(document).ready(function () {
   $('.slider').slick({
      // autoplay: true,
      // autoplaySpeed: 2000,
      // pauseOnHover: true,
      // pauseOnFocus: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: `<button type="button" class="btn-arrow slick-prev "><span class="material-icons-outlined icon-arrow">chevron_left</span><span class="btn-label">Previous</span></button>`,
      nextArrow: `<button type="button" class="btn-arrow slick-next"><span class="btn-label">Next</span><span class="material-icons-outlined icon-arrow">chevron_right</span></button>`,
      dots: true,
      // speed: 300,
      responsive: [
         {
            breakpoint: 800,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               // arrows: false,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   });
});
