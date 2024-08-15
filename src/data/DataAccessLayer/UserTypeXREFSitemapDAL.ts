import { AppDataSource } from "../../db/appDataSource";
import { UserTypeXREFSitemap } from "../Entity/UserTypeXREFSitemap";

export const UserTypeXREFSitemapGetByPrimaryKey = async (idUserTypeXREFSitemap: number) => {
    const userTypeXREFSitemapRepository = AppDataSource.getRepository(UserTypeXREFSitemap);

    return await userTypeXREFSitemapRepository.findOne({ where: { idUserTypeXREFSitemap }, relations: ['idUserType', 'idSitemap']});
} 

export const UserTypeXREFSitemapGetAll = async() => {
    const userTypeXREFSitemapRepository = AppDataSource.getRepository(UserTypeXREFSitemap);
    return await userTypeXREFSitemapRepository.find({ relations: ['idUserType', 'idSitemap'] });
}

export const UserTypeXREFSitemapGetByUserType = async (idUserType: any) => {
    const userTypeXREFSitemapRepository = AppDataSource.getRepository(UserTypeXREFSitemap);

    return await userTypeXREFSitemapRepository.find({
            where: {
                idUserType: idUserType
            },
            relations: ['idUserType','idSitemap']
    });
};

export const UserTypeXREFSitemapGetBySitemap = async (idSitemap: any) => {
    const userTypeXREFSitemapRepository = AppDataSource.getRepository(UserTypeXREFSitemap);
    
    return await userTypeXREFSitemapRepository.find({
        where: {
            idSitemap: idSitemap
        },
        relations: ['idUserType','idSitemap']
    
    });
}

export const UserTypeXREFSitemapGetByAuthorizaton = (idSitemap: number) => {
    return ['get all by authorization'];
} 

export const UserTypeXREFSitemapCreate = async (userTypeXREFSitemapData: any) => {
    const userTypeXREFSitemapRepository = AppDataSource.getRepository(UserTypeXREFSitemap);
    userTypeXREFSitemapData.createdAt = new Date();
    userTypeXREFSitemapData.updatedAt = null;
    const userTypeXREFSitemap = userTypeXREFSitemapRepository.create(userTypeXREFSitemapData);
    return await userTypeXREFSitemapRepository.save(userTypeXREFSitemap)
}

export const UserTypeXREFSitemapUpdate = async (idUserTypeXREFSitemap: number, userTypeXREFSitemapData: any) => {
    const userTypeXREFSitemapRepository = AppDataSource.getRepository(UserTypeXREFSitemap);
    userTypeXREFSitemapData.updatedAt = new Date();

    const userTypeXREFSitemap = await userTypeXREFSitemapRepository.findOneBy({ idUserTypeXREFSitemap });

    if(userTypeXREFSitemap){
        userTypeXREFSitemap.idUserType = userTypeXREFSitemapData.idUserType;
        userTypeXREFSitemap.idSitemap = userTypeXREFSitemapData.idSitemap;
        userTypeXREFSitemap.hasAuthorization = userTypeXREFSitemapData.hasAuthorization;
        userTypeXREFSitemap.create = userTypeXREFSitemapData.create;
        userTypeXREFSitemap.read = userTypeXREFSitemapData.read;
        userTypeXREFSitemap.update = userTypeXREFSitemapData.update;
        userTypeXREFSitemap.destroy = userTypeXREFSitemapData.destroy;

        return await userTypeXREFSitemapRepository.save(userTypeXREFSitemap);
    }
};


export const UserTypeXREFSitemapDelete = async (idUserTypeXREFSitemap: number) => {
    const userTypeXREFSitemapRepository = AppDataSource.getRepository(UserTypeXREFSitemap);
    const userTypeXREFSitemap = await userTypeXREFSitemapRepository.findOneBy({ idUserTypeXREFSitemap });
    
    if(userTypeXREFSitemap){
        return await userTypeXREFSitemapRepository.remove(userTypeXREFSitemap);
    }
}