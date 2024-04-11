#!/usr/bin/node

// Check the length of process.argv to determine the number of arguments
if (process.argv.length === 2) {
  // No arguments passed
  console.log('No argument');
} else if (process.argv.length === 3) {
  // One argument passed
  console.log('Argument found');
} else {
  // More than one argument passed
  console.log('Arguments found');
}
