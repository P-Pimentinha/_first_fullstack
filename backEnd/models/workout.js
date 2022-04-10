const Joi = require('joi');
const mongoose = require('mongoose');


const workoutSchema = new mongoose.Schema({
    Date: {
        type:Date,
        required: true,
        default: Date.now
        
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

const Workout = mongoose.model('Workouts', workoutSchema);

exports.Workout = Workout;
exports.workoutSchema = workoutSchema;