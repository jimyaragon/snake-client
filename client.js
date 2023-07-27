const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Received data from server:', data);
    // You can process the data here as needed
  });

    // Event listener for successful connection
    conn.on('connect', () => {
      console.log("Successfully connected to game server");
      conn.write("Name: JIM");
      conn.write("Move: up");
    });

  return conn;
};

module.exports = connect;