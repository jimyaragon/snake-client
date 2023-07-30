
const connect = require('./client'); // Import the connect function from client.js
const { setupInput, setupConnection } = require('./input'); // Import the setupInput and setupConnection functions

// Call the connect function to get the connection object
const conn = connect();

// Pass the connection object to setupInput function
setupConnection(conn);

// Set up user input
setupInput();
