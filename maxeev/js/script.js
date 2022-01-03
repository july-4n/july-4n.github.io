'use strict';

$(document).ready(function() {
  $('.products-slider').slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1800,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 866,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1262,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1780,
        settings: {
          slidesToShow: 4,
        }
      },
    ]
  });
});

$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 1000) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0});
    });
});

$(document).ready(function() {
  let openRules = document.querySelector(".rules-info__button");
    openRules.addEventListener("click", function () {
      let rules = document.querySelector(".rules");
      rules.classList.toggle("hidden");

      if (openRules.textContent == "Подробные правила")
          openRules.textContent = "Свернуть правила";
      else
          openRules.textContent = "Подробные правила";
  });
});
