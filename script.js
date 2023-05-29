//RESPONSIVE NAVBAR
const mainNav = document.getElementById("js-menu");
const navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active-nav");
});

mainNav.addEventListener("click", function () {
  mainNav.classList.remove("active-nav");
});
