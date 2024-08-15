"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MunicipalityGetAll = exports.MunicipalityGetByPrimaryKey = void 0;
const appDataSource_1 = require("../../db/appDataSource");
const Municipality_1 = require("../Entity/Municipality");
const MunicipalityGetByPrimaryKey = (idClient) => {
    return ['get municipality by primary key'];
};
exports.MunicipalityGetByPrimaryKey = MunicipalityGetByPrimaryKey;
const MunicipalityGetAll = async () => {
    const municipalityRepository = appDataSource_1.AppDataSource.getRepository(Municipality_1.Municipality);
    return await municipalityRepository.find();
};
exports.MunicipalityGetAll = MunicipalityGetAll;
//# sourceMappingURL=MuniciplityDAL.js.map