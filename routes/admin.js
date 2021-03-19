const express = require('express');
const adminController = require('../backend/controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.get('/add-film', adminController.getAddFilm);

router.get('/edit-film/:filmId', adminController.getEditFilm);

router.post('/add-film', adminController.postFilm);

router.post('/edit-film', adminController.postEditFilm);

router.get('/:filmId', adminController.getFilm);

router.post('/delete', adminController.postDelete);

module.exports = router;

