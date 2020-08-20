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
  res.status(200).render('edit-film');
};

exports.postFilm = (req, res) => {
  const { name, image, description } = req.body;

  const film = new Film({ name: name, image: image, description: description });
  film.save();
  console.log('Film Added to the database');
  res.status(201).redirect('/');
};
