const router = require("express").Router();
const Workout = require("../models/workout.js");
//const Cardio = require("../models/cardio.js");

router.post('/api/workouts', ({ body }, res) => {
  console.log('workout logged');
  console.log(body)
  Workout.create(body).then(workoutdb => {
    console.log('is this being hit')
    res.json(workoutdb)
  }).catch(err => {
    res.json(err)
  })
});
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put('/api/workouts/:id', (req, res) => {
  console.log('workout id');
  Workout.update({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then(workoutdb => {
      res.json(workoutdb)
    }).catch(err => {
      res.json(err)
    })
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).limit(7)
    .then(dbWorkouts => {
      console.log(dbWorkouts)
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});
module.exports = router;