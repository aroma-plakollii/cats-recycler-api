import { AppDataSource } from "../../db/appDataSource";
import { Sale } from "../Entity/Sale";
import { Equal} from "typeorm";

export const SaleGetByPrimaryKey = async (idSale: number) => {
    const saleRepository = AppDataSource.getRepository(Sale);

    return await saleRepository.findOne({ where: { idSale }});
} 

export const SaleGetAll = async () => {
    const saleRepository = AppDataSource.getRepository(Sale);
    return await saleRepository.find();
}

export const SaleGetAllPaged = async (page: number) => {
    const perPage = 20;
    const saleRepository = AppDataSource.getRepository(Sale);
    const offset = (page - 1) * perPage;

    const sales = await saleRepository.find({
        take: perPage,
        skip: offset
    });

    const totalCount = await saleRepository.count();
    const totalPages = Math.ceil(totalCount / perPage);

    return { sales, totalPages };
}

export const SaleCreate = async (saleData: any) => {
    const saleRepository = AppDataSource.getRepository(Sale);
    saleData.createdAt = new Date();
    saleData.updatedAt = null;
    const sale = saleRepository.create(saleData);
    return await saleRepository.save(sale)
}

export const SaleUpdate = async (idSale: number, saleData: any) => {
    const saleRepository = AppDataSource.getRepository(Sale);
    saleData.updatedAt = new Date();

    const sale = await saleRepository.findOneBy({ idSale });

    if(sale){
        sale.date = saleData.date;
        sale.description = saleData.description;
        sale.quantity = saleData.quantity;
        sale.price = saleData.price;
        sale.totalPrice = saleData.totalPrice;
        sale.kilogram = saleData.kilogram;

        return await saleRepository.save(sale);
    }
};

export const SaleDelete = async (idSale: number) => {
    const saleRepository = AppDataSource.getRepository(Sale);
    const sale = await saleRepository.findOneBy({ idSale });
    
    if(sale){
        return await saleRepository.remove(sale);
    }
}

export const SaleGetLast = async () => {
    const saleRepository = AppDataSource.getRepository(Sale);

    // Using find with options to ensure we get only one result, ordered correctly
    const sales = await saleRepository.find({
        order: { createdAt: 'DESC' },
        take: 1
    });

    return sales[0]; // Return the first and only invoice from the sorted list
};
