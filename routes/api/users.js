const router = require('express').Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')

// Load User Model
const User = require('../../models/User')

// @route   GET api/users/test
// @desc    Tests user route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users routes works' }))

// @route   GET api/users/test
// @desc    Tests user route
// @access  Public
router.post('/register', (req, res) => {
    User.findOne()
        .or([{ email: req.body.email }, { username: req.body.username }])
        .then(user => {
            if (user) {
                return res.status(400).json({ email: 'Email already exists' })
            }
            else {
                const avatar = gravatar.url(req.body.email, {
                    s: '200', // Size
                    r: 'pg', // Rating
                    d: 'mm' // Default
                });

                const newUser = new User({
                    name: req.body.name,
                    username: req.body.username,
                    email: req.body.email,
                    avatar,
                    password: req.body.password
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err))
                    })
                })
            }
        })
})
module.exports = router