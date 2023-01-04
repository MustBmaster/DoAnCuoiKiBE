const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let LikedSongSchema = new Schema({
    key: { type: Number },
    name: { type: String },
    artist: { type: String },
    image: { type: String },
    user_id: { type: String },
});

// Export the model
module.exports = mongoose.model('likedSong', LikedSongSchema, "likedSong");