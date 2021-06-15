$(document).ready(function () {
  /* ForEach
     @author Todd Motto
     @link https://github.com/toddmotto/foreach */
  var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
  };

  // Init hamburger menu animation
  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
      hamburger.addEventListener(
        "click",
        function () {
          this.classList.toggle("is-active");
        },
        false
      );
    });
  }

  // Init Locomotive Scroll
  /*
    window.addEventListener("load", function (event) {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
  });
  */

  // Init OurTeam Carousel
  const swiperOurTeam = new Swiper("#swiperOurTeam", {
    slidesPerView: 2,
    spaceBetween: 0,
    loop: true, // optional
    // navigation arrows
    navigation: {
      nextEl: "#swiperOurTeam-next",
      prevEl: "#swiperOurTeam-prev",
    },

    // responsive breakpoint
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
    },
  });

  // Initiate Testimonials Carousel
  const swiperTestimonials = new Swiper("#swiperTestimonials", {
    slidesPerView: 1,
    spaceBetween: 0,

    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: "#swiperTestimonials-next",
      prevEl: "#swiperTestimonials-prev",
    },
  });

  // Preloader gif while waiting page to load
  /*
  setTimeout(function () {
    $("body").removeClass("is-loading");
    $("#preloadingMask").fadeOut();
  }, 2000);
  */

  // Init ModalVideo
  new ModalVideo(".btn-ver-video")
});
