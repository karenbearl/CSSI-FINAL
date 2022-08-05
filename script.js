//////////////////////////////page switch////////////////////////
const Browse_button = document.querySelector("#Bar-button");
const Home_button = document.querySelector("#Home-button");
const Search_button = document.querySelector("#search")

var Browse = document.querySelector("#bar");
var Top = document.querySelector("#top-books");
var Search = document.querySelector("#search-result");

Home_button.addEventListener("click", () => {
  Top.classList.remove("hidden");
  for (let i = 0; i < genre.length; i++) {
  genre[i].classList.add("hidden");
}
  Browse.classList.add("hidden");
  Search.classList.add("hidden");
});
Browse_button.addEventListener("click", () => {
  for (let i = 0; i < genre.length; i++) {
  genre[i].classList.remove("hidden");
}
  Browse.classList.remove("hidden");
  Top.classList.add("hidden");
  Search.classList.add("hidden");
});
Search_button.addEventListener("click", () => {
  for (let i = 0; i < genre.length; i++) {
  genre[i].classList.add("hidden");
}
  Browse.classList.add("hidden");
  Top.classList.add("hidden");
  Search.classList.remove("hidden");
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
////////////////////////////scorling thing//////////////////////////////////
const gap = 10;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


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
// Helper function - gets a random integer up to (but not including) the maximum

// Helper function - gets a random integer up to (but not including) the maximum
////////////////////////////