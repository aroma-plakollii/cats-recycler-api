import { Equal, Between, LessThanOrEqual } from "typeorm";
import { AppDataSource } from "../../db/appDataSource";
import { Order } from "../Entity/Order";

export const OrderGetByPrimaryKey = async (idOrder: number) => {
    const orderRepository = AppDataSource.getRepository(Order);

    return await orderRepository.findOne({ where: { idOrder }, relations: ['idClient', 'idClient.idCountry', 'idClient.idMunicipality', 'idUser'] });
} 

export const OrderGetAll = async () => {
    const orderRepository = AppDataSource.getRepository(Order);
    return await orderRepository.find({ relations: ['idClient', 'idUser'], order: {orderDate: 'DESC'} });
}

export const OrderGetAllPaged = async (page: number) => {
    const perPage = 20;
    const orderRepository = AppDataSource.getRepository(Order);
    const offset = (page - 1) * perPage;

    const orders = await orderRepository.find({
        relations: ['idClient', 'idUser'],
        order: {orderDate: 'DESC'},
        take: perPage,
        skip: offset
    });

    const totalCount = await orderRepository.count();
    const totalPages = Math.ceil(totalCount / perPage);

    return { orders, totalPages };
}

export const OrderCreate = async (orderData: any) => {
    const orderRepository = AppDataSource.getRepository(Order);
    orderData.createdAt = new Date();
    orderData.updatedAt = null;
    const order = orderRepository.create(orderData);
    return await orderRepository.save(order)
}

export const OrderUpdate = async (idOrder: number, orderData: any) => {
    const orderRepository = AppDataSource.getRepository(Order);
    orderData.updatedAt = new Date();

    const order = await orderRepository.findOneBy({ idOrder });

    if(order){
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

export const OrderDelete = async (idOrder: number) => {
    const orderRepository = AppDataSource.getRepository(Order);
    const order = await orderRepository.findOneBy({ idOrder });
    
    if(order){
        return await orderRepository.remove(order);
    }
}

export const OrderGetByClient = async (idClient: number) => {
    const orderRepository = AppDataSource.getRepository(Order);

    return await orderRepository.find({
        where: { idClient: Equal(idClient) },
        relations: ['idClient', 'idUser'],
        order: {orderDate: 'DESC'}
    });
}

export const OrderGetByClientPaged = async (idClient: number, page: number) => {
    const perPage = 20;
    const orderRepository = AppDataSource.getRepository(Order);
    const offset = (page - 1) * perPage;

    const [orders, totalCount] = await orderRepository.findAndCount({
        where: { idClient: Equal(idClient) },
        relations: ['idClient', 'idUser'],
        order: { orderDate: 'DESC'},
        take: perPage,
        skip: offset
    });

    const totalPages = Math.ceil(totalCount / perPage);

    return { orders, totalPages };
}

export const OrderGetByUser = async (idUser: number) => {
    const orderRepository = AppDataSource.getRepository(Order);

    return await orderRepository.find({
        where: { idUser: Equal(idUser) },
        relations: ['idClient', 'idUser'],
        order: {orderDate: 'DESC'}
    });
}

export const OrderGetByUserPaged = async (idUser: number, page: number) => {
    const perPage = 20;
    const orderRepository = AppDataSource.getRepository(Order);
    const offset = (page - 1) * perPage;

    const [orders, totalCount] = await orderRepository.findAndCount({
        where: { idUser: Equal(idUser) },
        relations: ['idClient', 'idUser'],
        order: { orderDate: 'DESC'},
        take: perPage,
        skip: offset
    });

    const totalPages = Math.ceil(totalCount / perPage);

    return { orders, totalPages };
}

export const OrderGetByYear = async (idClient: number, year: number) => {
    const orderRepository = AppDataSource.getRepository(Order);

    const startDate = new Date(Date.UTC(year, 0, 1, 5, 0, 0));
    const endDate = new Date(Date.UTC(year + 1, 0, 1, 5, 0, 0));

    return await orderRepository.find({
        where: {
            idClient: Equal(idClient),
            orderDate: Between(startDate, endDate)
        },
        relations: ['idClient', 'idUser'],
    });
};

export const OrderGetByDate = async (startDate: Date, endDate: Date) => {
    const orderRepository = AppDataSource.getRepository(Order);

    endDate = new Date(endDate);
    endDate.setDate(endDate.getDate() + 1);

    return await orderRepository.find({
        where: {
            orderDate: Between(startDate, endDate),
        },
        relations: ['idClient', 'idUser'],
    });
};

export const OrderGetByDateAndClient = async (idClient: number, startDate: Date, endDate: Date) => {
    const orderRepository = AppDataSource.getRepository(Order);

    endDate = new Date(endDate);
    endDate.setDate(endDate.getDate() + 1);

    return await orderRepository.find({
        where: {
            idClient: Equal(idClient),
            orderDate: Between(startDate, endDate),
        },
        relations: ['idClient', 'idUser'],
    });
};