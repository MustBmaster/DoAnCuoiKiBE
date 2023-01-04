const express = require('express');
const router = express.Router();
const historyController = require('../controllers/historyController');
// const auth = require('../middlewares/auth');

router.get('/', historyController.Load_List);
router.get('/:user_id', historyController.Find_By_User);
router.post('/', historyController.Insert);
router.delete('/:id', historyController.Delete);

module.exports = router;