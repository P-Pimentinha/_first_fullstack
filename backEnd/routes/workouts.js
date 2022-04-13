const express = require('express');
const router = express.Router();
const { Workout } = require('../models/workout');

// retuns all the workouts
router.get('/', async (req, res) => {
    const workout = await Workout.find();

    //retuns the last 10 workouts
    res.send(workout);
  });

// retuns the last 10 workouts
router.get('/10', async (req, res) => {
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

router.put('/', async (req, res) => {
    
/*   const { error } = validateUpdate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const emailCheck = await Customer.findOne({email: req.body.email});
  if (emailCheck) return res.status(400).send('Email already registered'); */

  const workout = await Workout.findByIdAndUpdate(req.body._id, { 
    workout: req.body.workout,
    notes: req.body.notes,
    duration: req.body.duration }, {
    new: true
  });

  if (!workout) return res.status(404).send('The workout with the given ID was not found.');
  
  res.send(workout);
});

module.exports = router;