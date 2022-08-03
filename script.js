
//////////////////////////////page switch////////////////////////
const Browse_button = document.querySelector("#Bar-button");
const Home_button = document.querySelector("#Home-button");

var Browse = document.querySelector("#bar");
var Top = document.querySelector("#top-books");

Home_button.addEventListener("click", () => {
  Top.classList.remove("hidden");
  for (let i = 0; i < genre.length; i++) {
  genre[i].classList.add("hidden");
}
  Browse.classList.add("hidden");
});
Browse_button.addEventListener("click", () => {
  for (let i = 0; i < genre.length; i++) {
  genre[i].classList.remove("hidden");
}
  Browse.classList.remove("hidden");
  Top.classList.add("hidden");
});
////////////////////////// variables and buttons boork sort///////////////////////////////////
var classic = document.querySelector("#classic");
var sci_fi = document.querySelector("#sci-fi");
var romance = document.querySelector("#romance");
var comedy = document.querySelector("#comedy");
var horror = document.querySelector("#horror");
var adventure = document.querySelector("#adventure");
const genre = [classic,sci_fi,romance,comedy,horror,adventure];

const one = document.querySelector("#Classics")
const two = document.querySelector("#Sci-fi")
const three = document.querySelector("#Romance")
const four = document.querySelector("#Comedy")
const five = document.querySelector("#Horror")
const six = document.querySelector("#Adventure");
////////////////////////// variables and buttons boork sort///////////////////////////////////


// Temporary sorting code WIP/////////////////////////////////////////////////////////////
one.addEventListener("click", () => {
  for (let i = 0; i < genre.length; i++) {
  genre[i].classList.add("hidden");
}
  genre[0].classList.remove("hidden");
  });
two.addEventListener("click", () => {
  for (let i = 0; i < genre.length; i++) {
  genre[i].classList.add("hidden");
}
  genre[1].classList.remove("hidden");
  });
three.addEventListener("click", () => {
  for (let i = 0; i < genre.length; i++) {
  genre[i].classList.add("hidden");
}
  genre[2].classList.remove("hidden");
  });
four.addEventListener("click", () => {
  for (let i = 0; i < genre.length; i++) {
  genre[i].classList.add("hidden");
}
  genre[3].classList.remove("hidden");
  });
five.addEventListener("click", () => {
  for (let i = 0; i < genre.length; i++) {
  genre[i].classList.add("hidden");
}
  genre[4].classList.remove("hidden");
  });
six.addEventListener("click", () => {
  for (let i = 0; i < genre.length; i++) {
  genre[i].classList.add("hidden");
}
  genre[5].classList.remove("hidden");
  });

///////////////////////unused ideas///////////////////////////////
/*

mockApiData = [
  {"title": "Hamlet", "author" : "William Shakespear", "img": "<URL>"},
  {"title": "Frankenstein", "author" : "Mary Shelley", "img": "<URL>"},
  ...
];

*/
//element.classList.add("my-class");
// for (let i = 0; i < genre.length; i++) {
//   genre[i].classList.add("hidden");
// }
// one.addEventListener("click", (e) => {
//   console.log("Hmmmm")
//   });
///////////////////////unused ideas///////////////////////////////