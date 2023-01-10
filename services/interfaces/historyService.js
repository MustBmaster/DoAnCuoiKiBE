const Service = require("../../services/interfaces/service");
const history = require("../../models/inputModels/history");
const historyRepository = require("../../repositories/historyRepository");

module.exports = new (class extends Service {
  constructor() {
    // Gọi lại tầng UserRepository
    super();
    this.historyRepository = historyRepository;
    this.history = history;
  }

  async IfindById(id) {
    return historyRepository.RfindById(id);
  }
  async Ifind() {
    return historyRepository.Rfind();
  }
  async IfindOne(req) {
    return historyRepository.RfindOne(req);
  }
  async IinsertOne(req) {
    return historyRepository.RinsertOne(req);
  }
  async IdeleteOne(id) {
    return historyRepository.RdeleteOne(id);
  }
  async IupdateOne(id, req) {
    return historyRepository.RupdateOne(id, req);
  }
})();
