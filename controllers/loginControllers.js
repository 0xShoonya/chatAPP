const fs = require('fs');
const path = require('path')

// Show the login page
exports.showLoginPage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
};

// Handle the login request
exports.loginUser = (req, res) => {
  const { username } = req.body;
  // Store the username in local storage
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('username', username);
  }
  res.redirect('/api/v1/chat');
};


