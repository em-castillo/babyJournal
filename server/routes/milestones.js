const sequenceGenerator = require('./sequenceGenerator');
const Milestones = require('../models/milestones');

var express = require('express');
var router = express.Router();


//get
router.get('/', async (req, res, next) => {
    Milestones.find()
        // .populate()
        .then((milestones) => {
            res.status(200).json({
                message: 'Milestones fetched successfully!',
                milestones: milestones,
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: 'Cannot get milestones.',
                error: error,
            });
        });
});


 //post
 router.post('/', async (req, res, next) => {
  try {
    const maxMilestoneId = await sequenceGenerator.nextId("milestones");

    const milestone = new Milestones({
      id: maxMilestoneId,
      activity: req.body.activity,
      age: req.body.age
    });

    const createdMilestone = await milestone.save();

    res.status(201).json({
      message: 'Milestone added successfully',
      milestone: createdMilestone
    });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred',
      error: error.message
    });
  }
});

  
  module.exports = router; 
