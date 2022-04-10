const Joi = require('joi');
const mongoose = require('mongoose');


const workoutSchema = new mongoose.Schema({
    Date: {
        type:String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    workout: {
        type:String,
        minlength: 2,
        maxlength: 50
    },
    notes: {
        type:String,
        minlength: 2,
        maxlength: 50
    },
    duration: {
        type:String,
        minlength: 2,
        maxlength: 50
    }
});

const workout = mongoose.model('Workouts', workoutSchema);