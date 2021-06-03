
  $(document).ready(function() {


    /**
     * script for the the menu hamburger animation
     * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
     *
     * @private
     * @author Todd Motto
     * @link https://github.com/toddmotto/foreach
     * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
     * @callback requestCallback      callback   - Callback function for each iteration.
     * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
     * @returns {}
     **/
    var forEach = function(t, o, r) {
      if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
      else
        for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
    };
    // hamburger menu animation
    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }

    // run locomotive scroll
    window.addEventListener("load", function(event) {
      const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true
      });
    });


    // copy selected language value to the dropdown toggler
    function showLanguageOption(item) {
      document.getElementById("dropdownLanguageOption").innerHTML = item.innerHTML;
    }

    // Initiate OurTeam carousel
    function fnSwiperOurTeam() {

      var swiperOurTeam = new Swiper("#swiperOurTeam", {
        slidesPerView: 2,
        spaceBetween: 0,

        // Optional parameters
        loop: true,

        // Navigation arrows
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
        }
      }); /* END Swiper script */
    } //fnSwiperOurTeam

    // Initiate Testimonials carousel
    function fnSwiperTestimonials() {

      var swiperTestimonials = new Swiper("#swiperTestimonials", {
        slidesPerView: 1,
        spaceBetween: 0,

        // Optional parameters
        loop: true,

        // Navigation arrows
        navigation: {
          nextEl: "#swiperTestimonials-next",
          prevEl: "#swiperTestimonials-prev",
        },

      }); /* END Swiper script */
    } //fnSwiperOurTeam


    fnSwiperOurTeam();
    fnSwiperTestimonials();

    // run a preloader gif while waiting for the page to load
    setTimeout(function(){
      $("body").removeClass("is-loading");
      $("#preloadingMask").fadeOut();
    }, 2000);

  });
