let url = 'https://rickandmortyapi.com/api/character/';

// function listItems(){
//  fetch(url.info)
//  .then(res=>res.json)
//  .then(data =>
//    console.log(data))
// }

function buttonClick(){
  ​
      // fetch('../scratch.txt')
      // // .then(
      // //     function (res) {
      // //         return res.text()
      // //     }
      // // )
      // .then(res=>res.text())
      // .then(data=> console.log(data))
      fetch('https://rickandmortyapi.com/api/character/')
      .then(res=>res.json())
      .then(data=>{
          console.log(data)})
          // data.results.forEach(pokeman => {
          //     compiler += `
          //     <ul>
          //         <li>Name: ${pokeman.name}</li>
          //         <li><a href=${pokeman.url}>More Info</a></li>
          //     </ul>
          //     `
          // });
          // resultsDiv.innerHTML = compiler;
      
    };
    console.log(buttonClick);