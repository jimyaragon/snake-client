const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  // Event listener for stdin to handle user input
  stdin.on('data', handleUserInput);
  
  return stdin;
};
  
let connection;
  
const setupConnection = (conn) => {
  connection = conn;
};
  
// The handleUserInput function to check for ctrl + c input and movement commands
const handleUserInput = function(input) {
  if (input === '\u0003') { // '\u0003' represents the Ctrl + C input
    console.log("Ctrl + C input received. Terminating the game...");
    process.exit(); // Terminates the game and exits the process
  } else if (input === 'w') {
    connection.write("Move: up");
  } else if (input === 'a') {
    connection.write("Move: left");
  } else if (input === 's') {
    connection.write("Move: down");
  } else if (input === 'd') {
    connection.write("Move: right");
  } else if (input === 'z') {
    connection.write("Say: Get over here!");
  }
  
  // Add any other key handling logic here if needed
};
  
module.exports = {
  setupInput,
  setupConnection
};