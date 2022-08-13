const MovieController = require('../controllers/movie.controller');

module.exports = (app) => {
    app.get('/api/movies', MovieController.getMovies);
    app.get('/api/movies/:id', MovieController.getMovieById);
    app.post('/api/movies/create', MovieController.createMovie);
    app.put('/api/movies/:id', MovieController.updateMovie);
    app.delete('/api/movies/:id', MovieController.deleteMovie);
};