var btn_search_form = document.querySelector(".booking-button");
var search_form = document.querySelector(".booking-popup-form");
btn_search_form.addEventListener("click", function (evt) {
evt.preventDefault();
search_form.classList.toggle("booking-popup-none");
});
