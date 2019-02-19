const validator = require('validator')
const isEmpty = require('../isEmpty')

module.exports = validateHouseInput = data => {
    let errors = {}

    data.name = !isEmpty(data.name) ? data.name : ''
    data.location = !isEmpty(data.location) ? data.location : ''
    data.description = !isEmpty(data.description) ? data.description : ''
    data.price = !isEmpty(data.price) ? data.price : ''
    data.pictures = !isEmpty(data.pictures) ? data.pictures : ''

    if (!validator.isLength(data.name, { min: 5, max: 30 })) {
        errors.name = 'Name must be between 5 and 30 characters'
    }

    if (validator.isEmpty(data.name)) {
        errors.name = 'Name field is required'
    }

    if (!validator.isLength(data.location, { min: 5, max: 30 })) {
        errors.location = 'Location must be between 5 and 30 characters'
    }

    if (validator.isEmpty(data.location)) {
        errors.location = 'Location field is required'
    }

    if (!validator.isLength(data.description, { min: 5, max: 140 })) {
        errors.description = 'Description must be between 5 and 140 characters'
    }

    if (validator.isEmpty(data.description)) {
        errors.description = 'Description field is required'
    }

    if (validator.isEmpty(data.price)) {
        errors.price = 'Price field is required'
    }

    if (validator.isEmpty(data.pictures)) {
        errors.pictures = 'Please upload at least one picture'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
} 