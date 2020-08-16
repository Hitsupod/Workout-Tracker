const express = require("express")
const router = require("express").Router();
const db = require("../models/workout");
const path = require("path");

//Routes 

// Page Routes 
router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

router.get("stats", function(req, res){
    res.sendFile(path.join(__dirname, "/public/stats.html"));
})

router.get("exercise", function(req, res){
    res.sendFile(path.join(__dirname, "/public/exercise.html"));
})


// Get Route
router.get("/api/workouts", (req, res) => {
    db.find({})
    .sort({ day: 1 })
    .then(dbWorkout => {
        res.json(dbWorkout);
        // console.log(dbWorkout)
    }) 
    .catch(err => {
        res.status(400).json(err);
    })
});

//Post Route
router.post("/api/workouts", (req, res) => {
    db.create({
        exercise: [req.body]
    })
    .then(dbWorkout => {
        res.json(dbWorkout);
        // console.log(dbWorkout)
    }) 
    .catch(err => {
        res.status(400).json(err);
    })
});

module.exports = router;
