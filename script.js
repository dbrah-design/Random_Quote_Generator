
function generateMovieQuote() {
  const  movieQuotes = ["I'm going to make him an offer he can't refuse."
  ,"Houston, we have a problem."
  ,"I feel the need — the need for speed!",
  "May the Force be with you."];

  let randomQuotes = movieQuotes[(Math.floor(Math.random() * movieQuotes.length))];


  const paragraphEl = document.querySelector('.display-quote');

  paragraphEl.innerText = `"${randomQuotes}"`  

}



