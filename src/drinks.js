import createCard from "./cards.js";

// Import all images at once
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context("./", false, /\.(png|jpe?g|svg)$/));

const drinksGrid = document.createElement("div");
drinksGrid.setAttribute("id", "itemGrid");

// Array with all food and prices
const items = [createCard("Juice", "20$"), createCard("Coffee", "15$"), createCard("Tea", "5$"), createCard("Smoothie", "10$")];

const pageTitle = document.createElement("h1");
pageTitle.classList.add("pageTitle");
pageTitle.textContent = "Drinks Menu";

// Cycle to create a card for every type of food
items.forEach((type) => {
  const drinksCard = document.createElement("div");
  drinksCard.setAttribute("id", "itemCard");

  const drinksImage = document.createElement("div");
  drinksImage.classList.add("itemImage");
  drinksImage.classList.add(`${type.title}`);

  const drinksTitle = document.createElement("h2");
  drinksTitle.classList.add("itemTitle");

  const drinksPrice = document.createElement("div");
  drinksPrice.classList.add("itemPrice");

  drinksTitle.textContent = type.title;
  drinksPrice.textContent = "Price: " + type.price;

  drinksCard.appendChild(drinksImage);
  drinksCard.appendChild(drinksTitle);
  drinksCard.appendChild(drinksPrice);

  drinksGrid.appendChild(drinksCard);
});

export default function loadFoodPage() {
  const main = document.getElementById("main");
  main.className = "drinksPage";
  main.replaceChildren();

  main.appendChild(pageTitle);
  main.appendChild(drinksGrid);
}
