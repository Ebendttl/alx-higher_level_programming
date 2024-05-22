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

    // Get the list of character URLs
    const characterUrls = movie.characters;

    // Function to fetch and print character names
    const fetchCharacterNames = (urls, index = 0) => {
      if (index >= urls.length) {
        return; // Base case: no more URLs to fetch
      }

      const characterUrl = urls[index];
      request(characterUrl, (error, response, body) => {
        if (error) {
          console.error(error);
        } else {
          const character = JSON.parse(body);
          console.log(character.name); // Print the character name

          // Recursively fetch the next character
          fetchCharacterNames(urls, index + 1);
        }
      });
    };

    // Start fetching character names
    fetchCharacterNames(characterUrls);
  }
});
