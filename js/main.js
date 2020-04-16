'use strict';

(function () {
  var scrollBtn = document.querySelector('.first-screen__btn');
  var membership = document.querySelector('.membership');

  // Табы

  var tab = function () {
    var chooseTab = document.querySelectorAll('.membership__item');
    var tabContent = document.querySelectorAll('.tab');
    var tabName;

    chooseTab.forEach(function (item) {
      item.addEventListener('click', selectTabNav);
    });

    /** @this selectTabNav */
    function selectTabNav() {
      chooseTab.forEach(function (item) {
        item.classList.remove('active');
      });

      this.classList.add('active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
    }

    function selectTabContent() {
      tabContent.forEach(function (item) {
        var result = item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
        return (result);
      });
    }
  };

  tab();

  // Скролл

  if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
      window.scrollBy({top: (membership.offsetTop - window.pageYOffset), left: 0, behavior: 'smooth'});
    });
  }


})();

'use strict';
/* eslint-disable */

(function () {
  (function ($) {
    $('.coaches__slider').slick({
      arrows: true,
      infinite: true,
      adaptiveHeight: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      waitForAnimate: false,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          }
        },
      ],
    });

    $('.review__slider').slick({
      arrows: true,
      infinite: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      waitForAnimate: false,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ],
    });
  })(jQuery);

  //  Маска номера телефона

  var phoneFormInput = document.querySelector('#user-phone');
  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };

  var maskForm = IMask(phoneFormInput, maskOptions);
})();
