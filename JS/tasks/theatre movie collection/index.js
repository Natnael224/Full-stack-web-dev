// index.js
import { createMovie } from './movie.js';
import { addMovie, displayMovies, searchMovies } from './movieCollection.js';

try {
    // Create a few movie objects
    const movie1 = createMovie("Inception", "Christopher Nolan", "Sci-Fi");
    const movie2 = createMovie("The Dark Knight", "Christopher Nolan", "Action");
    const movie3 = createMovie("Interstellar", "Christopher Nolan", "Sci-Fi");
    const movie4 = createMovie("Pulp Fiction", "Quentin Tarantino", "Crime");

    // Add movies to the collection
    if (movie1) addMovie(movie1);
    if (movie2) addMovie(movie2);
    if (movie3) addMovie(movie3);
    if (movie4) addMovie(movie4);

    // Display all movies
    displayMovies();

    // Search for movies by genre
    console.log("Searching for Sci-Fi movies:");
    searchMovies("Sci-Fi", null);

    // Search for movies by director
    console.log("Searching for movies directed by Quentin Tarantino:");
    searchMovies(null, "Quentin Tarantino");

} catch (error) {
    console.error("An error occurred in the main logic:", error.message);
}

