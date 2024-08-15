"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserTypeXREFSitemapBySitemap = exports.getUserTypeXREFSitemapByUserType = exports.getUpdateModel = exports.getCreateModel = exports.deleteUserTypeXREFSitemap = exports.updateUserTypeXREFSitemap = exports.createUserTypeXREFSitemap = exports.getAllUserTypeXREFSitemaps = exports.getSingleUserTypeXREFSitemap = void 0;
const class_validator_1 = require("class-validator");
const ActionType_1 = __importDefault(require("../data/helpers/ActionType"));
const SitemapDAL_1 = require("../data/DataAccessLayer/SitemapDAL");
const UserTypeDAL_1 = require("../data/DataAccessLayer/UserTypeDAL");
const UserTypeXREFSitemapDAL_1 = require("../data/DataAccessLayer/UserTypeXREFSitemapDAL");
const getSingleUserTypeXREFSitemap = async (req, res) => {
    const { idUserTypeXREFSitemap } = req.params;
    const userTypeXREFSitemap = await (0, UserTypeXREFSitemapDAL_1.UserTypeXREFSitemapGetByPrimaryKey)(idUserTypeXREFSitemap);
    return res.status(200).send(userTypeXREFSitemap);
};
exports.getSingleUserTypeXREFSitemap = getSingleUserTypeXREFSitemap;
const getAllUserTypeXREFSitemaps = async (req, res) => {
    const userTypeXREFSitemap = await (0, UserTypeXREFSitemapDAL_1.UserTypeXREFSitemapGetAll)();
    return res.status(200).send(userTypeXREFSitemap);
};
exports.getAllUserTypeXREFSitemaps = getAllUserTypeXREFSitemaps;
const createUserTypeXREFSitemap = async (req, res) => {
    const { idUserType, idSitemap, hasAuthorization, create, read, update, destroy } = req.body;
    const userTypeXREFSitemapData = {
        idUserType,
        idSitemap,
        hasAuthorization,
        create,
        read,
        update,
        destroy
    };
    try {
        const userTypeXREFSitemap = await (0, UserTypeXREFSitemapDAL_1.UserTypeXREFSitemapCreate)(userTypeXREFSitemapData);
        const validationErrors = await (0, class_validator_1.validate)(userTypeXREFSitemap);
        if (validationErrors.length > 0) {
            return res.status(400).send({
                status: 400,
                message: 'Validation failed',
                errors: validationErrors
            });
        }
        return res.status(200).send({
            status: 200,
            message: 'UserTypeXREFSitemap create successful',
            userTypeXREFSitemap
        });
    }
    catch (error) {
        return res.status(500).send({
            status: 500,
            error,
            message: 'An error occurred during userTypeXREFSitemap create'
        });
    }
};
exports.createUserTypeXREFSitemap = createUserTypeXREFSitemap;
const updateUserTypeXREFSitemap = async (req, res) => {
    const { idUserType, idSitemap, hasAuthorization, create, read, update, destroy } = req.body;
    const { idUserTypeXREFSitemap } = req.params;
    const userTypeXREFSitemapData = {
        idUserType,
        idSitemap,
        hasAuthorization,
        create,
        read,
        update,
        destroy
    };
    try {
        const userTypeXREFSitemap = await (0, UserTypeXREFSitemapDAL_1.UserTypeXREFSitemapUpdate)(idUserTypeXREFSitemap, userTypeXREFSitemapData);
        return res.status(200).send({
            status: 200,
            message: 'UserTypeXREFSitemap update successful',
            userTypeXREFSitemap
        });
    }
    catch (error) {
        return res.status(500).send({
            status: 500,
            message: 'An error occurred during userTypeXREFSitemap update'
        });
    }
};
exports.updateUserTypeXREFSitemap = updateUserTypeXREFSitemap;
const deleteUserTypeXREFSitemap = async (req, res) => {
    const { idUserTypeXREFSitemap } = req.params;
    try {
        const userTypeXREFSitemap = await (0, UserTypeXREFSitemapDAL_1.UserTypeXREFSitemapDelete)(idUserTypeXREFSitemap);
        return res.status(200).send({
            status: 200,
            message: 'UserTypeXREFSitemap remove successful',
            user: userTypeXREFSitemap
        });
    }
    catch (error) {
        return res.status(500).send({
            status: 500,
            error,
            message: 'An error occurred during userTypeXREFSitemap removal'
        });
    }
};
exports.deleteUserTypeXREFSitemap = deleteUserTypeXREFSitemap;
const getCreateModel = async (req, res) => {
    const userTypes = await (0, UserTypeDAL_1.UserTypeGetAll)();
    const sitemaps = await (0, SitemapDAL_1.SitemapGetAll)();
    return res.status(200).send({
        operation: ActionType_1.default.CREATE,
        userTypes,
        sitemaps
    });
};
exports.getCreateModel = getCreateModel;
const getUpdateModel = async (req, res) => {
    const userTypes = await (0, UserTypeDAL_1.UserTypeGetAll)();
    const sitemaps = await (0, SitemapDAL_1.SitemapGetAll)();
    return res.status(200).send({
        operation: ActionType_1.default.UPDATE,
        userTypes,
        sitemaps
    });
};
exports.getUpdateModel = getUpdateModel;
const getUserTypeXREFSitemapByUserType = async (req, res) => {
    const { idUserType } = req.params;
    try {
        const userTypeXREFSitemap = await (0, UserTypeXREFSitemapDAL_1.UserTypeXREFSitemapGetByUserType)(idUserType);
        return res.status(200).send(userTypeXREFSitemap);
    }
    catch (e) {
        return res.status(400).send(e);
    }
};
exports.getUserTypeXREFSitemapByUserType = getUserTypeXREFSitemapByUserType;
const getUserTypeXREFSitemapBySitemap = async (req, res) => {
    const { idSitemap } = req.params;
    const userTypeXREFSitemap = await (0, UserTypeXREFSitemapDAL_1.UserTypeXREFSitemapGetBySitemap)(idSitemap);
    return res.status(200).send(userTypeXREFSitemap);
};
exports.getUserTypeXREFSitemapBySitemap = getUserTypeXREFSitemapBySitemap;
//# sourceMappingURL=UserTypeXREFSitemapController.js.map