import { Request, Response } from "express";
import { validate } from 'class-validator';
import { Sale } from "../data/Entity/Sale";
import ActionType from "../data/helpers/ActionType";
import { ClientGetAll } from "../data/DataAccessLayer/ClientDAL";
import { SaleCreate, SaleDelete, SaleGetAll, SaleGetAllPaged, SaleGetByPrimaryKey, SaleGetLast, SaleUpdate } from "../data/DataAccessLayer/SaleDAL";

export const getSingleSale = async (req: any, res: any) => {
    const { idSale } = req.params;
    const sale = await SaleGetByPrimaryKey(idSale);

    return res.status(200).send(sale);
};

export const getAllSales = async (req: any, res: any) => {
    const sales = await SaleGetAll();

    return res.status(200).send({
        sales
    });
};

export const getAllSalesPaged = async (req: any, res: any) => {
    const { page } = req.params;
    const { sales, totalPages } = await SaleGetAllPaged(page);

    return res.status(200).send({
        sales,
        totalPages
    });
};

export const createSale = async (req: Request, res: Response) => {
    const { date, description, quantity, price, totalPrice, kilogram} = req.body;

    try {

        const lastSale = await SaleGetLast();
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
        } as Sale;

        const sale = await SaleCreate(saleData);
        const validationErrors = await validate(sale);

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
    } catch (error) {
        console.error(error);

        return res.status(500).send({
            status: 500,
            error,
            message: 'An error occurred during sale create'
        });
    }
};

export const updateSale = async (req: any, res: any) => {
    const { date, description, quantity, price, totalPrice, kilogram } = req.body;
    const { idSale } = req.params;

    const saleData = {
        date,
        description, 
        quantity,
        price,
        totalPrice,
        kilogram,
    } as Sale;

    try {
        const sale = await SaleUpdate(idSale, saleData);
        
        return res.status(200).send({
            status: 200,
            message: 'Sale update successful',
            sale
        });
    } catch (error) {
        return res.status(500).send({
            status: 500,
            message: 'An error occurred during sale update'
        });
    }
}

export const deleteSale = async (req: any, res: any) => {
    const { idSale } = req.params;

    try{
        const sale = await SaleDelete(idSale);

        return res.status(200).send({
            status: 200,
            message: 'Sale remove successful',
            sale
        });
    }catch (error) {
        return res.status(500).send({
            status: 500,
            error,
            message: 'An error occurred during sale removal'
        });
    }
};

export const getCreateModel = async (req: Request, res: Response) => {
    const clients = await ClientGetAll();

    return res.status(200).send({
        operation: ActionType.CREATE,
        clients,
      });
}

export const getUpdateModel = async (req: Request, res: Response) => {
    const clients = await ClientGetAll();

    return res.status(200).send({
        operation: ActionType.UPDATE,
        clients,
    });
}