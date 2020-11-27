// fetch('https://taco-randomizer.herokuapp.com/random/?full-taco=true')
// .then(res => res.json())
// .then(json => console.log(json))

// async function slowResult() {
//   await fetch("https://taco-randomizer.herokuapp.com/random/?full-taco=true")
//     .then((res) => res.json())
//     .then((json) => console.log(json));
//   console.log("this is a message!");
// }

// slowResult();

async function slowResult() {
  await fetch("https://taco-randomizer.herokuapp.com/random/?full-taco=true")
    .then((res) => res.json())
    .then((json) => {
      json.lolProperty = "this is a random property!";
      return json;
    })
    .then((json) => console.log(json));
  console.log("this is a message!");
}

slowResult();
