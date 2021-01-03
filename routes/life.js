const express = require('express');
const router = express.Router();
const passport = require('passport');
const lifeController = require('../controllers/life_controller');

router.get('/create', lifeController.create);
router.get('/prev/:index',  lifeController.prev);
router.get('/next/:index',  lifeController.next);

module.exports = router;