"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSaleByClientPaged = exports.getSaleByClient = exports.getUpdateModel = exports.getCreateModel = exports.deleteSale = exports.updateSale = exports.createSale = exports.getAllSalesPaged = exports.getAllSales = exports.getSingleSale = void 0;
const class_validator_1 = require("class-validator");
const ActionType_1 = __importDefault(require("../data/helpers/ActionType"));
const ClientDAL_1 = require("../data/DataAccessLayer/ClientDAL");
const SaleDAL_1 = require("../data/DataAccessLayer/SaleDAL");
const getSingleSale = async (req, res) => {
    const { idSale } = req.params;
    const sale = await (0, SaleDAL_1.SaleGetByPrimaryKey)(idSale);
    return res.status(200).send(sale);
};
exports.getSingleSale = getSingleSale;
const getAllSales = async (req, res) => {
    const sales = await (0, SaleDAL_1.SaleGetAll)();
    return res.status(200).send({
        sales
    });
};
exports.getAllSales = getAllSales;
const getAllSalesPaged = async (req, res) => {
    const { page } = req.params;
    const { sales, totalPages } = await (0, SaleDAL_1.SaleGetAllPaged)(page);
    return res.status(200).send({
        sales,
        totalPages
    });
};
exports.getAllSalesPaged = getAllSalesPaged;
const createSale = async (req, res) => {
    const { date, description, quantity, price, totalPrice, kilogram, idClient } = req.body;
    try {
        const lastSale = await (0, SaleDAL_1.SaleGetLast)();
        let saleNumber = 'IN001';
        if (lastSale) {
            const lastNumber = parseInt(lastSale.saleNumber.slice(2));
            const nextNumber = lastNumber + 1;
            saleNumber = `IN${nextNumber.toString().padStart(3, '0')}`;
        }
        const saleData = {
            saleNumber,
            date,
            description,
            quantity,
            price,
            totalPrice,
            kilogram,
            idClient,
        };
        const sale = await (0, SaleDAL_1.SaleCreate)(saleData);
        const validationErrors = await (0, class_validator_1.validate)(sale);
        if (validationErrors.length > 0) {
            return res.status(400).send({
                status: 400,
                message: 'Validation failed',
                errors: validationErrors
            });
        }
        return res.status(200).send({
            status: 200,
            message: 'Sale create successful',
            sale
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({
            status: 500,
            error,
            message: 'An error occurred during sale create'
        });
    }
};
exports.createSale = createSale;
const updateSale = async (req, res) => {
    const { date, description, quantity, price, totalPrice, kilogram, idClient } = req.body;
    const { idSale } = req.params;
    const saleData = {
        date,
        description,
        quantity,
        price,
        totalPrice,
        kilogram,
        idClient,
    };
    try {
        const sale = await (0, SaleDAL_1.SaleUpdate)(idSale, saleData);
        return res.status(200).send({
            status: 200,
            message: 'Sale update successful',
            sale
        });
    }
    catch (error) {
        return res.status(500).send({
            status: 500,
            message: 'An error occurred during sale update'
        });
    }
};
exports.updateSale = updateSale;
const deleteSale = async (req, res) => {
    const { idSale } = req.params;
    try {
        const sale = await (0, SaleDAL_1.SaleDelete)(idSale);
        return res.status(200).send({
            status: 200,
            message: 'Sale remove successful',
            sale
        });
    }
    catch (error) {
        return res.status(500).send({
            status: 500,
            error,
            message: 'An error occurred during sale removal'
        });
    }
};
exports.deleteSale = deleteSale;
const getCreateModel = async (req, res) => {
    const clients = await (0, ClientDAL_1.ClientGetAll)();
    return res.status(200).send({
        operation: ActionType_1.default.CREATE,
        clients,
    });
};
exports.getCreateModel = getCreateModel;
const getUpdateModel = async (req, res) => {
    const clients = await (0, ClientDAL_1.ClientGetAll)();
    return res.status(200).send({
        operation: ActionType_1.default.UPDATE,
        clients,
    });
};
exports.getUpdateModel = getUpdateModel;
const getSaleByClient = async (req, res) => {
    const { idClient } = req.params;
    const sales = await (0, SaleDAL_1.SaleGetByClient)(idClient);
    return res.status(200).send(sales);
};
exports.getSaleByClient = getSaleByClient;
const getSaleByClientPaged = async (req, res) => {
    const { idClient } = req.params;
    const { page } = req.body;
    const { sales, totalPages } = await (0, SaleDAL_1.SaleGetByClientPaged)(idClient, page);
    return res.status(200).send({
        sales,
        totalPages
    });
};
exports.getSaleByClientPaged = getSaleByClientPaged;
//# sourceMappingURL=SaleController.js.map