import { Request, Response } from "express";
import { validate } from 'class-validator';
import ActionType from "../data/helpers/ActionType";
import { ClientGetAll } from "../data/DataAccessLayer/ClientDAL";
import { OrderCreate, OrderDelete, OrderGetAll, OrderGetAllPaged, OrderGetByClient, OrderGetByClientPaged, OrderGetByDate, OrderGetByDateAndClient, OrderGetByPrimaryKey, OrderGetByUser, OrderGetByUserPaged, OrderGetByYear, OrderUpdate } from "../data/DataAccessLayer/OrderDAL";
import { Order } from "../data/Entity/Order";
import { UserGetAll } from "../data/DataAccessLayer/UserDAL";

export const getSingleOrder = async (req: any, res: any) => {
    const { idOrder } = req.params;
    const order = await OrderGetByPrimaryKey(idOrder);

    return res.status(200).send(order);
};

export const getAllOrders = async (req: any, res: any) => {
    const orders = await OrderGetAll();

    return res.status(200).send({
        orders
    });
};

export const getAllOrdersPaged = async (req: any, res: any) => {
    const { page } = req.params;
    const { orders, totalPages } = await OrderGetAllPaged(page);

    return res.status(200).send({
        orders,
        totalPages
    });
};


export const createOrder = async (req: Request, res: Response) => {
    const {
        idClient, 
        quantity, 
        price, 
        orderDate,
        type,
        material,
        kilogram,
        totalPrice,
        idUser} = req.body;

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
    } as Order;

    try {

        const order = await OrderCreate(orderData);
        const validationErrors = await validate(order);

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
    } catch (error) {
        return res.status(500).send({
            status: 500,
            error,
            message: 'An error occurred during order create'
        });
    }
};

export const updateOrder = async (req: any, res: any) => {
    const {
        idClient, 
        quantity, 
        price, 
        orderDate,
        type,
        material,
        kilogram,
        totalPrice,
        idUser} = req.body;
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
    } as Order;

    try {
        const order = await OrderUpdate(idOrder, orderData);
        
        return res.status(200).send({
            status: 200,
            message: 'Order update successful',
            order
        });
    } catch (error) {
        return res.status(500).send({
            status: 500,
            message: 'An error occurred during order update'
        });
    }
}

export const deleteOrder = async (req: any, res: any) => {
    const { idOrder } = req.params;

    try{
        const order = await OrderDelete(idOrder);

        return res.status(200).send({
            status: 200,
            message: 'Order remove successful',
            user: order
        });
    }catch (error) {
        return res.status(500).send({
            status: 500,
            error,
            message: 'An error occurred during order removal'
        });
    }
};

export const getCreateModel = async (req: Request, res: Response) => {
    const clients = await ClientGetAll();
    const users = await UserGetAll();

    return res.status(200).send({
        operation: ActionType.CREATE,
        clients,
        users
      });
}

export const getUpdateModel = async (req: Request, res: Response) => {
    const clients = await ClientGetAll();
    const users = await UserGetAll();

    return res.status(200).send({
        operation: ActionType.UPDATE,
        clients,
        users
    });
}

export const getOrdersByClient = async (req: any, res: any) => {
    const { idClient } = req.params;
    const order = await OrderGetByClient(idClient);

    return res.status(200).send(order);
};

export const getOrdersByClientPaged = async (req: any, res: any) => {
    const { idClient } = req.params;
    const { page } = req.body;
    const { orders, totalPages } = await OrderGetByClientPaged(idClient, page);

    return res.status(200).send({
        orders,
        totalPages
    });
};

export const getOrdersByUser = async (req: any, res: any) => {
    const { idUser } = req.params;
    const orders = await OrderGetByUser(idUser);

    return res.status(200).send({orders});
};

export const getOrdersByUserPaged = async (req: any, res: any) => {
    const { idUser } = req.params;
    const { page } = req.body;
    const { orders, totalPages } = await OrderGetByUserPaged(idUser, page);

    return res.status(200).send({
        orders,
        totalPages
    });
};

export const getOrdersByYear = async (req: any, res: any) => {
    const { idClient, year } = req.body;
    const order = await OrderGetByYear(idClient, year);

    return res.status(200).send(order);
};

export const getOrdersByDate = async (req: any, res: any) => {
    const { startDate, endDate } = req.body;
    const order = await OrderGetByDate(startDate, endDate);

    return res.status(200).send(order);
};

export const getOrdersByDateAndClient = async (req: any, res: any) => {
    const { idClient, startDate, endDate } = req.body;
    const order = await OrderGetByDateAndClient(idClient, startDate, endDate);

    return res.status(200).send(order);
};