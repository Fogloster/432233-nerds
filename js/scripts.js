var link = document.querySelector(".footer-button");

var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var guestname = popup.querySelector("[name=full-name]");
var guestemail = popup.querySelector("[name=e-mail]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  guestname.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!guestname.value || !guestemail.value) {
    evt.preventDefault();
    console.log("Нужно заполнить поля");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("guestname", guestname.value);
    }
}
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});