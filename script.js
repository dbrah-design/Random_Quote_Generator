
function generateMovieQuote() {
  const  movieQuotes = ["I'm going to make him an offer he can't refuse.","Houston, we have a problem.","I feel the need — the need for speed!"];

  const randomQuotes = movieQuotes[(Math.floor(Math.random() * movieQuotes.length))];
  console.log(randomQuotes)
}

generateMovieQuote()

