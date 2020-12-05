const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; // declaring baseURL variable
const key = 'b2e02612e179494c9f1f57577b582a0a'; //declaring the API key variable
let url; // creating a url variable
const searchTerm = document.querySelector('.search'); //grabbing the search html element using querySelector
const startDate = document.querySelector('.start-date'); //grabbing start date element using querySelector
const endDate = document.querySelector('.end-date'); //grabbing end date element using querySelector
const searchForm = document.querySelector('form'); //grabbing form element using querySelector
const submitBtn = document.querySelector('.submit'); //grabbing submit element using querySelector
const nextBtn = document.querySelector('.next'); //grabbing next element using querySelector
const previousBtn = document.querySelector('.prev'); //grabbing prev element using querySelector
const nav = document.querySelector('nav'); //grabbing nav element using querySelector
const section = document.querySelector('section'); //grabbing section element using querySelector
nav.style.display = 'none'; // style attribute
let pageNumber = 0; // declaring page number variable
// console.log(‘PageNumber:’, pageNumber);
searchForm.addEventListener('submit', fetchResults); //adding eventListeners to the following 3 items
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);
function fetchResults(e) { //declaring a fetch function
  // console.log(e);
  e.preventDefault(); //preventing the page from refreshing
  console.log(e); //displaying the result in the console
  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`; //building our url variable
  console.log('URL:', url); //displaying the result in the console
  if (startDate.value !== '') { //checking if there is a start date value
    console.log(startDate.value) //displaying the result in the console
    url +=  '&begin_date=' + startDate.value; //adding the start date to the url
  }
  if (endDate.value !== '') { //checking if there is an end date
    console.log(endDate.value) //displaying the result in the console
    url += '&end_date=' + endDate.value; //adding the end date to the url
  }
  fetch(url) // invoke the fetch function passing through the url
    .then(function(result) { //starting our promise chain passing the response
     console.log(result, 'line 43') //displaying the result in the console
      return result.json(); // json-ify the results
    })
    .then(function(json) { //passing the json result to another promise
      console.log(json); //displaying the result
      displayResults(json); //pass json object to the displayResults functions and invoking displayResults
    })
  console.log('this is a test'); //displaying the result
}
function displayResults(json) { //declaring our displayResults function
  // console.log(‘Display Results’, json);
  // console.log(json.response.docs);
  while (section.firstChild) { // this is where section dicovers if it has first child node
    section.removeChild(section.firstChild); //remove item if any item present - making it empty again
  }
  let articles = json.response.docs; // storing docs section of the json object in new variable articles
  // console.log(articles);
  if (articles.length === 0) { //checking the length of the variable we just created
    console.log('No results'); //if 0 we are displayin in the console 0 results
  } else { //else statement
    for (let i = 0; i < articles.length; i++) { // for loop through the length of the article array
      // console.log(i);
      let article = document.createElement('article'); //creating new article html tag
      let heading = document.createElement('h2'); //creating html tag
      let link = document.createElement('a'); // creating html tag
      let img = document.createElement('img'); //creating html tag
      let para = document.createElement('p'); //creating html tag
      let clearfix = document.createElement('div'); //creating html tag
      let current = articles[i]; //storing the element in the articles array denoted by i in new variable current
      console.log('Current:', current); // display previous code result in console
      link.href = current.web_url; //setting the link href attribute to the value of currents.web.url
      link.target='blank' //link opens a new window
      link.textContent = current.headline.main; //set the textContent of the element to the main headline of current object
      para.textContent = 'Keywords: '; //set the p tag text content to ‘keywords: ’;
      for (let j = 0; j < current.keywords.length; j++) { //for loop through the keywords array with current variable
        let span = document.createElement('span'); //creating new html element with new variable span
        span.textContent += current.keywords[j].value +', '; //setting the text content of the span
        para.appendChild(span); //adding the span to the p element we created result is keywords + array
      }
      if (current.multimedia.length > 0) { //checking to see if the article has at least one multimedia
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url; //if it has multimedia we are setting the src to that value
        img.alt = current.headline.main; //setting the alt attribute of the image to our main headline
      }
      clearfix.setAttribute('class', 'clearfix'); //giving the clearfix a class attribute of clearfix
      article.appendChild(heading); //adding our heading to our article element
      heading.appendChild(link); //adding a link element to our heading
      article.appendChild(img); //adding an img element to our article
      article.appendChild(para); //adding the p element to our article
      article.appendChild(clearfix); //adding the clearfix element to our article
      section.appendChild(article);//adding the article to the section
    }
  }
  if (articles.length === 10) { //checking to see if the article length is equal to 10
    nav.style.display = 'block'; // if true set the nav element to block style
    previousBtn.style.display = 'block'; //display the previous button
    nextBtn.style.display = 'block'; // display the next button
  } else if (articles.length < 10 && pageNumber > 0){ // else if statment - article length is less the 10 and page number is greater than 0 we will jump in this section
    nav.style.display = 'block'; //remove the buttons
    previousBtn.style.display = 'block';//displaying previous button
    nextBtn.style.display = 'none';//not display the next button
  } else {
    nav.style.display = 'none'; // else the display has no contents because we have no results
  }
}
function nextPage(e) { //declaring a new function nextPage()
  // console.log(‘Next button clicked’);
  pageNumber++; //adding 1 to the pagenumber variable
  fetchResults(e); //invoke the fetchResults function
  console.log('Page Number:', pageNumber);//display the pagenumber in the console.log
}
function previousPage(e) { //declaring a new function previousPage()
  // console.log(‘Previous button clicked’);
  if (pageNumber > 0) { //if the page number is greater than 0
    pageNumber--;// we subtract 1 to the pagenumber
    fetchResults(e);//invoke the fetchResults()
  } else {
    return; //if the page number is 0 we break out of the function because there would blank return
     //terminates function
  }
  fetchResults(e); //invoke the fetchResults();
  console.log('Page:', pageNumber); //display the results in the console
}