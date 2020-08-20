const Film = require('../models/Film');

exports.getIndex = async (req, res) => {
  const film = await Film.find((data) => data);

  try {
    console.log(film);
    res.status(200).render('index', { film: film });
  } catch (error) {
    console.log(error);
  }
};

exports.getFilm = async (req, res) => {
  const filmId = req.params.filmId;

  const film = await Film.findById(filmId, (film) => film);

  try {
    console.log(film);
    res.status(200).render('film', { film: film });
  } catch (error) {
    console.log(error);
  }
};

exports.getAddFilm = (req, res) => {
  res.status(200).render('edit-film', { editing: false });
};

exports.getEditFilm = async (req, res) => {
  const filmId = req.params.filmId;

  const editMode = req.query.edit;

  if (!editMode) {
    return res.redirect('/');
  }

  const film = await Film.findById(filmId);

  try {
    if (!filmId) {
      return res.redirect('/');
    }
    console.log(film);
    res.status(200).render('edit-film', { film: film, editing: editMode });
  } catch (error) {
    console.log(error);
  }
};

exports.postFilm = (req, res) => {
  const { name, image, description } = req.body;

  const film = new Film({ name: name, image: image, description: description });
  film.save();
  console.log('Film Added to the database');
  res.status(201).redirect('/');
};

exports.postEditFilm = (req, res) => {
  const filmId = req.body.filmId;
  const { name, image, description } = req.body;

  Film.findById(filmId)
    .then((film) => {
      film.name = name;
      film.image = image;
      film.description = description;

      return film.save();
    })
    .then(() => {
      console.log('Item Updated');
      res.status(201).redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postDelete = async (req, res) => {
  const filmId = req.body.filmId;

  const film = await Film.findByIdAndDelete(filmId, (data) => data);

  try {
    console.log(film);
    console.log('Film deleted');
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

