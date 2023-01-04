const response = require('../models/outputModels/responseBase');
const likedSongService = require('../services/interfaces/likedSongService');
const handleError = require('../commons/handleErrors');
const printStacktrace = handleError.PrintStacktrace;

exports.Load_List = async (req, res) => {
    try {
        const result = await likedSongService.Ifind();
        if (!result) {
            printStacktrace.errorNotFound(req, res);
        }
        else {
            response.ResponseBase(req, res, res.statusCode, "Thành công !", result);
        }
    }
    catch (ex) {
        printStacktrace.throwException(req, res, ex);
    }
};

exports.Insert = async (req, res) => {
    try {
        let reqlikedSong = {
            key: req.body.key,
            name: req.body.name,
            artist: req.body.artist,
            image: req.body.image,
            user_id: req.body.user_id,
        };
        const result = await likedSongService.IinsertOne(reqlikedSong);
        if (result) {
            response.ResponseBase(req, res, res.statusCode, "Thành công !");
        }
        else {
            printStacktrace.errorBadRequest(req, res);
        }
    }
    catch (ex) {
        printStacktrace.throwException(req, res, ex);
    }
};

exports.Delete = async (req, res) => {
    try {
        const result = await likedSongService.IdeleteOne({ _id: req.params.id });
        if (result) {
            response.ResponseBase(req, res, res.statusCode, "Xóa thành công !");
        }
        else {
            printStacktrace.errorBadRequest(req, res);
        }
    }
    catch (ex) {
        printStacktrace.throwException(req, res, ex);
    }
};

exports.Find_By_User = async (req, res) => {
    try {
        const result = await likedSongService.IfindOne({ user_id: req.params.user_id });
        if (result) {
            response.ResponseBase(req, res, res.statusCode, "Thành công !");
        }
        else {
            printStacktrace.errorNotFound(req, res);
        }
    }
    catch (ex) {
        printStacktrace.throwException(req, res, ex);
    }
};