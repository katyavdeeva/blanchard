// Выпадающее меню

document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 28,
});
})

const btns = document.querySelectorAll(".header__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";
const dropdownItem = document.querySelectorAll('.dropdown__link');

btns.forEach(item => {
  item.addEventListener("click", function () {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })

  document.addEventListener("click", function (e) {
    let target = e.target;
    if (!target.closest(".header__list--bottom")) {
      document.querySelectorAll(".dropdown").forEach(el => {
        el.classList.remove("dropdown__active");
      })
      document.querySelectorAll(".header__btn").forEach(el => {
        el.classList.remove("btn__active");
      });
      document.querySelectorAll(".header__btn").forEach(el => {
        el.classList.remove("btn__active");
      });
    }
  })
});

// Слайдер
var swiper = new Swiper(".hero__swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  speed: 2000,
  effect: "fade",
  allowTouchMove: false,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }
});

var swiper = new Swiper(".gallery__swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  pagination: {
    el: ".gallery__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },
    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },

  },
});

var swiper = new Swiper(".events__swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: '.events__swiper-button-next',
  },
  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
   943: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },
    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  },

});

var swiper = new Swiper(".project__swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: '.project__swiper-button-next',
    prevEl: '.project__swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 21,
    },

    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1225: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  }

});

// Селектор
const element = document.querySelector('select');
const choices = new Choices(element, {
  silent: false,
  items: [],
  choices: [],
  searchEnabled: false,
  shouldSort: false,
  position: 'bottom',
  AllowHTML: true,
  itemSelectText: ''
});


// Аккордеон

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion__item');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      if (!e.target.classList.contains('catalog__item--top')) {
        return
      }
      const self = e.currentTarget;
      const control = self.querySelector('.catalog__item--top');
      const content = self.querySelector('.catalog__item--bottom');

      self.classList.toggle('open');

      // если открыт аккордеон
      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
});

//  скрол в каталоге

(() => {
  const MOBILE_WIDTH = 580;

  function getWindowWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  function scrollToContent(link) {
    if (getWindowWidth() > MOBILE_WIDTH) {
      return;
    }

    const href = link.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: 'smooth'
    })
  };

  // document.querySelectorAll('.js-scroll-link').forEach(link => {
  //   link.addEventListener('click', function (e) {
  //     e.preventDefault();

  //     scrollToContent(this, true);
  //   });
  // });
})();

// Табы
document.querySelectorAll('.catalog__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.catalog__btn').forEach(function (btn) {
      btn.classList.remove('catalog__btn--active')
    });
    e.currentTarget.classList.add('catalog__btn--active');
    document.querySelectorAll('.catalog__tabs').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('catalog__tabs--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tabs--active');
    scrollToContent(tabsBtn);
  });
});



// Тултип
tippy('#tooltip--1', {
  content: 'Пример современных тенденций современная методология разработки',
  placement: 'top',
  arrow: true,
  animation: 'fade',
  theme: 'color-main',
  trigger: 'focus',
  trigger: 'click',

});

tippy('#tooltip--2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  placement: 'top',
  arrow: true,
  animation: 'fade',
  theme: 'color-main',
  trigger: 'focus',
  trigger: 'click',

});

tippy('#tooltip--3', {
  content: 'В стремлении повысить качество',
  placement: 'top',
  arrow: true,
  animation: 'fade',
  theme: 'color-main',
  trigger: 'focus',
  trigger: 'click',
});

// Валидация формы
document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.contacts__form');
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  validation
    .addField('.contacts__name', [{
      rule: 'minLength',
      value: 3,
      errorMessage: "Вы не ввели имя"
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: "Вы ввели больше символов чем положено"
    }
    ])
    .addField('.contacts__tel', [{
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: "Вы не ввели телефон",
    }])
    .onSuccess((event) => {
      console.log('Validation passes and form submitted', event);

      let formData = new FormData(event.target);

      console.log(...formData);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);
      event.target.reset();
    });
});


//  Карта
ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#contacts__map');
  const myMap = new ymaps.Map(
    "contacts__map",
    {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      // geolocationControlPosition:  { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      // zoomControlSize: "small",
      zoomControlFloat: "none",
      // zoomControlPosition: { top: "120px", right: "20px" }
    }
  );

  myMap.behaviors.disable('scrollZoom');

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/metca.png',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark);
}

// бургер
const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
const header = document?.querySelector('.header--top');


burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('nav--visible');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burger?.classList.remove('burger--active');
    nav?.classList.remove('nav--visible');
  });
});


// форма поиска
let lyp = document.querySelector('.header-search--top');
let pole = document.querySelector('.header-search__contain');
let exit = document.querySelector('.header__btn-close');

lyp.addEventListener('click', function () {
  pole.classList.toggle('header__search--active');
});

exit.addEventListener('click', function (e) {
  pole.classList.remove('header__search--active');
});



//  модaльные окна
const btn = document.querySelectorAll('.gallery-slide');
const modalOverlay = document.querySelector('.gallery__modal-overlay');
const modals = document.querySelectorAll('.gallery__modal');
const modalClose = document.querySelector('.gallery__btn-close');

btn.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    body.classList.toggle('stop-scroll');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
  });
});

modalOverlay.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target == modalOverlay || e.target.closest('.gallery__btn-close')) {
    modalOverlay.classList.remove('modal-overlay--visible');
    body.classList.remove('stop-scroll');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
  }
});

