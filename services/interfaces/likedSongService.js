const Service = require('../../services/interfaces/service');
const likedSong = require('../../models/inputModels/likedSong');
const likedSongRepository = require('../../repositories/likedSongRepository');

module.exports = new class extends Service {
    constructor() {
        // Gọi lại tầng UserRepository
        super();
        this.likedSongRepository = likedSongRepository;
        this.likedSong = likedSong;
    }

    // Function implement
    async IfindById(id) {
        return likedSongRepository.RfindById(id);
    }
    async Ifind() {
        return likedSongRepository.Rfind();
    }
    async IfindOne(req) {
        return likedSongRepository.RfindOne(req);
    }
    async IinsertOne(req) {
        return likedSongRepository.RinsertOne(req);
    }
    async IdeleteOne(id) {
        return likedSongRepository.RdeleteOne(id);
    }
    async IupdateOne(id, req) {
        return likedSongRepository.RupdateOne(id, req);
    }
}