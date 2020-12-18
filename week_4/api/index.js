// console.log("hello");

const baseURL = "https://api.chucknorris.io/jokes/random";

let jokeButton = document.getElementById("jokeButton");

jokeButton.addEventListener("click",fetchJokes);

function fetchJokes() {
    fetch(baseURL)
        .then(res => res.json())
        .then((json) => displayJoke(json.value)
        );
}

function displayJoke(joke) {
    let jokeText = document.getElementById
    ("joke");

    jokeText.innerText = joke;
}

