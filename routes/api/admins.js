const router = require('express').Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const keys = require('../../config/keys')

// Load Input Validation
const validateRegisterInput = require('../../validation/admin/register')
const validateLoginInput = require('../../validation/admin/login')

// Load Admin Model
const Admin = require('../../models/Admin')

// @route   GET api/admins/test
// @desc    Tests admin route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Posts routes works' }))

// @route   POST api/admins/register
// @desc    Register admin
// @access  Public
router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body)

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors)
    }
    Admin.findOne()
        .or([{ email: req.body.email }, { username: req.body.username }])
        .then(admin => {
            if (admin) {
                errors.usernameOrEmail = 'Username or email already exists'
                return res.status(400).json(errors)
            }
            else {
                const avatar = gravatar.url(req.body.email, {
                    s: '200', // Size
                    r: 'pg', // Rating
                    d: 'mm' // Default
                });

                const newAdmin = new Admin({
                    name: req.body.name,
                    username: req.body.username,
                    email: req.body.email,
                    avatar,
                    password: req.body.password
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newAdmin.password, salt, (err, hash) => {
                        if (err) throw err;
                        newAdmin.password = hash;
                        newAdmin.save()
                            .then(admin => res.json(admin))
                            .catch(err => console.log(err))
                    })
                })
            }
        })
})

// @route   GET api/admin/login
// @desc    Login admin / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body)

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors)
    }

    const usernameOrEmail = req.body.usernameOrEmail
    const password = req.body.password

    // Find admin by username or email
    Admin.findOne()
        .or([{ email: usernameOrEmail }, { username: usernameOrEmail }])
        .then(admin => {
            if (!admin) {
                errors.usernameOrEmail = 'Admin not found'
                return res.status(404).json(errors)
            }

            // Check password
            bcrypt.compare(password, admin.password)
                .then(isMatch => {
                    if (isMatch) {
                        // Admin Matched
                        const payload = { id: admin.id, name: admin.name, username: admin.username, avatar: admin.avatar }; //Create JWT Payload

                        // Sign Token
                        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                            res.json({
                                success: true,
                                token: `Bearer ${token}`
                            });
                        });
                    }
                    else {
                        errors.password = 'Wrong password'
                        return res.status(400).json(errors)
                    }
                })
        })
        .catch(err => console.log(err))
})

// @route   GET api/admins/current
// @desc    Return current admin
// @access  Private
router.get('/current', passport.authenticate('admin', { session: false }), (req, res) => {
        res.json({
            id: req.user.id,
            name: req.user.name,
            username: req.user.username,
            email: req.user.email
        })
})

module.exports = router