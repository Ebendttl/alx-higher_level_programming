#!/usr/bin/node

const request = require('request');

// Get the API URL from the command-line arguments
const apiUrl = process.argv[2];

// Wedge Antilles character ID
const wedgeAntillesId = '18';

// Make a GET request to the API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    // Parse the response body as JSON
    const movies = JSON.parse(body).results;

    // Filter the movies that have Wedge Antilles as a character
    const moviesWithWedgeAntilles = movies.filter((movie) => {
      return movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${wedgeAntillesId}/`);
    });

    // Print the count of movies with Wedge Antilles
    console.log(moviesWithWedgeAntilles.length);
  }
});
