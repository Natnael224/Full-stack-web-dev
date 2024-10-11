// movie.js created to arrange movies.
export function createMovie(title, director, genre) {
    try {
        // Validate input parameters
        if (!title || !director || !genre) {
            throw new Error("All parameters (title, director, genre) are required.");
        }

        // Create the movie object
        const movie = {
            title: title,
            director: director,
            genre: genre
        };

        return movie;
    } catch (error) {
        console.error("Error creating movie:", error.message);
        return null;
    }
}
