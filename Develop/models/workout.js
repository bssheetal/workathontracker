const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [
    {
  type: {
    type: String,
    trim: true,
    required: "Select Workout Type"
    },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the Workout"
  },
  weight: {
    type: Number,
    required: "Enter weight"
  },
  sets: {
    type: Number,
    required: "Enter sets"
  },
  reps: {
    type: Number,
    required: "Enter reps"
  },
  duration: {
    type: Number,
    required: "Enter duration"
  },
  distance: {
    type: Number,
    required: "Enter distance"
  }
    }]
},
{
  toJSON: {
    // include any virtual properties when data is requested
    virtuals: true
  }
}
);

workoutSchema.virtual("totalDuration").get(function () {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
