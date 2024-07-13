document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuBtnOpen = document.querySelector(".menu-btn-open");
  const menuBtnClose = document.querySelector(".menu-btn-close");

  const openMenu = () => {
    mobileMenu.classList.remove("is-hidden");
    mobileMenu.classList.add("is-open");
    document.body.classList.add("is-scroll-disabled");
  };

  const closeMenu = () => {
    mobileMenu.classList.remove("is-open"); // Убираем класс для закрытия с анимацией
    setTimeout(() => {
      mobileMenu.classList.add("is-hidden"); // Скрываем меню после задержки
      document.body.classList.remove("is-scroll-disabled");
    }, 300); // Задержка должна соответствовать времени анимации
  };

  menuBtnOpen.addEventListener("click", openMenu);
  menuBtnClose.addEventListener("click", closeMenu);
});
