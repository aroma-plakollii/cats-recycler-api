"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCountries = void 0;
const CountryDAL_1 = require("../data/DataAccessLayer/CountryDAL");
const getAllCountries = async (req, res) => {
    const countries = await (0, CountryDAL_1.CountryGetAll)();
    return res.status(200).send({
        countries
    });
};
exports.getAllCountries = getAllCountries;
//# sourceMappingURL=CountryController.js.map