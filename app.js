"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
 async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  getPosts();
  const posts = await getPosts();
  displayPosts(posts);
  displayPostsGrid(posts);
 
}
async function getPosts(){
  const response = await fetch( "http://codeexam.doradesigns.dk/wp-json/wp/v2/projects?acf_format=standard"
  );
  const data = await response.json();
  return data;
}

function displayPosts(posts) {
  const postsList = document.querySelector("#posts-list");
for (const post of posts) {
	postsList.insertAdjacentHTML(
    "beforeend",`
  
      `
  );
}
}

function displayPostsGrid(posts){
  const postsGrid = document.querySelector("#posts-grid");

for (const post of posts) {
  postsGrid.insertAdjacentHTML(
    "beforeend",
    /*html*/ `
    <article class="grid-item">
      <img src="${post.acf.image}" alt="${post.title.rendered}" />
      <h2>${post.title.rendered}</h2> <h4>${post.acf.short_description}</h4>
    </article>
  `
  );
}
}