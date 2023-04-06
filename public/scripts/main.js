window.addEventListener("load", function () {
  // toggle menu mobile
  const toggle = document.querySelector(".header-bar");
  const menu = document.querySelector(".navigation-primary");
  const closeMenuMobile = document.querySelector(".navigation-primary__header-ic");
  const navigationPrimaryItem = document.querySelectorAll(".navigation-primary__link");

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
    if (e.target.matches(".header-bar") || e.target.matches(".navigation-primary, .navigation-primary *")) return;
    menu && menu.classList.remove("is-show");
  }
  // add event click toggle menu
  toggle && toggle.addEventListener("click", handleToggleMenu);
  // add event click remove menu
  closeMenuMobile && closeMenuMobile.addEventListener("click", handleClickReMoveMenu);

  // add event click handle click outside
  document.addEventListener("click", handleClickOutside);

  //Toggle navigation item
  [...navigationPrimaryItem].forEach(item => {
    item.addEventListener("click", e => {
      const subMenu = e.target.nextElementSibling;
      subMenu && subMenu.classList.toggle("is-show");
    });
  });
  const progressContent = document.querySelector(".autoplay-progress span");
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {}
  });
}); // end load document