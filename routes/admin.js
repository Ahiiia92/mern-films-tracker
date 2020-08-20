const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.get('/add-film', adminController.getAddFilm);
router.post('/add-film', adminController.postFilm);

router.get('/:filmId', adminController.getFilm);

module.exports = router;

