const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; //1
const key = "Eq3glGzj240VDrGadpJxMn7PU8hGjw5p"; //2
let url; //3

//SEARCH FORM
const searchTerm = document.querySelector(".search");
const startDate = document.querySelector(".start-date");
const endDate = document.querySelector(".end-date");
const searchForm = document.querySelector("form");
const submitBtn = document.querySelector(".submit");

//RESULTS NAVIGATION
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".prev");
const nav = document.querySelector("nav");

//RESULTS SECTION
const section = document.querySelector("section");

nav.style.display = "none";

let pageNumber = 0;
let displayNav = false;

//1                     //2
searchForm.addEventListener("submit", fetchResults);
nextBtn.addEventListener("click", nextPage); //3
previousBtn.addEventListener("click", previousPage); //3

function fetchResults(e) {
  e.preventDefault();

  url =
    baseURL +
    "?api-key=" +
    key +
    "&page=" +
    pageNumber +
    "&q=" +
    searchTerm.value;
  //INSERT HERE
  if (startDate.value !== "") {
    console.log(startDate.value);
    url += "&begin_date=" + startDate.value;
  }

  if (endDate.value !== "") {
    url += "&end_date=" + endDate.value;
  }
  //END HERE
  //1
  fetch(url)
    .then(function (result) {
      console.log(result);
      return result.json(); //2
    })
    .then(function (json) {
      console.log(json); //3
    });
}

function nextPage() {
  console.log("Next button clicked");
} //5

function previousPage() {
  console.log("Next button clicked");
} //5
