// toggle class active
const navbarClass = document.querySelector(".navbar-class");

// ketika menu hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarClass.classList.toggle("active");
};

// ketika mouse mengclik di luar side bar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarClass.contains(e.target)) {
    navbarClass.classList.remove("active");
  }
});
