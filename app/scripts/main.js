window.addEventListener("load", function () {
  const toggle = document.querySelector(".header-bar");
  const menu = document.querySelector(".navigation-primary");
  const closeMenuMobile = this.document.querySelector(
    ".navigation-primary__header-ic"
  );

  toggle && toggle.addEventListener("click", handleToggleMenu);
  function handleToggleMenu(e) {
    menu && menu.classList.add("is-show");
  }
  closeMenuMobile &&
    closeMenuMobile.addEventListener("click", handleClickReMoveMenu);
  function handleClickReMoveMenu(e) {
    menu && menu.classList.remove("is-show");
  }
  document.addEventListener("click", handleClickOutside);
  function handleClickOutside(e) {
    if (
      e.target.matches(".header-bar") ||
      e.target.matches(".navigation-primary, .navigation-primary *")
    )
      return;
    menu && menu.classList.remove("is-show");
  }
});
