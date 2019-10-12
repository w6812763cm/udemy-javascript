var movie = [
    { title: "Frozen",
      rating: "4 stars",
      hasWatched: false
    },
    { title: "Detention",
      rating: "4.5 stars",
      hasWatched: true
    },
    { title: "Joker",
    rating: "3.5 stars",
    hasWatched: false
    },
    { title: "We Are Champions",
    rating: "3.0 stars",
    hasWatched: true
    }
]

for (var i = 0; i < movie.length; i++){
    result = "You have"
    // if hasWatched is true
    if (movie[i].hasWatched){
        result += " watched "
    }
    // if hasWatched is false
    else if (movie[i].hasWatched === false){
        result += " not seen "
    }
    result += movie[i].title + " - " + movie[i].rating
    console.log(result);
}


// forEach function

movie.forEach(function(movie){
    result = " You have"
    if (movie.hasWatched){
        result += " watched "  
    } else {
        result += " not seen "
    }
        result += movie.title + " - " + movie.rating
    console.log(result);
});



