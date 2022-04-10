const express = require('express');
const router = express.Router();
const { Workout } = require('../models/workout');

router.get('/', async (req, res) => {
    const workout = await Workout.find();

    //retuns the last 10 workouts
    res.send(workout.reverse().slice(0, 10));
  });

router.post('/', async (req,res) => {

/* const { error } = validate(req.body); 
if (error) return res.status(400).send(error.details[0].message); */

/* let workout = await Workout.findOne({email: req.body.email});
if (workout) return res.status(400).send('Email already registered'); */

let workout = new Workout({ 
    workout: req.body.workout,
    notes: req.body.notes,
    duration: req.body.duration
  });

  await workout.save();

  res.send(workout);
});

module.exports = router;