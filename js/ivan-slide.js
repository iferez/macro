document.addEventListener("DOMContentLoaded", function () {
    function verifySlider() {
      var wrapper = document.getElementById("slider-promo");
      var sliderOn = (wrapper && wrapper.children.length > 4) || window.innerWidth < 996;
  
      if (sliderOn) {
        wrapper.classList.add("convert-slider");
        activateSlider();
      } else {
        var sliderState = wrapper.classList.contains("slick-initialized");
        if (sliderState) {
          $("#slider-promo").slick("unslick");
          wrapper.classList.remove("convert-slider");
        }
      }
    }
  
    function activateSlider() {
      var sliderState = document
        .getElementById("slider-promo")
        .classList.contains("slick-initialized");
      if (!sliderState) {
        $("#slider-promo").slick({
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
  
    verifySlider();
    window.addEventListener("resize", verifySlider);
  });