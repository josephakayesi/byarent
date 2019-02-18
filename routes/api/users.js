const router = require('express').Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secretOrKey = require('../../config/keys').secretOrKey

// Load User Model
const User = require('../../models/User')

// @route   GET api/users/test
// @desc    Tests user route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users routes works' }))

// @route   POST api/users/register
// @desc    Register user
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

// @route   GET api/users/login
// @desc    Login user / Returning JWT Tokend
// @access  Public
router.post('/login', (req, res) => {
    const usernameOrEmail = req.body.usernameOrEmail
    const password = req.body.password

    // Find user by username or email
    User.findOne()
        .or([{ email: usernameOrEmail }, { username: usernameOrEmail }])
        .then(user => {
            if (!user) {
                return res.status(404).json({ usernameOrEmail: 'User not found' })
            }

            // Check password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        // User Matched
                        const payload = { id: user.id, name: user.name, username: user.username, avatar: user.avatar }; //Create JWT Payload

                        // Sign Token
                        jwt.sign(payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {
                            res.json({
                                success: true,
                                token: `Bearer ${token}`
                            });
                        });
                    }
                    else {
                        return res.status(400).json({ password: 'Wrong password' })
                    }
                })
        })
        .catch(err => console.log(err))
})



module.exports = router