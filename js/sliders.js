document.addEventListener("DOMContentLoaded", function () {
  function verifyAndActivateSliders() {
    /* Verifico si se debe activar - envio el ID del html y cuantos elementos tiene que haber para armar el slider */
    var promoSliderOn = verifySlider("slider-promo", 5);
    var stepsSliderOn = verifySlider("slider-steps", 5);

    /* Armo o desarmo el slider - envio ID - validacion - elementos a mostrar */
    toggleSlider("slider-promo", promoSliderOn);
    toggleSlider("slider-steps", stepsSliderOn);
  }

  function verifySlider(sliderId, slidesToShow) {
    var sliderWrapper = document.getElementById(sliderId);
    return (
      sliderWrapper.children.length >= slidesToShow || window.innerWidth < 996
    );
  }

  function toggleSlider(sliderId, shouldActivate) {
    var sliderWrapper = document.getElementById(sliderId);

    if (shouldActivate) {
      sliderWrapper.classList.add("convert-slider");
      initializeSlider(sliderId);
    } else {
      var isSliderInitialized =
        sliderWrapper.classList.contains("slick-initialized");
      if (isSliderInitialized) {
        $("#" + sliderId).slick("unslick");
        sliderWrapper.classList.remove("convert-slider");
      }
    }
  }

  function initializeSlider(sliderId) {
    var sliderWrapper = document.getElementById(sliderId);
    var isSliderInitialized =
      sliderWrapper.classList.contains("slick-initialized");

    if (!isSliderInitialized) {
      $("#" + sliderId).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        focusOnSelect: true,
        variableWidth: true,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 996,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
              dots: false,
            },
          },
        ],
      });
    }
  }

  /* Sirve para crear un tiempo de retraso y que no se ejecute tantas veces */
  function useDelay(func, delay) {
    let timeoutId;
    return function () {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(func, delay);
    };
  }

  window.addEventListener("resize", useDelay(verifyAndActivateSliders, 200));
  verifyAndActivateSliders();
});
