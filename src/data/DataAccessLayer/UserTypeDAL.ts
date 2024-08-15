import { AppDataSource } from "../../db/appDataSource";
import { UserType } from "../Entity/UserType";

export const UserTypeGetByPrimaryKey = async (idUserType: number) => {
    const userTypeRepository = AppDataSource.getRepository(UserType);
    return await userTypeRepository.findOne({ where: { idUserType } });
} 

export const UserTypeGetAll = async () => {
    const userTypeRepository = AppDataSource.getRepository(UserType);
    return await userTypeRepository.find();
} 

export const UserTypeCreate = async (userTypeData: any) => {
    const userTypeRepository = AppDataSource.getRepository(UserType);
    userTypeData.createdAt = new Date();
    userTypeData.updatedAt = null;
    const userType = userTypeRepository.create(userTypeData);
    return await userTypeRepository.save(userType);
}

export const UserTypeDelete = async (idUserType: number) => {
    const userTypeRepository = AppDataSource.getRepository(UserType);
    const userType = await userTypeRepository.findOneBy({ idUserType });
    
    if(userType){
        return await userTypeRepository.remove(userType);
    }
}