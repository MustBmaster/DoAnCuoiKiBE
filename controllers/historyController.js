const response = require('../models/outputModels/responseBase');
const historyService = require('../services/interfaces/historyService');
const handleError = require('../commons/handleErrors');
const printStacktrace = handleError.PrintStacktrace;

exports.Load_List = async (req, res) => {
    try {
        const result = await historyService.Ifind();
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
        let reqhistory = {
            key: req.body.key,
            name: req.body.name,
            artist: req.body.artist,
            image: req.body.image,
            last_listen: req.body.last_listen,
            user_id: req.body.user_id,
        };
        const result = await historyService.IinsertOne(reqhistory);
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
        const result = await historyService.IdeleteOne({ _id: req.params.id });
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
        const result = await historyService.IfindOne({ user_id: req.params.user_id });
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