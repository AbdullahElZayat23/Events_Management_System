const mongoose = require('mongoose');
const autoINC = require('mongoose-sequence')(mongoose);

const Event_schema = new mongoose.Schema({
    _id: Number,
    Title: { type: String, required: [true, 'Title is required'] },
    Eventdate: String,
    MainSpeakerID: Number,
    SubSpeakerSID: [{ type: Number, ref: 'Speaker' }],
    StudentSID: [{ type: Number, ref: 'Student' }],
    Status: String,
});

Event_schema.plugin(autoINC, { id: 'event_id_seq', inc_field: '_id' });
module.exports = mongoose.model('Event', Event_schema);