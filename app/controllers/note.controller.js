const Note = require('../models/note.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Create a Note
    console.log(req.body)
    const note = new Note({
        company: req.body.company,
        firstName: req.body.firstName,
        surName: req.body.surName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        requestType: req.body.requestType,
        description: req.body.description,
    });

    // Save Note in the database
    note.save()
    .then(data => {
        res.status(200).json({message: 'success'})
    }).catch(err => {
        res.status(500).json({message: 'fail'})
    });
};
