const sequenceGenerator = require('./sequenceGenerator');
const Links = require('../models/links');

var express = require('express');
var router = express.Router();

//get
router.get('/', (req, res, next) => {
    Links.find()
    .then((links) => {
        res.status(200).json({
            message: "Retrieved links from the database.",
            links: links,
        });
    })
    .catch((err) => {
        res.status(500).json({
            message: "Error retrieving links from the database.",
            error: err
        });
    });
});

//post
router.post('/', async (req, res, next) => {
    try {
      const maxLinkId= await sequenceGenerator.nextId("links");
  
      const link = new Links({
        id: maxLinkId,
        name: req.body.name,
        url: req.body.url,
        content: req.body.content,
      });
  
      const createdLink = await link.save();
  
      res.status(201).json({
        message: 'Link added successfully',
        link: createdLink
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
    Links.findOne({ id: req.params.id })
      .then(link => {
        link.name = req.body.name;
        link.url = req.body.url;
        link.content = req.body.content;

  
        Links.updateOne({ id: req.params.id }, link)
          .then(result => {
            res.status(204).json({
              message: 'Link updated successfully'
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
          message: 'Link not found.',
          error: { link: 'Link not found'}
        });
      });
  });

  //delete
  router.delete("/:id", (req, res, next) => {
    Links.findOne({ id: req.params.id })
      .then(link => {
        Links.deleteOne({ id: req.params.id })
          .then(result => {
            res.status(204).json({
              message: "Link deleted successfully"
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
          message: 'Link not found.',
          error: { link: 'Link not found'}
        });
      });
  });


    module.exports = router;
