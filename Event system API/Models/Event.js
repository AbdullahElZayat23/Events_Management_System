const mongoose = require('mongoose');
const autoINC = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const Event_schema = new mongoose.Schema({
    _id: Number,
    Title: { type: String, required: [true, 'Title is required'] },
    Eventdate: Date,
    MainSpeakerID: Schema.Types.ObjectId,
    SubSpeakerSID: [{ type: Schema.Types.ObjectId, ref: 'Speaker' }],
    StudentSID: [{ type: Number, ref: 'Student' }],
});

Event_schema.plugin(autoINC, { id: 'event_id_seq', inc_field: '_id' });
module.exports = mongoose.model('Event', Event_schema);