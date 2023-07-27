const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
  
    stdin.on('data', handleUserInput);
  
    return stdin;
  };
  
  // The handleUserInput function to check for ctrl + c input and terminate the game
  const handleUserInput = function (input) {
    if (input === '\u0003') { // '\u0003' represents the Ctrl + C input
      console.log("Ctrl + C input received. Terminating the game...");
      process.exit(); // Terminates the game and exits the process
    }
    // Add any other key handling logic here if needed
  };
  
  module.exports = setupInput;