const characters = fetchData();
const Container = document.querySelector("[data-js=container]");

function renderCards(characters) {
  characters.forEach((character) => {
    console.log(character);
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
    Container.append(cardListItem);
  });
}

function fetchData() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => renderCards(data.results))
    .catch((error) => console.log(error));
}
