document.getElementById("my_form").addEventListener("submit", (e) => {
    e.preventDefault();
    let userInput = document.getElementById("user_input").value;
    createCard(userInput);
    
});

//creating a card with keyword
function createCard(info) {
    //make a card
    let newCard = document.createElement("div");
    newCard.setAttribute("class", "card");
    newCard.setAttribute("style", "width: 18rem;");
    
    //make card body
    let newBody = document.createElement("div");
    newBody.setAttribute("class", "card-body");
    newCard.appendChild(newBody);

    //give card a title
    let newTitle = document.createElement("h5");
    newTitle.setAttribute("class", "card-title");
    newTitle.innerHTML = info;
    newBody.appendChild(newTitle);

    //create movie button
    let newMovieBtn = document.createElement("button");
    newMovieBtn.setAttribute("class", "btn btn-primary");
    newMovieBtn.innerHTML = "search movies";
    newMovieBtn.addEventListener("click", findMovies);
    newBody.appendChild(newMovieBtn);

    //create gif button
    let newGifBtn = document.createElement("button");
    newGifBtn.setAttribute("class", "btn btn-warning");
    newGifBtn.innerHTML = "search gif";
    newGifBtn.addEventListener("click", findGifs);
    newBody.appendChild(newGifBtn);


    document.getElementById("display_card").appendChild(newCard);
}

//create function to find movies
function findMovies(event, movieTitle) {
    event.preventDefault();
    movieTitle = document.getElementById("user_input").value;
    fetch(`https://www.omdbapi.com/?apikey=2f9d3493&s=${movieTitle}`)
    .then((response) => response.json())
    .then((result) => makeMovieCards(result.Search.slice(0-12)));
    
}

//create function to find gifs
function findGifs(event, gifTitle) {
    event.preventDefault();
    gifTitle = document.getElementById("user_input").value;

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=vXY0OVLJAXqY0xRlrEhlJvfnuVzaT5CA&q=${gifTitle}&limit=12`)
    .then((response) => response.json())
    .then((result) => makeGifCards(result.data));
    
}

//use and array of gifs and create gif cards
function makeGifCards(gifs) {
    for (i = 0; i < gifs.length; i++) {
         //make a card
         let newCard = document.createElement("div");
         newCard.setAttribute("class", "card");
         newCard.setAttribute("style", "width: 18rem;");
 
         //make card body
         let newBody = document.createElement("div");
         newBody.setAttribute("class", "card-body");
         newCard.appendChild(newBody);
 
         //make an image for a new card
         let newImage = document.createElement("img");
         newImage.setAttribute("class", "card-img-top");
         newImage.setAttribute("src", `${gifs[i].images.downsized_medium.url}`)
         newCard.appendChild(newImage); 
  
         //make title
         let newTitle = document.createElement("h5");
         newTitle.setAttribute("class", "card-title");
         newTitle.innerHTML = `${gifs[i].title}`
         newBody.appendChild(newTitle);
 
         document.getElementById("display_content").appendChild(newCard);
    
         }
    } 

//use array of movies and create movie cards
function makeMovieCards(movies) {
    for (i = 0; i < movies.length; i++) {

        //make a card
        let newCard = document.createElement("div");
        newCard.setAttribute("class", "card");
        newCard.setAttribute("style", "width: 18rem;");

        //make card body
        let newBody = document.createElement("div");
        newBody.setAttribute("class", "card-body");
        newCard.appendChild(newBody);

        //make an image for a new card
        let newImage = document.createElement("img");
        newImage.setAttribute("class", "card-img-top");
        newImage.setAttribute("src", `${movies[i].Poster}`)
        newCard.appendChild(newImage);
 
        //make title
        let newTitle = document.createElement("h5");
        newTitle.setAttribute("class", "card-title");
        newTitle.innerHTML = `${movies[i].Title}`
        newBody.appendChild(newTitle);

        document.getElementById("display_content").appendChild(newCard);
}
}










/*## Deliverable

A website with a search bar and a button to create a keyword card

When the "create keyword" button is clicked, a card with:

- The keyword as the title
- 2 buttons:
    - One button to search for at most 12 movies that have that keyword in their title
    - One button to search for at most 12 gifs about that keyword

When either button is clicked, show the user the appropriate responsive content (should wrap) in cards with:

- An image (movie poster or gif)
- Movie or gif title */
