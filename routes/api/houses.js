const router = require('express').Router()
const mongoose = require('mongoose')
const passport = require('passport')

// Load Input Validation
const validateHouseInput = require('../../validation/house/house')

// Load House Model
const House = require('../../models/House')

// @route   GET api/houses/test
// @desc    Tests house route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'House route works' }))

// @route   POST api/houses
// @desc    Creste house
// @access  Pivate
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateHouseInput(req.body)

    // Check Validation
    if(!isValid){
        return res.status(400).json(errors)
    }

    const newHouse = new House({
        name: req.body.name,
        location: req.body.location,
        description: req.body.description,
        price: req.body.price,
        pictures: req.body.pictures,
        createdBy: req.user.id
    })

    newHouse.save()
        .then(house => res.json(house))
})

module.exports = router