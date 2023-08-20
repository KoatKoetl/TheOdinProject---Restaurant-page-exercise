import createCard from "./cards.js";

// Import all images at once
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context("./", false, /\.(png|jpe?g|svg)$/));

const itemGrid = document.createElement("div");
itemGrid.setAttribute("id", "itemGrid");

// Array with all food and prices
const items = [
  createCard("Hamburger", "20$"),
  createCard("Pizza", "15$"),
  createCard("Salad", "5$"),
  createCard("Soup", "10$"),
  createCard("Crabs", "30$"),
  createCard("Chicken", "40$"),
  createCard("Borsch", "15$"),
  createCard("HotDog", "5$"),
];

const pageTitle = document.createElement("h1");
pageTitle.classList.add("pageTitle");
pageTitle.textContent = "Food Menu";

// Cycle to create a card for every type of food
items.forEach((type) => {
  const itemCard = document.createElement("div");
  itemCard.setAttribute("id", "itemCard");

  const itemImage = document.createElement("div");
  itemImage.classList.add("itemImage");
  itemImage.classList.add(`${type.title}`);

  const itemTitle = document.createElement("h2");
  itemTitle.classList.add("itemTitle");

  const itemPrice = document.createElement("div");
  itemPrice.classList.add("itemPrice");

  itemTitle.textContent = type.title;
  itemPrice.textContent = "Price: " + type.price;

  itemCard.appendChild(itemImage);
  itemCard.appendChild(itemTitle);
  itemCard.appendChild(itemPrice);

  itemGrid.appendChild(itemCard);
});

export default function loadFoodPage() {
  const main = document.getElementById("main");
  main.className = "foodPage";
  main.replaceChildren();

  main.appendChild(pageTitle);
  main.appendChild(itemGrid);
}
