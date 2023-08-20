// Get and create all Parent elements
const content = document.getElementById("content");
const header = document.createElement("header");
header.setAttribute("id", "header");

// Add 2 parts of header parent
const logo = document.createElement("div");
logo.classList.add("logo");
logo.textContent = "Foody";
const menu = document.createElement("ul");
menu.classList.add("menu");

// Add to menu all links to pages
const homePage = document.createElement("li");
const homePageLink = document.createElement("a");
homePageLink.setAttribute("href", "#");
homePageLink.setAttribute("id", "homePageBtn");
homePageLink.textContent = "Home";
const food = document.createElement("li");
const foodLink = document.createElement("a");
foodLink.setAttribute("href", "#");
foodLink.setAttribute("id", "foodPageBtn");
foodLink.textContent = "Food";
const diserts = document.createElement("li");
const disertsLink = document.createElement("a");
disertsLink.setAttribute("href", "#");
disertsLink.setAttribute("id", "disertsPageBtn");
disertsLink.textContent = "Diserts";
const drinks = document.createElement("li");
const drinksLink = document.createElement("a");
drinksLink.setAttribute("href", "#");
drinksLink.setAttribute("id", "drinksPageBtn");
drinksLink.textContent = "Drinks";

export default function addHeader() {
  // Append all needed elements to DOM
  homePage.appendChild(homePageLink);
  food.appendChild(foodLink);
  diserts.appendChild(disertsLink);
  drinks.appendChild(drinksLink);

  menu.append(homePage, food, diserts, drinks);

  header.append(logo, menu);

  content.appendChild(header);
}
