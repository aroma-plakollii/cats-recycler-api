import { CountryGetAll } from "../data/DataAccessLayer/CountryDAL";

export const getAllCountries = async (req: any, res: any) => {
    const countries = await CountryGetAll();

    return res.status(200).send({
        countries
    });
};