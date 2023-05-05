// Toggle Hamburger Menu
const hamburgerMenu = document.querySelector("#hamburger-menu");
const navList = document.querySelector(".nav-list ul");

hamburgerMenu.addEventListener("click", function () {
  navList.classList.toggle("active");
});

// Hilangkan Nav dimanapun layar di klik
document.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !navList.contains(e.target)) {
    navList.classList.remove("active");
  }
});

// Transparent Nav BG
window.onscroll = () => {
  const navbar = document.querySelector(".navbar-container");
  const fixedNav = navbar.offsetTop;

  if (window.pageYOffset > fixedNav) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
};

// Remove Anchor ID
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
