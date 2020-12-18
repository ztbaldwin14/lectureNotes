const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
// Charmander
fetch(baseURL)
  .then(function (charmanderResponse) {
    return charmanderResponse.json();
  })
  .then(function (json){
    console.log(json);
    displayCharmanderResults(json);
  });
function displayCharmanderResults(json) {

  let charmanderName = json.results[3].name;
  console.log(charmanderName);

  let charmanderURL = json.results[3].url;
  console.log(charmanderURL);
  document.getElementById("charmander").innerText = charmanderName;

fetch(charmanderURL)
  .then(function (answer) {
    return answer.json();
  })
  .then(function (json) {
    console.log(json);
    displayCharmanderURL(json);
  });
}
function displayCharmanderURL(json) {
  let pokemonFirstMove = json.moves[0].move.name;
  console.log(pokemonFirstMove);
  document.getElementById("charmanderFirstMove").innerText = pokemonFirstMove;

  let pokemonSecondMove = json.moves[1].move.name;
  console.log(pokemonSecondMove);
  document.getElementById("charmanderSecondMove").innerText = pokemonSecondMove;

  let pokemonThirdMove = json.moves[2].move.name;
  console.log(pokemonThirdMove);
  document.getElementById("charmanderThirdMove").innerText = pokemonThirdMove;

  let pokemonFourthMove = json.moves[3].move.name;
  console.log(pokemonFourthMove);
  document.getElementById("charmanderFourthMove").innerText = pokemonFourthMove;
}
// Charmeleon
fetch(baseURL)
  .then(function (charmeleonResponse) {
    return charmeleonResponse.json();
  })
  .then(function (json){
    console.log(json);
    displayCharmeleonResults(json);
  });
function displayCharmeleonResults(json) {

  let charmeleonName = json.results[4].name;
  console.log(charmeleonName);

  let pokemonCharmeleonURL = json.results[4].url;
  console.log(pokemonCharmeleonURL);
  document.getElementById("charmeleon").innerText = charmeleonName;

fetch(pokemonCharmeleonURL)
  .then(function (answer) {
    return answer.json();
  })
  .then(function (json) {
    console.log(json);
    displayCharmeleonURL(json);
  });
}
function displayCharmeleonURL(json) {
  let pokemonFirstMove = json.moves[4].move.name;
  console.log(pokemonFirstMove);
  document.getElementById("charmeleonFirstMove").innerText = pokemonFirstMove;

  let pokemonSecondMove = json.moves[5].move.name;
  console.log(pokemonSecondMove);
  document.getElementById("charmeleonSecondMove").innerText = pokemonSecondMove;

  let pokemonThirdMove = json.moves[6].move.name;
  console.log(pokemonThirdMove);
  document.getElementById("charmeleonThirdMove").innerText = pokemonThirdMove;

  let pokemonFourthMove = json.moves[7].move.name;
  console.log(pokemonFourthMove);
  document.getElementById("charmeleonFourthMove").innerText = pokemonFourthMove;
}
// // // Charizard
fetch(baseURL)
  .then(function (charizardResponse) {
    return charizardResponse.json();
  })
  .then(function (json){
    console.log(json);
    displayCharizardResults(json);
  });
function displayCharizardResults(json) {

  let charizardName = json.results[5].name;
  console.log(charizardName);

  let pokemonCharizardURL = json.results[5].url;
  console.log(pokemonCharizardURL);
  document.getElementById("charizard").innerText = charizardName;

fetch(pokemonCharizardURL)
  .then(function (answer) {
    return answer.json();
  })
  .then(function (json) {
    console.log(json);
    displayCharizardURL(json);
  });
}
function displayCharizardURL(json) {
  let pokemonFirstMove = json.moves[8].move.name;
  console.log(pokemonFirstMove);
  document.getElementById("charizardFirstMove").innerText = pokemonFirstMove;

  let pokemonSecondMove = json.moves[9].move.name;
  console.log(pokemonSecondMove);
  document.getElementById("charizardSecondMove").innerText = pokemonSecondMove;

  let pokemonThirdMove = json.moves[10].move.name;
  console.log(pokemonThirdMove);
  document.getElementById("charizardThirdMove").innerText = pokemonThirdMove;

  let pokemonFourthMove = json.moves[11].move.name;
  console.log(pokemonFourthMove);
  document.getElementById("charizardFourthMove").innerText = pokemonFourthMove;
}