console.log("Script running");

// Helper function - gets a random integer up to (but not including) the maximum
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Capture the three major foci of user interaction in variables.
const queryField = document.querySelector("#search");
const imageHolderDiv = document.querySelector("#imageholder");
const bookContainer = document.querySelector("#book-container");
const searchInput = document.querySelector("[data-search]")

// Log the elements to confirm that the querySelectors worked.
console.log(queryField);
console.log(imageHolderDiv);

searchInput.addEventListener("input", async  e => {
  const baseurl = `https://openlibrary.org/`;
  let query = queryField.value;
  let response = await fetch(`${baseurl}search.json?q=${query}&limit=25`);
  let myjson = await response.json();
  console.log(myjson);
  bookContainer.innerHTML = "";
  for (let book of myjson.docs) {
    let tagsHtml = '';
    if (typeof book.subject !== "undefined") {
      for (let tag of book.subject) {
        tagsHtml += `<span class="tag">${tag}</span>\n`;
      }
    }

    let imgurl = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png";
    if (typeof book.isbn !== "undefined") {
      imgurl = `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-L.jpg`;
    }
    
    bookContainer.innerHTML += `
    <div class="card">
      <div class="card-image">
         <figure class="image is-4by3">
          <img src="${imgurl}">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">
               ${book.title} (${book.first_publish_year})
            </p>
            ${tagsHtml}
          </div>
        </div>
      </div>
    </div>
    `;
  }
});