window.addEventListener("load", function () {
  // toggle menu mobile
  const toggle = document.querySelector(".header-bar");
  const menu = document.querySelector(".navigation-primary");
  const closeMenuMobile = document.querySelector(
    ".navigation-primary__header-ic"
  );

  const navigationPrimaryItem = document.querySelectorAll(
    ".navigation-primary__link"
  );

  // handle toggle menu
  function handleToggleMenu(e) {
    menu && menu.classList.add("is-show");
  }
  // handle click remove menu
  function handleClickReMoveMenu(e) {
    menu && menu.classList.remove("is-show");
  }
  // handle click outside
  function handleClickOutside(e) {
    if (
      e.target.matches(".header-bar") ||
      e.target.matches(".navigation-primary, .navigation-primary *")
    )
      return;
    menu && menu.classList.remove("is-show");
  }
  // add event click toggle menu
  toggle && toggle.addEventListener("click", handleToggleMenu);
  // add event click remove menu
  closeMenuMobile &&
    closeMenuMobile.addEventListener("click", handleClickReMoveMenu);

  // add event click handle click outside
  document.addEventListener("click", handleClickOutside);

  //Toggle navigation item
  [...navigationPrimaryItem].forEach((item) => {
    item.addEventListener("click", (e) => {
      const subMenu = e.target.nextElementSibling;
      subMenu && subMenu.classList.toggle("is-show");
    });
  });

  var swiper = new Swiper(".mySwiper", {
    speed: 600,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {},
  });
  var swiper = new Swiper(".new-arrival__mySwiper", {
    speed: 2000,
    slidesPerView: 6,
    slidesPerGroup: 6,
    spaceBetween: 30,
    // centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".new-arrival__swiper-button-next",
      prevEl: ".new-arrival__swiper-button-prev",
    },
    on: {},
  });
}); // end load document
