import header from "./header.js";
import home from "./home.js";
import footer from "./footer.js";
import food from "./food.js";
import diserts from "./diserts.js";
import drinks from "./drinks.js";

function loadHomePage() {
  header();
  home();
  footer();
}
function loadHomePageInfo() {
  home();
  footer();
}
function loadFoodPage() {
  food();
}
function loadDisertsPage() {
  diserts();
}
function loadDrinksPage() {
  drinks();
}

export { loadHomePage, loadFoodPage, loadDisertsPage, loadDrinksPage, loadHomePageInfo };
