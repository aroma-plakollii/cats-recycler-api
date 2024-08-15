"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryGetAll = exports.CountryGetByPrimaryKey = void 0;
const appDataSource_1 = require("../../db/appDataSource");
const Country_1 = require("../Entity/Country");
const CountryGetByPrimaryKey = (idClient) => {
    return ['get country by primary key'];
};
exports.CountryGetByPrimaryKey = CountryGetByPrimaryKey;
const CountryGetAll = async () => {
    const countryRepository = appDataSource_1.AppDataSource.getRepository(Country_1.Country);
    return await countryRepository.find();
};
exports.CountryGetAll = CountryGetAll;
//# sourceMappingURL=CountryDAL.js.map