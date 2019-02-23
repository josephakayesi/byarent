const router = require('express').Router()
const mongoose = require('mongoose')
const passport = require('passport')

// Load Input Validation
const validateHouseInput = require('../../validation/house/house')

// Load House  Model  s
const House = require('../../models/House')

// @route   GET api/houses/test
// @desc    Tests house route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'House route works' }))

// @route   GET api/houses
// @desc    Get houses
// @access  Public
router.get('/', (req, res) => {
    House.find()
        .sort({ date: -1 })
        .then(houses => res.json(houses))
        .catch(err => res.status(404).json({ noHousesFound: 'No houses found' }))
})

// @route   GET api/houses
// @desc    Get house by id
// @access  Public
router.get('/:id', (req, res) => {
    House.findById(req.params.id)
        .then(house => res.json(house))
        .catch(err => res.status(404).json({ noHouseFound: 'No house found with that ID' }))
})


// @route   POST api/houses
// @desc    Create or edit house
// @access  Pivate
router.post('/', passport.authenticate('admin', { session: false }), (req, res) => {
    const { errors, isValid } = validateHouseInput(req.body)

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors)
    }

    const houseFields = {
        name: req.body.name,
        location: req.body.location,
        description: req.body.description,
        price: req.body.price,
        pictures: req.body.pictures.split(','),
        createdBy: req.user.id
    }

    House.findOne({ _id: req.body.id })
        .then(house => {
            if (house) {
                House.findOneAndUpdate({ _id: req.body.id }, { $set: houseFields }, { new: true })
                    .then(house => res.json(house))
            }
            else {
                new House(houseFields).save()
                    .then(house => res.json(house))
            }
        })
})

// @route   UPDATE api/houses/:id
// @desc    Update house by id
// @access  Private
router.delete('/:id', passport.authenticate('admin', { session: false }), (req, res) => {
    House.findById(req.params.id)
        .then(house => {
            house.remove()
                .then(() => res.json({ success: true }))
        })
        .catch(err => res.status(404).json({ houseNotFound: 'No house found with that ID' }))
})

module.exports = router