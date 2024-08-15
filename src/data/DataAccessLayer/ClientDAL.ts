import { Like, Equal } from "typeorm";
import { AppDataSource } from "../../db/appDataSource";
import { Client } from "../Entity/Client";

export const ClientGetByPrimaryKey = async (idClient: number) => {
    const clientRepository = AppDataSource.getRepository(Client);

    return await clientRepository.findOne({ where: { idClient }, relations: ['idCountry', 'idMunicipality', 'idUser'] });
} 

export const ClientGetAll = async () => {
    const clientRepository = AppDataSource.getRepository(Client);
    return await clientRepository.find({ relations: ['idCountry', 'idMunicipality', 'idUser'], order: { idClient: 'DESC'}, });
}

export const ClientGetAllPaged = async (page: number) => {
    const perPage = 20;
    const clientRepository = AppDataSource.getRepository(Client);
    const offset = (page - 1) * perPage;
    
    const clients = await clientRepository.find({
        relations: ['idCountry', 'idMunicipality', 'idUser'],
        order: { idClient: 'DESC'},
        take: perPage,
        skip: offset
    });

    const totalCount = await clientRepository.count();
    const totalPages = Math.ceil(totalCount / perPage);

    return { clients, totalPages };
}

export const ClientGetByNationalId = async (nationalId: string) => {
    const clientRepository = AppDataSource.getRepository(Client);

    return await clientRepository.findOne({
        where: { nationalId, },
        relations: ['idUser', 'idCountry', 'idMunicipality']
    });
}

export const ClientGetByUser = async (idUser: number) => {
    const clientRepository = AppDataSource.getRepository(Client);

    return await clientRepository.find({
        where: { idUser: Equal(idUser) },
        relations: ['idUser', 'idCountry', 'idMunicipality']
    });
}

export const ClientGetByUserPaged = async (idUser: number, page: number) => {
    const perPage = 20;
    const clientRepository = AppDataSource.getRepository(Client);
    const offset = (page - 1) * perPage;

    const [clients, totalCount] = await clientRepository.findAndCount({
        where: { idUser: Equal(idUser) },
        relations: ['idUser', 'idCountry', 'idMunicipality'],
        order: { idClient: 'DESC'},
        take: perPage,
        skip: offset
    });

    const totalPages = Math.ceil(totalCount / perPage);

    return { clients, totalPages };
}


export const ClientCreate = async (clientData: any) => {
    const clientRepository = AppDataSource.getRepository(Client);
    clientData.createdAt = new Date();
    clientData.updatedAt = null;
    const client = clientRepository.create(clientData);
    return await clientRepository.save(client)
}

export const ClientUpdate = async (idClient: number, clientData: any) => {
    const clientRepository = AppDataSource.getRepository(Client);
    clientData.updatedAt = new Date();

    const client = await clientRepository.findOneBy({ idClient });

    if(client){
        client.firstName = clientData.firstName;
        client.lastName = clientData.lastName;
        client.phone = clientData.phone;
        client.nationalId = clientData.nationalId;
        client.digitalSignature = clientData.digitalSignature;
        client.idCountry = clientData.idCountry;
        client.idMunicipality = clientData.idMunicipality;

        return await clientRepository.save(client);
    }
};

export const ClientDelete = async (idClient: number) => {
    const clientRepository = AppDataSource.getRepository(Client);
    const client = await clientRepository.findOneBy({ idClient });
    
    if(client){
        return await clientRepository.remove(client);
    }
}

export const ClientGetByEmail = (email: string) => {
    return ['get client by email'];
}

export const ClientGetBySearchTerm = async (searchTerm: string) => {
    const clientRepository = AppDataSource.getRepository(Client);
    return await clientRepository.find({
        where: [
            {firstName: Like(`%${searchTerm}%`)},
            {lastName: Like(`%${searchTerm}%`)},
            {nationalId: Like(`%${searchTerm}%`)},
        ],
        relations: ['idCountry', 'idMunicipality', 'idUser']
    });
}

export const ClientGetBySearchTermAndUser = async (searchTerm: string, idUser: string) => {
    const clientRepository = AppDataSource.getRepository(Client);
    return await clientRepository.find({
        where: [
            { idUser: Equal(idUser), firstName: Like(`%${searchTerm}%`) },
            { idUser: Equal(idUser), lastName: Like(`%${searchTerm}%`) },
            { idUser: Equal(idUser), nationalId: Like(`%${searchTerm}%`) }
        ],
        relations: ['idCountry', 'idMunicipality', 'idUser']
    });
}