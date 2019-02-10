// Dependencies
var router = require('express').Router();
var Arduino = require('../models/arduino.js');

// Basic path to get all information currently in collection
router.get('/', function(req, res) {
    Arduino.find()
    .then(results => res.json(results))
    .catch(error => res.status(500).json(error));
});

// Path to use for creating the initial model on load
// Should ONLY be called for initialization of session
router.post('/', function(req, res) {
    Arduino.create(req.body)
    .then(results => res.json(results))
    .catch(error => res.status(500).json(error));
});

// Path to update command information
// Should be used almost exclusively once the the session has been initialized
// Should only have one id since only one document should persist (may replace with findOneAndReplace)
router.put('/:id', function(req, res) {
    Arduino.findByIdAndUpdate(req.params.id, req.body)
    .then(results => res.json(results))
    .catch(error => res.status(500).json(error));
});

// Usage may vary: this could very well be limited to debugging, but may end up being used at session end so
// a new set can replace it
router.delete('/:id', function(req, res) {
    Arduino.findByIdAndDelete(req.params.id)
    .then(results => res.json(results))
    .catch(error => res.status(500).json(error));
});