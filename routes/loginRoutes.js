const express = require('express');
const router = express.Router();

const { showLoginPage, loginUser } = require('../controllers/loginControllers');

// Define the routes
router.get('/', showLoginPage);
router.post('/', loginUser);

// router.get('/login', showLoginPage);
// router.post('/login', loginUser);


// Export the router
module.exports = router;