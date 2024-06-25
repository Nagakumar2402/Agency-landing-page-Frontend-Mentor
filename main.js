import "./src/style/modern-normalize.css";
import "./src/style/style.css";
import "./src/style/components/header.css";
import "./src/style/components/hero.css";
import "./src/style/components/feature.css";
import "./src/style/components/testimonials.css";
import "./src/style/components/gallery.css";
import "./src/style/components/footer.css";
import "./src/style/components/mobile-nav.css";
import "./src/style/utils.css";

const hamburgerMenu = document.querySelector(".mobile__bar"),
  mobileMenu = document.querySelector(".mobile__menu");

hamburgerMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
