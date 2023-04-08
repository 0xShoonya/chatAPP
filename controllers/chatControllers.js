const fs = require('fs');
const path = require('path')

// Show the chat page
exports.showChatPage = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'chat.html')); 
 };
  
  // Handle the send message request
  exports.sendMessage = (req, res) => {
    const username = localStorage.getItem('username');
    const message = req.body.message;
    const data = `${username}: ${message}\n`;
    // Append the message to the file
    fs.appendFile('messages.txt', data, (err) => {
      if (err) throw err;
      console.log('Message saved!');
    });
    res.redirect('api/v1/chat');
  };
  