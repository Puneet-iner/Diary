const express = require('express');
const router = express.Router();
const passport = require('passport');
const lifeController = require('../controllers/life_controller');

router.get('/create', passport.checkAuthentication, lifeController.create);
router.get('/prev/:index', passport.checkAuthentication, lifeController.prev);
router.get('/next/:index', passport.checkAuthentication, lifeController.next);

module.exports = router;