"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTypeDelete = exports.UserTypeCreate = exports.UserTypeGetAll = exports.UserTypeGetByPrimaryKey = void 0;
const appDataSource_1 = require("../../db/appDataSource");
const UserType_1 = require("../Entity/UserType");
const UserTypeGetByPrimaryKey = async (idUserType) => {
    const userTypeRepository = appDataSource_1.AppDataSource.getRepository(UserType_1.UserType);
    return await userTypeRepository.findOne({ where: { idUserType } });
};
exports.UserTypeGetByPrimaryKey = UserTypeGetByPrimaryKey;
const UserTypeGetAll = async () => {
    const userTypeRepository = appDataSource_1.AppDataSource.getRepository(UserType_1.UserType);
    return await userTypeRepository.find();
};
exports.UserTypeGetAll = UserTypeGetAll;
const UserTypeCreate = async (userTypeData) => {
    const userTypeRepository = appDataSource_1.AppDataSource.getRepository(UserType_1.UserType);
    userTypeData.createdAt = new Date();
    userTypeData.updatedAt = null;
    const userType = userTypeRepository.create(userTypeData);
    return await userTypeRepository.save(userType);
};
exports.UserTypeCreate = UserTypeCreate;
const UserTypeDelete = async (idUserType) => {
    const userTypeRepository = appDataSource_1.AppDataSource.getRepository(UserType_1.UserType);
    const userType = await userTypeRepository.findOneBy({ idUserType });
    if (userType) {
        return await userTypeRepository.remove(userType);
    }
};
exports.UserTypeDelete = UserTypeDelete;
//# sourceMappingURL=UserTypeDAL.js.map