const express = require('express');
const router = express.Router();
const likedSongController = require('../controllers/likedSongController');
// const auth = require('../middlewares/auth');

router.get('/', likedSongController.Load_List);
router.get('/:user_id', likedSongController.Find_By_User);
router.post('/', likedSongController.Insert);
router.delete('/:id', likedSongController.Delete);

module.exports = router;