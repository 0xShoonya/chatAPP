const express = require('express');
const router = express.Router();

// Import the controllers for handling requests
const { showChatPage, sendMessage } = require('../controllers/chatControllers');

// Define the routes
router.route("/").get(showChatPage);
router.route("/sendMessage").post(sendMessage);

// Export the router
module.exports = router;
