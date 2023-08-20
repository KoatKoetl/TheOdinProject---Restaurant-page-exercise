const content = document.getElementById("content");

const footer = document.createElement("footer");
footer.setAttribute("id", "footer");
footer.textContent = "Created by https://github.com/KoatKoetl";
export default function addFooter() {
  content.appendChild(footer);
}
