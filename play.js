const connect = require('./client');

console.log("Connecting ...");
const connection = connect();
// You should set up the event handlers for the 'data' and 'end' events on the connection returned from the 'connect' function.
connection.on('data', (data) => {
  console.log('Received:', data);
});

connection.on('end', () => {
  console.log('Disconnected from server.');
});