import photo from "./photo.jpg";
// Get main container
const content = document.getElementById("content");

// Add new container to store home page
const homePage = document.createElement("div");
homePage.setAttribute("id", "main");

// Add image element to store photo of restaurant
const myPhoto = new Image();
myPhoto.classList.add("restaurantOutside");
myPhoto.setAttribute("width", "900");
myPhoto.src = photo;

// Add info container with info about restaurant
const infoContainer = document.createElement("div");
infoContainer.classList.add("info");
const firstParagraph = document.createElement("p");
firstParagraph.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus iaculis enim vitae blandit. Vestibulum at malesuada ligula, a posuere odio. Aliquam rutrum at nisi ut blandit. Nullam fermentum, enim vel sagittis feugiat, lacus elit tincidunt turpis, sed vestibulum felis magna vel sem. Vestibulum faucibus justo massa, quis dictum massa cursus nec. Nam aliquet orci vel elementum cursus.";
const secondParagraph = document.createElement("p");
secondParagraph.textContent =
  "Proin sed egestas nisl, et pulvinar eros. Mauris diam neque, porta a fermentum ultrices, suscipit sed justo. Mauris bibendum dui purus. Proin vel pulvinar tellus. Vestibulum ac dolor in nibh accumsan mattis eget id sapien. Sed non porta mauris, nec elementum nisl. Proin dignissim eu tortor id pellentesque.";
const aboutUs = document.createElement("h1");
aboutUs.textContent = "About us";

export default function addHomePage() {
  homePage.className = "homePage";
  homePage.replaceChildren();

  homePage.appendChild(myPhoto);

  // Append all needed to main page
  infoContainer.appendChild(aboutUs);
  infoContainer.appendChild(firstParagraph);
  infoContainer.appendChild(secondParagraph);

  homePage.appendChild(infoContainer);

  content.appendChild(homePage);
}
