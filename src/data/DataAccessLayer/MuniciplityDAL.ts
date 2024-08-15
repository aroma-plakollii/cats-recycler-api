import { AppDataSource } from "../../db/appDataSource";
import { Municipality } from "../Entity/Municipality";

export const MunicipalityGetByPrimaryKey = (idClient: number) => {
    return ['get municipality by primary key'];
} 

export const MunicipalityGetAll = async () => {
    const  municipalityRepository = AppDataSource.getRepository(Municipality);
    return await municipalityRepository.find();
}