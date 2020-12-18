const baseURL = "https://rickandmortyapi.com/api/character/";

function fetchCharacterInfo() {
  fetch(baseURL)
    .then((res) => res.json())
    .then((json) => console.log(json));
}

fetchCharacterInfo();
