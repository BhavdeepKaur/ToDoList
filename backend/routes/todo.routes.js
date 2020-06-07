let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Student Model
let ToDoSchema = require('../models/ToDo');

// CREATE ToDo task
router.route('/create-todo').post((req, res, next) => {
  ToDoSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ ToDo tasks
router.route('/').get((req, res) => {
  ToDoSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single ToDo task
router.route('/edit-todo/:id').get((req, res) => {
  ToDoSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update ToDo task
router.route('/update-todo/:id').put((req, res, next) => {
  ToDoSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('ToDo Task updated successfully !')
    }
  })
})

// Delete Student
router.route('/delete-todo/:id').delete((req, res, next) => {
  ToDoSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;