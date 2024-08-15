"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserType = exports.createUserType = exports.getAllUserTypes = exports.getSingleUserType = void 0;
const class_validator_1 = require("class-validator");
const UserTypeDAL_1 = require("../data/DataAccessLayer/UserTypeDAL");
const getSingleUserType = async (req, res) => {
    const { idUserType } = req.params;
    const idUserTypeNumber = parseInt(idUserType);
    const userType = await (0, UserTypeDAL_1.UserTypeGetByPrimaryKey)(idUserTypeNumber);
    return res.status(200).send(userType);
};
exports.getSingleUserType = getSingleUserType;
const getAllUserTypes = async (req, res) => {
    const userTypes = await (0, UserTypeDAL_1.UserTypeGetAll)();
    return res.status(200).send({
        userTypes
    });
};
exports.getAllUserTypes = getAllUserTypes;
const createUserType = async (req, res) => {
    const { typeName } = req.body;
    const userTypeData = {
        typeName
    };
    try {
        const userType = await (0, UserTypeDAL_1.UserTypeCreate)(userTypeData);
        const validationErrors = await (0, class_validator_1.validate)(userType);
        if (validationErrors.length > 0) {
            return res.status(400).send({
                message: 'Validation failed',
                errors: validationErrors
            });
        }
        return res.status(200).send({
            message: 'User create successful',
            userType
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({
            error,
            message: 'An error occurred during user create'
        });
    }
};
exports.createUserType = createUserType;
const deleteUserType = async (req, res) => {
    const { idUserType } = req.params;
    try {
        const userType = await (0, UserTypeDAL_1.UserTypeDelete)(idUserType);
        return res.status(200).send({
            message: 'UserType remove successful',
            userType
        });
    }
    catch (error) {
        return res.status(500).send({
            error,
            message: 'An error occurred during userType removal'
        });
    }
};
exports.deleteUserType = deleteUserType;
//# sourceMappingURL=UserTypeController.js.map