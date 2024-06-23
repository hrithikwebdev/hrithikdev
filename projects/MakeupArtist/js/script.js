var swiper = new Swiper(".slide-container", {
    slidesPerView: 3,
    spaceBetween: 20,
    sliderPerGroup: 3,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
  });


  // slide-container 2


  var swiper = new Swiper(".slide-container-2", {
    autoplay: {
      duration: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 20,
    sliderPerGroup: 3,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    //   dynamicBullets: false,
    // },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
  });

  // testimonial slider 


  var swiper = new Swiper(".slide-container-single", {
    autoplay: {
      duration: 8000,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    sliderPerGroup: 1,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      1000: {
        slidesPerView: 1,
      },
    },
  });