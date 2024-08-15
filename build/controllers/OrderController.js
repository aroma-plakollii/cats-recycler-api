"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrdersByDateAndClient = exports.getOrdersByDate = exports.getOrdersByYear = exports.getOrdersByUserPaged = exports.getOrdersByUser = exports.getOrdersByClientPaged = exports.getOrdersByClient = exports.getUpdateModel = exports.getCreateModel = exports.deleteOrder = exports.updateOrder = exports.createOrder = exports.getAllOrdersPaged = exports.getAllOrders = exports.getSingleOrder = void 0;
const class_validator_1 = require("class-validator");
const ActionType_1 = __importDefault(require("../data/helpers/ActionType"));
const ClientDAL_1 = require("../data/DataAccessLayer/ClientDAL");
const OrderDAL_1 = require("../data/DataAccessLayer/OrderDAL");
const UserDAL_1 = require("../data/DataAccessLayer/UserDAL");
const getSingleOrder = async (req, res) => {
    const { idOrder } = req.params;
    const order = await (0, OrderDAL_1.OrderGetByPrimaryKey)(idOrder);
    return res.status(200).send(order);
};
exports.getSingleOrder = getSingleOrder;
const getAllOrders = async (req, res) => {
    const orders = await (0, OrderDAL_1.OrderGetAll)();
    return res.status(200).send({
        orders
    });
};
exports.getAllOrders = getAllOrders;
const getAllOrdersPaged = async (req, res) => {
    const { page } = req.params;
    const { orders, totalPages } = await (0, OrderDAL_1.OrderGetAllPaged)(page);
    return res.status(200).send({
        orders,
        totalPages
    });
};
exports.getAllOrdersPaged = getAllOrdersPaged;
const createOrder = async (req, res) => {
    const { idClient, quantity, price, orderDate, type, material, kilogram, totalPrice, idUser } = req.body;
    const orderData = {
        idClient,
        quantity,
        price,
        orderDate,
        type,
        material,
        kilogram,
        totalPrice,
        idUser
    };
    try {
        const order = await (0, OrderDAL_1.OrderCreate)(orderData);
        const validationErrors = await (0, class_validator_1.validate)(order);
        if (validationErrors.length > 0) {
            return res.status(400).send({
                status: 400,
                message: 'Validation failed',
                errors: validationErrors
            });
        }
        return res.status(200).send({
            status: 200,
            message: 'Order create successful',
            order
        });
    }
    catch (error) {
        return res.status(500).send({
            status: 500,
            error,
            message: 'An error occurred during order create'
        });
    }
};
exports.createOrder = createOrder;
const updateOrder = async (req, res) => {
    const { idClient, quantity, price, orderDate, type, material, kilogram, totalPrice, idUser } = req.body;
    const { idOrder } = req.params;
    const orderData = {
        idClient,
        quantity,
        price,
        orderDate,
        type,
        material,
        kilogram,
        totalPrice,
        idUser
    };
    try {
        const order = await (0, OrderDAL_1.OrderUpdate)(idOrder, orderData);
        return res.status(200).send({
            status: 200,
            message: 'Order update successful',
            order
        });
    }
    catch (error) {
        return res.status(500).send({
            status: 500,
            message: 'An error occurred during order update'
        });
    }
};
exports.updateOrder = updateOrder;
const deleteOrder = async (req, res) => {
    const { idOrder } = req.params;
    try {
        const order = await (0, OrderDAL_1.OrderDelete)(idOrder);
        return res.status(200).send({
            status: 200,
            message: 'Order remove successful',
            user: order
        });
    }
    catch (error) {
        return res.status(500).send({
            status: 500,
            error,
            message: 'An error occurred during order removal'
        });
    }
};
exports.deleteOrder = deleteOrder;
const getCreateModel = async (req, res) => {
    const clients = await (0, ClientDAL_1.ClientGetAll)();
    const users = await (0, UserDAL_1.UserGetAll)();
    return res.status(200).send({
        operation: ActionType_1.default.CREATE,
        clients,
        users
    });
};
exports.getCreateModel = getCreateModel;
const getUpdateModel = async (req, res) => {
    const clients = await (0, ClientDAL_1.ClientGetAll)();
    const users = await (0, UserDAL_1.UserGetAll)();
    return res.status(200).send({
        operation: ActionType_1.default.UPDATE,
        clients,
        users
    });
};
exports.getUpdateModel = getUpdateModel;
const getOrdersByClient = async (req, res) => {
    const { idClient } = req.params;
    const order = await (0, OrderDAL_1.OrderGetByClient)(idClient);
    return res.status(200).send(order);
};
exports.getOrdersByClient = getOrdersByClient;
const getOrdersByClientPaged = async (req, res) => {
    const { idClient } = req.params;
    const { page } = req.body;
    const { orders, totalPages } = await (0, OrderDAL_1.OrderGetByClientPaged)(idClient, page);
    return res.status(200).send({
        orders,
        totalPages
    });
};
exports.getOrdersByClientPaged = getOrdersByClientPaged;
const getOrdersByUser = async (req, res) => {
    const { idUser } = req.params;
    const orders = await (0, OrderDAL_1.OrderGetByUser)(idUser);
    return res.status(200).send({ orders });
};
exports.getOrdersByUser = getOrdersByUser;
const getOrdersByUserPaged = async (req, res) => {
    const { idUser } = req.params;
    const { page } = req.body;
    const { orders, totalPages } = await (0, OrderDAL_1.OrderGetByUserPaged)(idUser, page);
    return res.status(200).send({
        orders,
        totalPages
    });
};
exports.getOrdersByUserPaged = getOrdersByUserPaged;
const getOrdersByYear = async (req, res) => {
    const { idClient, year } = req.body;
    const order = await (0, OrderDAL_1.OrderGetByYear)(idClient, year);
    return res.status(200).send(order);
};
exports.getOrdersByYear = getOrdersByYear;
const getOrdersByDate = async (req, res) => {
    const { startDate, endDate } = req.body;
    const order = await (0, OrderDAL_1.OrderGetByDate)(startDate, endDate);
    return res.status(200).send(order);
};
exports.getOrdersByDate = getOrdersByDate;
const getOrdersByDateAndClient = async (req, res) => {
    const { idClient, startDate, endDate } = req.body;
    const order = await (0, OrderDAL_1.OrderGetByDateAndClient)(idClient, startDate, endDate);
    return res.status(200).send(order);
};
exports.getOrdersByDateAndClient = getOrdersByDateAndClient;
//# sourceMappingURL=OrderController.js.map