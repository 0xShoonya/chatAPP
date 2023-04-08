const express = require('express');


const chat = require('./routes/chatRoutes')
const login = require('./routes/loginRoutes')

const app = express();

const port = 3300;

// Set up the middleware for parsing JSON data
app.use(express.json());

// Set up the static directory for serving HTML, CSS, and JS files
app.use(express.static(__dirname + '/public'));

// Use the chatRoutes router
app.use("/api/v1/login", login);
app.use("/api/v1/chat", chat);
// app.use('/',chatRoutes);
// Use the loginROutes router
// app.use('/login', loginRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
