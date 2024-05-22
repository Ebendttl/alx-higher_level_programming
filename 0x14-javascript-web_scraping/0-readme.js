#!/usr/bin/node

const fs = require('fs');

// Get the file path from the command-line arguments
const filePath = process.argv[2];

// Read the file content
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    // If an error occurred during reading, print the error object
    console.log(err);
  } else {
    // Print the file content
    console.log(data);
  }
});
