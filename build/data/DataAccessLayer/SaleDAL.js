"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleGetByClientPaged = exports.SaleGetByClient = exports.SaleGetLast = exports.SaleDelete = exports.SaleUpdate = exports.SaleCreate = exports.SaleGetAllPaged = exports.SaleGetAll = exports.SaleGetByPrimaryKey = void 0;
const appDataSource_1 = require("../../db/appDataSource");
const Sale_1 = require("../Entity/Sale");
const typeorm_1 = require("typeorm");
const SaleGetByPrimaryKey = async (idSale) => {
    const saleRepository = appDataSource_1.AppDataSource.getRepository(Sale_1.Sale);
    return await saleRepository.findOne({ where: { idSale }, relations: ['idClient', 'idClient.idMunicipality'] });
};
exports.SaleGetByPrimaryKey = SaleGetByPrimaryKey;
const SaleGetAll = async () => {
    const saleRepository = appDataSource_1.AppDataSource.getRepository(Sale_1.Sale);
    return await saleRepository.find({ relations: ['idClient', 'idClient.idMunicipality'] });
};
exports.SaleGetAll = SaleGetAll;
const SaleGetAllPaged = async (page) => {
    const perPage = 20;
    const saleRepository = appDataSource_1.AppDataSource.getRepository(Sale_1.Sale);
    const offset = (page - 1) * perPage;
    const sales = await saleRepository.find({
        relations: ['idClient', 'idClient.idMunicipality'],
        take: perPage,
        skip: offset
    });
    const totalCount = await saleRepository.count();
    const totalPages = Math.ceil(totalCount / perPage);
    return { sales, totalPages };
};
exports.SaleGetAllPaged = SaleGetAllPaged;
const SaleCreate = async (saleData) => {
    const saleRepository = appDataSource_1.AppDataSource.getRepository(Sale_1.Sale);
    saleData.createdAt = new Date();
    saleData.updatedAt = null;
    const sale = saleRepository.create(saleData);
    return await saleRepository.save(sale);
};
exports.SaleCreate = SaleCreate;
const SaleUpdate = async (idSale, saleData) => {
    const saleRepository = appDataSource_1.AppDataSource.getRepository(Sale_1.Sale);
    saleData.updatedAt = new Date();
    const sale = await saleRepository.findOneBy({ idSale });
    if (sale) {
        sale.date = saleData.date;
        sale.description = saleData.description;
        sale.quantity = saleData.quantity;
        sale.price = saleData.price;
        sale.totalPrice = saleData.totalPrice;
        sale.kilogram = saleData.kilogram;
        sale.idClient = saleData.idClient;
        return await saleRepository.save(sale);
    }
};
exports.SaleUpdate = SaleUpdate;
const SaleDelete = async (idSale) => {
    const saleRepository = appDataSource_1.AppDataSource.getRepository(Sale_1.Sale);
    const sale = await saleRepository.findOneBy({ idSale });
    if (sale) {
        return await saleRepository.remove(sale);
    }
};
exports.SaleDelete = SaleDelete;
const SaleGetLast = async () => {
    const saleRepository = appDataSource_1.AppDataSource.getRepository(Sale_1.Sale);
    // Using find with options to ensure we get only one result, ordered correctly
    const sales = await saleRepository.find({
        order: { createdAt: 'DESC' },
        take: 1
    });
    return sales[0]; // Return the first and only invoice from the sorted list
};
exports.SaleGetLast = SaleGetLast;
const SaleGetByClient = async (idClient) => {
    const saleRepository = appDataSource_1.AppDataSource.getRepository(Sale_1.Sale);
    return await saleRepository.find({ where: { idClient: (0, typeorm_1.Equal)(Number(idClient)) }, relations: ['idClient', 'idClient.idMunicipality'] });
};
exports.SaleGetByClient = SaleGetByClient;
const SaleGetByClientPaged = async (idClient, page) => {
    const perPage = 20;
    const saleRepository = appDataSource_1.AppDataSource.getRepository(Sale_1.Sale);
    const offset = (page - 1) * perPage;
    const [sales, totalCount] = await saleRepository.findAndCount({
        where: { idClient: (0, typeorm_1.Equal)(idClient) },
        relations: ['idClient', 'idClient.idMunicipality'],
        take: perPage,
        skip: offset
    });
    const totalPages = Math.ceil(totalCount / perPage);
    return { sales, totalPages };
};
exports.SaleGetByClientPaged = SaleGetByClientPaged;
//# sourceMappingURL=SaleDAL.js.map