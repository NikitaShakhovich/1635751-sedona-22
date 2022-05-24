const navLink = document.querySelector(".nav__toggle");
const navModal = document.querySelector(".page-header__nav");
const ESC_KEY = 27;


navLink.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (navModal.classList.contains("opened")) {
    evt.preventDefault();
    navModal.classList.remove("opened");
  } else {
    navModal.classList.add("opened");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === ESC_KEY) {
    if (navModal.classList.contains("opened")) {
      evt.preventDefault();
      navModal.classList.remove("opened");
    }
  }
});
