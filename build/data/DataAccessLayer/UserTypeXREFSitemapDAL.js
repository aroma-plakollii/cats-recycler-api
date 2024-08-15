"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTypeXREFSitemapDelete = exports.UserTypeXREFSitemapUpdate = exports.UserTypeXREFSitemapCreate = exports.UserTypeXREFSitemapGetByAuthorizaton = exports.UserTypeXREFSitemapGetBySitemap = exports.UserTypeXREFSitemapGetByUserType = exports.UserTypeXREFSitemapGetAll = exports.UserTypeXREFSitemapGetByPrimaryKey = void 0;
const appDataSource_1 = require("../../db/appDataSource");
const UserTypeXREFSitemap_1 = require("../Entity/UserTypeXREFSitemap");
const UserTypeXREFSitemapGetByPrimaryKey = async (idUserTypeXREFSitemap) => {
    const userTypeXREFSitemapRepository = appDataSource_1.AppDataSource.getRepository(UserTypeXREFSitemap_1.UserTypeXREFSitemap);
    return await userTypeXREFSitemapRepository.findOne({ where: { idUserTypeXREFSitemap }, relations: ['idUserType', 'idSitemap'] });
};
exports.UserTypeXREFSitemapGetByPrimaryKey = UserTypeXREFSitemapGetByPrimaryKey;
const UserTypeXREFSitemapGetAll = async () => {
    const userTypeXREFSitemapRepository = appDataSource_1.AppDataSource.getRepository(UserTypeXREFSitemap_1.UserTypeXREFSitemap);
    return await userTypeXREFSitemapRepository.find({ relations: ['idUserType', 'idSitemap'] });
};
exports.UserTypeXREFSitemapGetAll = UserTypeXREFSitemapGetAll;
const UserTypeXREFSitemapGetByUserType = async (idUserType) => {
    const userTypeXREFSitemapRepository = appDataSource_1.AppDataSource.getRepository(UserTypeXREFSitemap_1.UserTypeXREFSitemap);
    return await userTypeXREFSitemapRepository.find({
        where: {
            idUserType: idUserType
        },
        relations: ['idUserType', 'idSitemap']
    });
};
exports.UserTypeXREFSitemapGetByUserType = UserTypeXREFSitemapGetByUserType;
const UserTypeXREFSitemapGetBySitemap = async (idSitemap) => {
    const userTypeXREFSitemapRepository = appDataSource_1.AppDataSource.getRepository(UserTypeXREFSitemap_1.UserTypeXREFSitemap);
    return await userTypeXREFSitemapRepository.find({
        where: {
            idSitemap: idSitemap
        },
        relations: ['idUserType', 'idSitemap']
    });
};
exports.UserTypeXREFSitemapGetBySitemap = UserTypeXREFSitemapGetBySitemap;
const UserTypeXREFSitemapGetByAuthorizaton = (idSitemap) => {
    return ['get all by authorization'];
};
exports.UserTypeXREFSitemapGetByAuthorizaton = UserTypeXREFSitemapGetByAuthorizaton;
const UserTypeXREFSitemapCreate = async (userTypeXREFSitemapData) => {
    const userTypeXREFSitemapRepository = appDataSource_1.AppDataSource.getRepository(UserTypeXREFSitemap_1.UserTypeXREFSitemap);
    userTypeXREFSitemapData.createdAt = new Date();
    userTypeXREFSitemapData.updatedAt = null;
    const userTypeXREFSitemap = userTypeXREFSitemapRepository.create(userTypeXREFSitemapData);
    return await userTypeXREFSitemapRepository.save(userTypeXREFSitemap);
};
exports.UserTypeXREFSitemapCreate = UserTypeXREFSitemapCreate;
const UserTypeXREFSitemapUpdate = async (idUserTypeXREFSitemap, userTypeXREFSitemapData) => {
    const userTypeXREFSitemapRepository = appDataSource_1.AppDataSource.getRepository(UserTypeXREFSitemap_1.UserTypeXREFSitemap);
    userTypeXREFSitemapData.updatedAt = new Date();
    const userTypeXREFSitemap = await userTypeXREFSitemapRepository.findOneBy({ idUserTypeXREFSitemap });
    if (userTypeXREFSitemap) {
        userTypeXREFSitemap.idUserType = userTypeXREFSitemapData.idUserType;
        userTypeXREFSitemap.idSitemap = userTypeXREFSitemapData.idSitemap;
        userTypeXREFSitemap.hasAuthorization = userTypeXREFSitemapData.hasAuthorization;
        userTypeXREFSitemap.create = userTypeXREFSitemapData.create;
        userTypeXREFSitemap.read = userTypeXREFSitemapData.read;
        userTypeXREFSitemap.update = userTypeXREFSitemapData.update;
        userTypeXREFSitemap.destroy = userTypeXREFSitemapData.destroy;
        return await userTypeXREFSitemapRepository.save(userTypeXREFSitemap);
    }
};
exports.UserTypeXREFSitemapUpdate = UserTypeXREFSitemapUpdate;
const UserTypeXREFSitemapDelete = async (idUserTypeXREFSitemap) => {
    const userTypeXREFSitemapRepository = appDataSource_1.AppDataSource.getRepository(UserTypeXREFSitemap_1.UserTypeXREFSitemap);
    const userTypeXREFSitemap = await userTypeXREFSitemapRepository.findOneBy({ idUserTypeXREFSitemap });
    if (userTypeXREFSitemap) {
        return await userTypeXREFSitemapRepository.remove(userTypeXREFSitemap);
    }
};
exports.UserTypeXREFSitemapDelete = UserTypeXREFSitemapDelete;
//# sourceMappingURL=UserTypeXREFSitemapDAL.js.map