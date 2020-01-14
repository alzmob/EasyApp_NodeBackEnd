const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    company: String,
    firstName: String,
    surName: String,
    email: String,
    phoneNumber: String,
    requestType: String,
    description: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
