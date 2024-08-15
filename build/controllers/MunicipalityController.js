"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMunicipalities = void 0;
const MuniciplityDAL_1 = require("../data/DataAccessLayer/MuniciplityDAL");
const getAllMunicipalities = async (req, res) => {
    const municipalities = await (0, MuniciplityDAL_1.MunicipalityGetAll)();
    return res.status(200).send({
        municipalities
    });
};
exports.getAllMunicipalities = getAllMunicipalities;
//# sourceMappingURL=MunicipalityController.js.map