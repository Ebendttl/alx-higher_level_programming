#!/usr/bin/node

const request = require('request');

// Get the movie ID from the command-line arguments
const movieId = process.argv[2];

// Construct the API URL with the movie ID
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    // Parse the response body as JSON
    const movie = JSON.parse(body);

    // Print the movie title
    console.log(movie.title);
  }
});
