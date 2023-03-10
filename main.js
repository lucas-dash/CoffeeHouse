// ? ------- HERO SLIDER ON LOAD-----

// const firstHero = document.querySelector(".hero-bg");
// const secondHero = document.querySelector(".second-hero");
// firstHero.classList.add("heroInvisible");

// window.addEventListener("load", () => {
//   let randomNumber = Math.ceil(Math.random() * 2);

//   if (randomNumber === 1) {
//     firstHero.classList.remove("heroInvisible");
//     secondHero.classList.add("heroInvisible");
//   } else if (randomNumber === 2) {
//     firstHero.classList.add("heroInvisible");
//     secondHero.classList.remove("heroInvisible");
//   }
// });

// ! ------ INTERSECTION OBSERVER ------

const animation_elements = document.querySelectorAll(
  '.title-scroll-up, .banner-scroll, .animate-to-left, .animate-to-right, .animation-to-up'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-on-scroll');
      }
      // else {
      //   entry.target.classList.remove('animate-on-scroll');
      // }
    });
  },
  {
    threshold: 0.3,
  }
);

for (let i = 0; i < animation_elements.length; i++) {
  const el = animation_elements[i];

  observer.observe(el);
}

// ? ------- NAVBAR -------

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.nav');

// ? onclick menu on mobile device

hamburger.addEventListener('click', function (e) {
  e.preventDefault();
  this.classList.toggle('is-active');
  navLinks.classList.toggle('active');
  navbar.classList.toggle('click');
});

// ?------ CHANGING IMAGE IN GALLERY-------

const changeImg = document.getElementById('change-image');

const imageAll = document.querySelectorAll('.gallery-image img');

imageAll.forEach(function (e) {
  e.addEventListener('click', function (e) {
    let source = e.target.src;
    changeImg.src = source;
  });
});

// ?---- CHANGE TEXT IN OPEN HOURS -----
const openText = document.querySelector('.open-situation');

let clock = {
  h: new Date().getHours(),
  m: new Date().getMinutes(),
  day: new Date().getDay(),

  onOpen: function () {
    let openDay = 'Pr??v?? otev??r??me :) Sko??te za n??mi na skv??lou k??vu!';
    return openDay;
  },

  middleDay: function () {
    let middDay =
      'P??ejeme v??m kr??sn?? odpoledne :) Zastavte se pro k??va a makronku na cestu.';
    return middDay;
  },

  beforeClose: function () {
    let befClose =
      'Zachv??li zav??r??me, ale je??t?? st??h??te k??vu sebou nebo makronku na chu??. :)';
    return befClose;
  },

  endDay: function () {
    let endOfDay = 'Bohu??el u?? m??me zav??eno. T??????me se na v??s z??tra! :)';
    return endOfDay;
  },

  saturday: function () {
    return 'M??me otev??eno. P??ejeme v??m kr??snou sobotu!';
  },

  sunday: function () {
    return 'P??ejeme p????jemnou Ned??li. Ud??lejte si j?? je??t?? hez???? s ????lkem skv??l?? k??vy! :)';
  },

  changeText: function () {
    if (this.h >= 10 && this.h <= 11 && this.m <= 59) {
      return (openText.textContent = this.onOpen());
    } else if (this.h >= 12 && this.h <= 15 && this.m <= 30) {
      return (openText.textContent = this.middleDay());
    } else if (this.h >= 15 && this.m > 30 && this.h < 16) {
      return (openText.textContent = this.beforeClose());
    } else if (this.h >= 16) {
      return (openText.textContent = this.endDay());
    }
  },
};
clock.changeText();

// todo: nastavit week

// ?--- VISIBLE NAVBAR ON SCROLL ----
const nav = document.querySelector('.nav');

nav.style.visibility = 'hidden';

window.addEventListener('scroll', () => {
  nav.style.visibility = 'visible';
});
