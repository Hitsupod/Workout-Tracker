const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Workout Schema Creation
const workoutSchema = new Schema ({
    day:{
        type: Date,
        default: Date.now
    },
    exercise: [{
        name: {
            type: String,
            trim: true,
            required: "Enter the exercise name"
          },
        type: {
            type: String,
            trim: true,
            required: "Enter the exercise type"
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        duration: {
            type: Number,
            required: "Enter the exercise duration"
        },
        distance: {
            type: Number
        }
    }]

})


// Export
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;