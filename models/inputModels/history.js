const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let HistorySchema = new Schema({
    key: { type: Number },
    name: { type: String },
    artist: { type: String },
    image: { type: String },
    last_listen: { type: Date },
    user_id: { type: String },
});

// Export the model
module.exports = mongoose.model('history', HistorySchema, "history");