const sequenceGenerator = require('./sequenceGenerator');
const Memories = require('../models/memories');

var express = require('express');
var router = express.Router();

//get
router.get('/', (req, res, next) => {
    Memories.find()
    .populate('children')
    .then((memories) => {
        res.status(200).json({
            message: "Retrieved memories from the database.",
            memories: memories,
        });
    })
    .catch((err) => {
        res.status(500).json({
            message: "Error retrieving memories from the database.",
            error: err
        });
    });
});

 //post
 router.post('/', async (req, res, next) => {
    try {
      const maxMemoryId = await sequenceGenerator.nextId("memories");
  
      const memory = new Memories({
        id: maxMemoryId,
        title: req.body.title,
        description: req.body.description,
      });
  
      const createdMemory = await memory.save();
  
      res.status(201).json({
        message: 'Memory added successfully',
        memory: createdMemory
      });
    } catch (error) {
      res.status(500).json({
        message: 'An error occurred',
        error: error.message
      });
    }
  });

  //put
  router.put('/:id', (req, res, next) => {
    Memories.findOne({ id: req.params.id })
      .then(memory => {
        memory.title = req.body.title;
        memory.description = req.body.description;

  
        Memories.updateOne({ id: req.params.id }, memory)
          .then(result => {
            res.status(204).json({
              message: 'Memory updated successfully'
            })
          })
          .catch(error => {
             res.status(500).json({
             message: 'An error occurred',
             error: error
           });
          });
      })
      .catch(error => {
        res.status(500).json({
          message: 'Memory not found.',
          error: { memory: 'Memory not found'}
        });
      });
  });

  //delete
  router.delete("/:id", (req, res, next) => {
    Memories.findOne({ id: req.params.id })
      .then(memory => {
        Memories.deleteOne({ id: req.params.id })
          .then(result => {
            res.status(204).json({
              message: "Memory deleted successfully"
            });
          })
          .catch(error => {
             res.status(500).json({
             message: 'An error occurred',
             error: error
           });
          })
      })
      .catch(error => {
        res.status(500).json({
          message: 'Memory not found.',
          error: { memory: 'Memory not found'}
        });
      });
  });


    module.exports = router;
