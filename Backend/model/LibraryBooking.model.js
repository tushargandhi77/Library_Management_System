const mongoose = require('mongoose')

const BookLibraryDetailsSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    seat: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: Date, // Change to Date type
        required: true
    },
    endTime: {
        type: Date, // Change to Date type
        required: true
    }
})

module.exports = mongoose.model('BookLibraryDetails',BookLibraryDetailsSchema);