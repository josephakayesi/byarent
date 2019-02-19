const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const HouseSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    pictures: { type: [String], required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'admins' },
    date: { type: String, default: Date.now }
})

module.exports = House = mongoose.model('houses', HouseSchema)