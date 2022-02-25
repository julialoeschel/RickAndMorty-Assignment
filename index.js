const characters = fetchData();
const container = document.querySelector("[data-js=container]");
const nextButton = document.querySelector("[data-js=next-button]");

function renderCards(Fetch) {
  const characterss = Fetch.results;

  characterss.forEach((character) => {
    const cardListItem = document.createElement("li");
    cardListItem.className = "cardListItem";
    cardListItem.innerHTML = `
    <h2>${character.name}</h2>
    <img src="${character.image}" alt="avatar">
    <div class="card___information">
    <span>${character.species}</span>
    <span class="card__status"> status : ${
      character.status == "Alive"
        ? `<div class="alive"></div>`
        : `${
            character.status == "Dead"
              ? `<div class="dead"></div>`
              : `<div class="unknown"></div>`
          }`
    }</span>
    </div>
    `;
    container.append(cardListItem);
  });

  nextButton.addEventListener("click", () => {
    fetch(Fetch.info.next)
      .then((response) => response.json())
      .then((data) => renderCards(data))
      .catch((error) => console.log(error));
  });
}

function fetchData() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      renderCards(data);
    })
    .catch((error) => console.log(error));
}
