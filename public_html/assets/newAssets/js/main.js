var coinbitltd = coinbitltd || {};
coinbitltd.global = coinbitltd.global || {};
coinbitltd.global.init = function () {
  try {
    $(document).on("click", '[href="#"]', function (e) {
      e.preventDefault();
    });
    window.rippler = $.ripple('[data-ripple="ripple"], .area', {
      debug: true,
      multi: true,
    });

    $(".ziehharmonika").ziehharmonika({
      collapsible: true,
      // prefix: "★"
    });

    $(".ziehharmonika h3:eq(0)").ziehharmonika("open", true);
  } catch (e) {
    console.log("Error on coinbitltd.global.init " + e);
  }
};

coinbitltd.slides = coinbitltd.slides || {};
coinbitltd.slides.init = () => {
  try {
    $(".sliders").owlCarousel({
      loop: true,
      items: 1,
      margin: 0,
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 6000,
      //autoplayHoverPause: true,
      navText: [
        "<i class='fas fa-angle-right'></i>",
        "<i class='fas fa-angle-left'></i>",
      ],
      rtl: true,
      nav: true,
      dots: false,
    });

    $(".carousels").owlCarousel({
      loop: true,
      margin: 30,
      smartSpeed: 600,
      autoplay: true,
      autoplayTimeout: 5000,
      rtl: true,
      nav: true,
      dots: true,
      responsiveClass: true,
      navText: [
        "<i class='fas fa-angle-right'></i>",
        "<i class='fas fa-angle-left'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 2,
        },
        1200: {
          items: 3,
        },
        1600: {
          items: 4,
        },
      },
    });
  } catch (e) {
    console.log("Error on coinbitltd.slides.init " + e);
  }
};

coinbitltd.menu = coinbitltd.menu || {};
coinbitltd.menu.init = function () {
  try {
    var openMenuBtn = document.getElementById("open-menu");
    var menuAside = document.querySelector("header .menu-aside");
    var headerOveral = document.querySelector("header .overal");

    openMenuBtn.addEventListener("click", function () {
      headerOveral.classList.add("show");
      menuAside.classList.add("show");
    });

    headerOveral.addEventListener("click", function () {
      headerOveral.classList.remove("show");
      menuAside.classList.remove("show");
    });

    // liMenu.on('click', function() {
    //   $('> ul', this).toggleClass('show');
    // })
  } catch (e) {
    console.log("Error on coinbitltd.menu.init " + e);
  }
};

coinbitltd.scrollTop = coinbitltd.scrollTop || {};
coinbitltd.scrollTop.init = function () {
  try {
    window.onscroll = function () {
      if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        document.querySelector('header .header-menu').classList.add('fixed');
      } else {
        document.querySelector('header .header-menu').classList.remove('fixed');
      }
    };
  } catch (e) {
    console.log("Error on coinbitltd.scrollTop.init " + e);
  }
};

coinbitltd.backToTop = coinbitltd.backToTop || {};
coinbitltd.backToTop.init = function () {
  try {
    var btn = $('#backToTop');

    $(window).scroll(function () {
      if ($(window).scrollTop() > 500) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 2000);
    });


  } catch (e) {
    console.log("Error on coinbitltd.backToTop.init " + e);
  }
}

coinbitltd.faqTabs = coinbitltd.faqTabs || {};
coinbitltd.faqTabs.init = function () {
  try {
    var [tabs, tabsPanels] = [
      Array.from(document.querySelectorAll(".tabs li")),
      Array.from(document.querySelectorAll(".tabs-panel"))
    ];

    tabs.forEach(function(tab) {
      tab.addEventListener("click", function() {
        var target = document.querySelector(`#${tab.dataset.target}`);
        removeActiveClass([tabs, tabsPanels]);
        tab.classList.add("active");
        target.classList.add("active");
      });
    });

    var removeActiveClass = function(el) {
      el.forEach(function(item) {
        item.find((e) => e.classList.contains("active")).classList.remove("active");
      });
    };

  } catch (e) {

  }
}

$(document).ready(function () {
  coinbitltd.global.init();
  coinbitltd.slides.init();
  coinbitltd.menu.init();
  coinbitltd.scrollTop.init();
  coinbitltd.backToTop.init();
  coinbitltd.faqTabs.init();
});
