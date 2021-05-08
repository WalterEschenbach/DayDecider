const mongoose = require('mongoose')
const Schema = mongoose.Schema

const datesSchema = new Schema({
    email: {type: String},
    startDate: {type: String},
    endDate: {type: String},
    eventFocus: {type: String},
}, {
    timestamps: false
})

const Date = mongoose.model('dates', datesSchema);

module.exports = Date;