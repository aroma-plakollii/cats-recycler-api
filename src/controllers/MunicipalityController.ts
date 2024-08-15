import { MunicipalityGetAll } from "../data/DataAccessLayer/MuniciplityDAL";

export const getAllMunicipalities = async (req: any, res: any) => {
    const municipalities = await MunicipalityGetAll();

    return res.status(200).send({
        municipalities
    });
};