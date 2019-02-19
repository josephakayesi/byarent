const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const AdminSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String },
    isAdmin: {type: Boolean, default: true }, // isAdmin must always be true to add a new home. Differentiat users and admins :: Might be removed
    date: { type: String, default: Date.now }
})

module.exports = Admin = mongoose.model('admins', AdminSchema)