import createCard from "./cards.js";

// Import all images at once
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context("./", false, /\.(png|jpe?g|svg)$/));

const itemGrid = document.createElement("div");
itemGrid.setAttribute("id", "itemGrid");

// Array with all food and prices
const items = [createCard("Ice-Cream", "20$"), createCard("Sweets", "15$"), createCard("Jelly", "5$"), createCard("Cake", "10$")];

const pageTitle = document.createElement("h1");
pageTitle.classList.add("pageTitle");
pageTitle.textContent = "Diserts Menu";

// Cycle to create a card for every type of food
items.forEach((type) => {
  const itemCard = document.createElement("div");
  itemCard.setAttribute("id", "itemCard");

  const itemImage = document.createElement("div");
  itemImage.classList.add("itemImage");
  itemImage.classList.add(`${type.title}`);

  const itemTitle = document.createElement("h2");
  itemTitle.classList.add("itemTitle");

  const foodPrice = document.createElement("div");
  foodPrice.classList.add("itemPrice");

  itemTitle.textContent = type.title;
  foodPrice.textContent = "Price: " + type.price;

  itemCard.appendChild(itemImage);
  itemCard.appendChild(itemTitle);
  itemCard.appendChild(foodPrice);

  itemGrid.appendChild(itemCard);
});

export default function loadFoodPage() {
  const main = document.getElementById("main");
  main.className = "disertsPage";
  main.replaceChildren();

  main.appendChild(pageTitle);
  main.appendChild(itemGrid);
}
