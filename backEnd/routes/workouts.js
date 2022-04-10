const express = require('express');
const router = express.Router();
const { Workout } = require('../models/workout');

router.get('/', async (req, res) => {
    const workout = await Workout.find();
    res.send(workout);
  });


module.exports = router;