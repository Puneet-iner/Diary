const express = require('express');
const router = express.Router();
const passport = require('passport');
const newPageController = require('../controllers/new_page_controller');
router.post('/save', passport.checkAuthentication, newPageController.save);
module.exports = router;