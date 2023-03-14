# Google Books Search  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description
This is an app to search for books using google books api. The users can login and add books that they like to their saved books list or remove them later.

## Built Using
JavaScript, ES6, MongoDB, React, bootstrap, Node.js (Express, Mongoose, graphql, jsonwebtoken, apollo/client, apollo-server-express).

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [User-Story](#User-Story)
* [Acceptance-Criteria](#Acceptance-Criteria)
* [License](#License)
* [Contributing](#Contributing)
* [Screenshot](#Screenshot)
* [Deployed](#Deployed)
* [Questions](#Questions)

### Installation
To clone the repo run ```git clone https://github.com/vsjanarthani/Book-Search-Engine-MERN.git``` in your terminal. After cloning the repo, run ```npm install``` to install the necessary dependencies.

### Usage
After installing all the dependencies, run ```npm start``` in your terminal to start the application. 

### User-Story
AS AN avid reader<br>
I WANT to search for new books to read<br>
SO THAT I can keep a list of books to purchase<br>

### Acceptance-Criteria
GIVEN a book search engine<br>
WHEN I load the search engine<br>
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button<br>
WHEN I click on the Search for Books menu option<br>
THEN I am presented with an input field to search for books and a submit button<br>
WHEN I am not logged in and enter a search term in the input field and click the submit button<br>
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site<br>
WHEN I click on the Login/Signup menu option<br>
THEN a modal appears on the screen with a toggle between the option to log in or sign up<br>
WHEN the toggle is set to Signup<br>
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button<br>
WHEN the toggle is set to Login<br>
THEN I am presented with two inputs for an email address and a password and login button<br>
WHEN I enter a valid email address and create a password and click on the signup button<br>
THEN my user account is created and I am logged in to the site<br>
WHEN I enter my account’s email address and password and click on the login button<br>
THEN I the modal closes and I am logged in to the site<br>
WHEN I am logged in to the site<br>
THEN the menu options change to Search for Books, an option to see my saved books, and Logout<br>
WHEN I am logged in and enter a search term in the input field and click the submit button<br>
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account<br>
WHEN I click on the Save button on a book<br>
THEN that book’s information is saved to my account<br>
WHEN I click on the option to see my saved books<br>
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account<br>
WHEN I click on the Remove button on a book<br>
THEN that book is deleted from my saved books list<br>
WHEN I click on the Logout button<br>
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button <br> 
### License
This application is covered under **MIT** license.

### Contributing 
No contributions at the moment. If anyone wishes to provide contributions, please contact the author.

### Screenshot
![webpage](./assets/images/screenshot.png)

### Deployed
The application is deployed on Heroku [https://google-book-search-jana.herokuapp.com/](https://google-book-search-jana.herokuapp.com/)

### Questions
If you have any questions, please reach out to the<br>
Author: Janarthani V S <br>
Email : <vs.janarthani@gmail.com> <br>
Author's github profile: [GitHub](https://github.com/vsjanarthani)
