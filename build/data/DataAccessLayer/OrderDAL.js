"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderGetByDateAndClient = exports.OrderGetByDate = exports.OrderGetByYear = exports.OrderGetByUserPaged = exports.OrderGetByUser = exports.OrderGetByClientPaged = exports.OrderGetByClient = exports.OrderDelete = exports.OrderUpdate = exports.OrderCreate = exports.OrderGetAllPaged = exports.OrderGetAll = exports.OrderGetByPrimaryKey = void 0;
const typeorm_1 = require("typeorm");
const appDataSource_1 = require("../../db/appDataSource");
const Order_1 = require("../Entity/Order");
const OrderGetByPrimaryKey = async (idOrder) => {
    const orderRepository = appDataSource_1.AppDataSource.getRepository(Order_1.Order);
    return await orderRepository.findOne({ where: { idOrder }, relations: ['idClient', 'idClient.idCountry', 'idClient.idMunicipality', 'idUser'] });
};
exports.OrderGetByPrimaryKey = OrderGetByPrimaryKey;
const OrderGetAll = async () => {
    const orderRepository = appDataSource_1.AppDataSource.getRepository(Order_1.Order);
    return await orderRepository.find({ relations: ['idClient', 'idUser'], order: { orderDate: 'DESC' } });
};
exports.OrderGetAll = OrderGetAll;
const OrderGetAllPaged = async (page) => {
    const perPage = 20;
    const orderRepository = appDataSource_1.AppDataSource.getRepository(Order_1.Order);
    const offset = (page - 1) * perPage;
    const orders = await orderRepository.find({
        relations: ['idClient', 'idUser'],
        order: { orderDate: 'DESC' },
        take: perPage,
        skip: offset
    });
    const totalCount = await orderRepository.count();
    const totalPages = Math.ceil(totalCount / perPage);
    return { orders, totalPages };
};
exports.OrderGetAllPaged = OrderGetAllPaged;
const OrderCreate = async (orderData) => {
    const orderRepository = appDataSource_1.AppDataSource.getRepository(Order_1.Order);
    orderData.createdAt = new Date();
    orderData.updatedAt = null;
    const order = orderRepository.create(orderData);
    return await orderRepository.save(order);
};
exports.OrderCreate = OrderCreate;
const OrderUpdate = async (idOrder, orderData) => {
    const orderRepository = appDataSource_1.AppDataSource.getRepository(Order_1.Order);
    orderData.updatedAt = new Date();
    const order = await orderRepository.findOneBy({ idOrder });
    if (order) {
        order.idClient = orderData.idClient;
        order.quantity = orderData.quantity;
        order.price = orderData.price;
        order.orderDate = orderData.orderDate;
        order.type = orderData.type;
        order.material = orderData.material;
        order.kilogram = orderData.kilogram;
        order.totalPrice = orderData.totalPrice;
        order.idUser = orderData.idUser;
        return await orderRepository.save(order);
    }
};
exports.OrderUpdate = OrderUpdate;
const OrderDelete = async (idOrder) => {
    const orderRepository = appDataSource_1.AppDataSource.getRepository(Order_1.Order);
    const order = await orderRepository.findOneBy({ idOrder });
    if (order) {
        return await orderRepository.remove(order);
    }
};
exports.OrderDelete = OrderDelete;
const OrderGetByClient = async (idClient) => {
    const orderRepository = appDataSource_1.AppDataSource.getRepository(Order_1.Order);
    return await orderRepository.find({
        where: { idClient: (0, typeorm_1.Equal)(idClient) },
        relations: ['idClient', 'idUser'],
        order: { orderDate: 'DESC' }
    });
};
exports.OrderGetByClient = OrderGetByClient;
const OrderGetByClientPaged = async (idClient, page) => {
    const perPage = 20;
    const orderRepository = appDataSource_1.AppDataSource.getRepository(Order_1.Order);
    const offset = (page - 1) * perPage;
    const [orders, totalCount] = await orderRepository.findAndCount({
        where: { idClient: (0, typeorm_1.Equal)(idClient) },
        relations: ['idClient', 'idUser'],
        order: { orderDate: 'DESC' },
        take: perPage,
        skip: offset
    });
    const totalPages = Math.ceil(totalCount / perPage);
    return { orders, totalPages };
};
exports.OrderGetByClientPaged = OrderGetByClientPaged;
const OrderGetByUser = async (idUser) => {
    const orderRepository = appDataSource_1.AppDataSource.getRepository(Order_1.Order);
    return await orderRepository.find({
        where: { idUser: (0, typeorm_1.Equal)(idUser) },
        relations: ['idClient', 'idUser'],
        order: { orderDate: 'DESC' }
    });
};
exports.OrderGetByUser = OrderGetByUser;
const OrderGetByUserPaged = async (idUser, page) => {
    const perPage = 20;
    const orderRepository = appDataSource_1.AppDataSource.getRepository(Order_1.Order);
    const offset = (page - 1) * perPage;
    const [orders, totalCount] = await orderRepository.findAndCount({
        where: { idUser: (0, typeorm_1.Equal)(idUser) },
        relations: ['idClient', 'idUser'],
        order: { orderDate: 'DESC' },
        take: perPage,
        skip: offset
    });
    const totalPages = Math.ceil(totalCount / perPage);
    return { orders, totalPages };
};
exports.OrderGetByUserPaged = OrderGetByUserPaged;
const OrderGetByYear = async (idClient, year) => {
    const orderRepository = appDataSource_1.AppDataSource.getRepository(Order_1.Order);
    const startDate = new Date(Date.UTC(year, 0, 1, 5, 0, 0));
    const endDate = new Date(Date.UTC(year + 1, 0, 1, 5, 0, 0));
    return await orderRepository.find({
        where: {
            idClient: (0, typeorm_1.Equal)(idClient),
            orderDate: (0, typeorm_1.Between)(startDate, endDate)
        },
        relations: ['idClient', 'idUser'],
    });
};
exports.OrderGetByYear = OrderGetByYear;
const OrderGetByDate = async (startDate, endDate) => {
    const orderRepository = appDataSource_1.AppDataSource.getRepository(Order_1.Order);
    endDate = new Date(endDate);
    endDate.setDate(endDate.getDate() + 1);
    return await orderRepository.find({
        where: {
            orderDate: (0, typeorm_1.Between)(startDate, endDate),
        },
        relations: ['idClient', 'idUser'],
    });
};
exports.OrderGetByDate = OrderGetByDate;
const OrderGetByDateAndClient = async (idClient, startDate, endDate) => {
    const orderRepository = appDataSource_1.AppDataSource.getRepository(Order_1.Order);
    endDate = new Date(endDate);
    endDate.setDate(endDate.getDate() + 1);
    return await orderRepository.find({
        where: {
            idClient: (0, typeorm_1.Equal)(idClient),
            orderDate: (0, typeorm_1.Between)(startDate, endDate),
        },
        relations: ['idClient', 'idUser'],
    });
};
exports.OrderGetByDateAndClient = OrderGetByDateAndClient;
//# sourceMappingURL=OrderDAL.js.map