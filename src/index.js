import style from "./style.css";
import { loadHomePage, loadFoodPage, loadDisertsPage, loadDrinksPage, loadHomePageInfo } from "./load.pages.js";

loadHomePage();

const homeBtn = document.getElementById("homePageBtn");
const foodBtn = document.getElementById("foodPageBtn");
const disertsBtn = document.getElementById("disertsPageBtn");
const drinksBtn = document.getElementById("drinksPageBtn");

homeBtn.addEventListener("click", () => {
  loadHomePageInfo();
});

foodBtn.addEventListener("click", () => {
  loadFoodPage();
});

disertsBtn.addEventListener("click", () => {
  loadDisertsPage();
});

drinksBtn.addEventListener("click", () => {
  loadDrinksPage();
});
