// creating movieCollection.js
// Create an empty array to store movie objects
const movieCollection = [];

// Function to add a movie to the collection
export function addMovie(movie) {
    try {
        if (!movie || typeof movie !== 'object') {
            throw new Error("Invalid movie object.");
        }
        movieCollection.push(movie);
        console.log("Movie added successfully.");
    } catch (error) {
        console.error("Error adding movie:", error.message);
    }
}

// Function to display all movies in the collection
export function displayMovies() {
    try {
        if (movieCollection.length === 0) {
            console.log("No movies in the collection.");
            return;
        }
        console.log("Movies in the collection:");
        movieCollection.forEach((movie, index) => {
            console.log(`${index + 1}. Title: ${movie.title}, Director: ${movie.director}, Genre: ${movie.genre}`);
        });
    } catch (error) {
        console.error("Error displaying movies:", error.message);
    }
}

// Function to search movies by genre or director
export function searchMovies(genre, director) {
    try {
        const results = movieCollection.filter(movie => 
            (genre && movie.genre === genre) || (director && movie.director === director)
        );
        if (results.length === 0) {
            console.log("No movies found matching the criteria.");
            return;
        }
        console.log("Search results:");
        results.forEach((movie, index) => {
            console.log(`${index + 1}. Title: ${movie.title}, Director: ${movie.director}, Genre: ${movie.genre}`);
        });
    } catch (error) {
        console.error("Error searching movies:", error.message);
    }
}
