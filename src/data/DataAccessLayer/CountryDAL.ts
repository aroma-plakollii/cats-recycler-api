import { AppDataSource } from "../../db/appDataSource";
import { Country } from "../Entity/Country";

export const CountryGetByPrimaryKey = (idClient: number) => {
    return ['get country by primary key'];
} 

export const CountryGetAll = async() => {
    const countryRepository = AppDataSource.getRepository(Country);
    return await countryRepository.find();
}