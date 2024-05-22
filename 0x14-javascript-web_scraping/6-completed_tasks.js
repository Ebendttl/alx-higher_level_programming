#!/usr/bin/node

const request = require('request');

// Get the API URL from the command-line arguments
const apiUrl = process.argv[2];

// Make a GET request to the API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    // Parse the response body as JSON
    const tasks = JSON.parse(body);

    // Create an object to store the completed task count per user
    const completedTasksPerUser = {};

    // Iterate over the tasks and count the completed tasks per user
    tasks.forEach((task) => {
      if (task.completed) {
        const userId = task.userId.toString();
        if (completedTasksPerUser[userId]) {
          completedTasksPerUser[userId]++;
        } else {
          completedTasksPerUser[userId] = 1;
        }
      }
    });

    // Print the completed task count per user
    console.log(completedTasksPerUser);
  }
});
