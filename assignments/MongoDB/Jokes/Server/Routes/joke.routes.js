const JokeController = require('../controllers/joke.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findOneSingleJoke);
    app.put('/api/jokes/:id', JokeController.updateExistingJoke);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.delete('/api/jokes/:id', JokeController.deleteAnExistingJoke);
}


///api/jokes         GET       get all jokes

// /api/jokes        POST     create a new joke

// /api/jokes/:_id   GET        return a single joke matching this _id

// /api/jokes/:_id   PUT        update a single joke matching this _id

// /api/jokes/:_id   DELETE  delete a single joke matching this _id

