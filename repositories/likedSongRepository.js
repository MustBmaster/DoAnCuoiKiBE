const Repository = require('../repositories/repository');
const likedSong = require('../models/inputModels/likedSong');

module.exports = new class extends Repository {
    async RfindById(id) {
        return likedSong.findById({ _id: id }).lean();
    }
    async Rfind() {
        return likedSong.find().lean();
    }
    async RfindOne(req) {
        return likedSong.findOne(req).lean();
    }
    async RinsertOne(req) {
        return likedSong.create(req).then();
    }
    async RdeleteOne(id) {
        return likedSong.findByIdAndRemove(id).lean();
    }
    async RupdateOne(id, req) {
        return likedSong.findByIdAndUpdate(id, { $set: req }).lean();
    }
}