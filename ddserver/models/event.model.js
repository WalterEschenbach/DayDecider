const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    name: {type: String},
    group: {type: Array},
    test: {type: String}
}, {
    timestamps: true
})

const Event = mongoose.model('events', eventSchema);

module.exports = Event;