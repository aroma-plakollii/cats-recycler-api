
import { AppDataSource } from "../../db/appDataSource";
import { UserType } from "../Entity/UserType";
import { User } from "../Entity/Users";

export const UserGetByPrimaryKey = async (idUser: number) => {
    const userRepository = AppDataSource.getRepository(User);
    // return await userRepository.findOneBy({ idUser });
    return await userRepository.findOne({ where: { idUser }, relations: ['idUserType'] });
} 

export const UserGetAll = async () => {
    const userRepository = AppDataSource.getRepository(User);
    return await userRepository.find();
}

export const UserGetAllPaged = async (page: number) => {
    const perPage = 20;
    const userRepository = AppDataSource.getRepository(User);
    const offset = (page - 1) * perPage;

    const users = await userRepository.find({
        relations: ['idUserType'],
        take: perPage,
        skip: offset
    });

    const totalCount = await userRepository.count();
    const totalPages = Math.ceil(totalCount / perPage);

    return { users, totalPages };
}

export const UserGetByIdUserType = (idUserType: number) => {
    return ['get user byIdUserType'];
}

export const UserCreate = async (userData: any) => {
    const userRepository = AppDataSource.getRepository(User);
    userData.createdAt = new Date();
    userData.updatedAt = null;
    const user = userRepository.create(userData);
    return await userRepository.save(user);
}

export const UserUpdate = async (idUser: number, userData: any) => {
    const userRepository = AppDataSource.getRepository(User);
    userData.updatedAt = new Date();

    const user = await userRepository.findOneBy({ idUser });

    if(user){
        user.firstName = userData.firstName;
        user.lastName = userData.lastName;
        user.email = userData.email;
        user.password = userData.password;
        user.idUserType = userData.idUserType;

        return await userRepository.save(user);
    }
};

export const UserDelete = async (idUser: number) => {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ idUser });
    
    if(user){
        return await userRepository.remove(user);
    }
}

export const UserGetByEmail = async (email: string) => {
    const userRepository = AppDataSource.getRepository(User);

    return await userRepository.findOne(
        {
            where: {
                email
            },

            relations: ["idUserType"]
        }
        );
} 

export const UserGetEmptyModel = () => {
    const userRepository = AppDataSource.getRepository(User);
    const user = userRepository.create();

    user.firstName = '';
    user.lastName = '';
    user.email = '';
    user.password = '';

    const userTypeRepository = AppDataSource.getRepository(UserType);
    const userType = userTypeRepository.create();

    user.idUserType = userType;

    return user
}


// Validations

