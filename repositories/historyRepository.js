const Repository = require('../repositories/repository');
const history = require('../models/inputModels/history');

module.exports = new class extends Repository {
    async RfindById(id) {
        return history.findById({ _id: id }).lean();
    }
    async Rfind() {
        return history.find().lean();
    }
    async RfindOne(req) {
        return history.findOne(req).lean();
    }
    async RinsertOne(req) {
        return history.create(req).then();
    }
    async RdeleteOne(id) {
        return history.findByIdAndRemove(id).lean();
    }
    async RupdateOne(id, req) {
        return history.findByIdAndUpdate(id, { $set: req }).lean();
    }
}