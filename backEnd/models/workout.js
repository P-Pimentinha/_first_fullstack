const Joi = require('joi');
const mongoose = require('mongoose');


// Alternative to display Date

/* const date = new Date();
const [month, day, year] = [date.getMonth() + 1 , date.getDate(), date.getFullYear()]; */

const formatDate = () => {
    let d = new Date();
    let month = (d.getMonth() + 1).toString().padStart(2, '0');
    let day = d.getDate().toString().padStart(2, '0');
    let year = d.getFullYear();
    return [day, month, year].join('-');
  }

const workoutSchema = new mongoose.Schema({
    date: {
        type:String,
        required: true,
        default: formatDate()
        
    },
    workout: {
        type:String,
        minlength: 2,
        maxlength: 50
    },
    notes: {
        type:String,
        minlength: 1,
        maxlength: 255
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