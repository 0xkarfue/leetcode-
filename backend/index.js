// const express = require('express');
import express from 'express';
import bcryptjs from 'bcryptjs';
// const bcryptjs = require('bcryptjs');
const app = express();
const port = 3000;
// const problems = require('./problems.js');
import problems from './problems.js';

app.use(express.json());  // Middleware to parse JSON bodies

// Simulating a database of users
const USERS = [];

// Simulating the QUESTIONS and SUBMISSION arrays
const QUESTIONS = [{
    title: "Two states",
    description: "Given an array, return the maximum of the array?",
    testCases: [{
        input: "[1,2,3,4,5]",
        output: "5"
    }]
}];

const SUBMISSION = [];

// Sign-up route
app.post('/signup', async function(req, res) {
  try {
    // Step 1: Get user info from the request body
    const { username, email, password } = req.body;

    // Step 2: Check if the email or username already exists in the USERS array
    const existingUser = USERS.find(user => user.email === email || user.username === username);
    if (existingUser) {
      return res.status(400).json({ error: "User with that username or email already exists!" });
    }

    // Step 3: Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Step 4: Create the user object
    const newUser = {
      username,
      email,
      password: hashedPassword,
    };

    // Step 5: Store the new user in the USERS array
    USERS.push(newUser);

    // Step 6: Generate a simple token (just a simulation for now)
    const accessToken = `${username}-${Date.now()}`;

    // Step 7: Send a response with the token and a success message
    res.status(201).json({ message: "User created successfully!", accessToken });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Something went wrong!" });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



app.post('/login', async function(req, res) {
  try {
    // Step 1: Get user credentials from the request body
    const { usernameOrEmail, password } = req.body;

    // Step 2: Find the user by username or email in the USERS array
    const user = USERS.find(u => u.username === usernameOrEmail || u.email === usernameOrEmail);

    // Step 3: Check if user exists
    if (!user) {
      return res.status(400).json({ error: "Invalid username or password!" });
    }

    // Step 4: Check if the password is correct using bcryptjs
    const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password!" });
    }

    // Step 5: Simulate token generation (e.g., a simple token based on the username)
    const accessToken = `${user.username}-${Date.now()}`;

    // Step 6: Send a response with the token
    res.status(200).json({ message: "Login successful!", accessToken });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Something went wrong!" });
  }
});


app.get('/questions', function(req, res) {

  //return the user all the questions in the QUESTIONS array
  res.send("Hello World from route 3!")
})

app.get("/submissions", function(req, res) {
   // return the users submissions for this problem
  res.send("Hello World from route 4!")
});


app.post("/submissions", function(req, res) {
   // let the user submit a problem, randomly accept or reject the solution
   // Store the submission in the SUBMISSION array above
  res.send("Hello World from route 4!")
});

// leaving as hard todos
// Create a route that lets an admin add a new problem
// ensure that only admins can do that.

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})