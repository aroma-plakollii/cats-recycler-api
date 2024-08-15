import { AppDataSource } from "../../db/appDataSource";
import { Sitemap } from "../Entity/Sitemap";

export const SitemapGetByPrimaryKey = async (idSitemap: number) => {
    const sitemapRepository = AppDataSource.getRepository(Sitemap);

    return await sitemapRepository.findOne({ where: { idSitemap } });
} 

export const SitemapGetAll = async () => {
    const sitemapRepository = AppDataSource.getRepository(Sitemap);

    return await sitemapRepository.find();
} 

export const SitemapCreate = async (sitemapData: any) => {
    const sitemapRepository = AppDataSource.getRepository(Sitemap);
    sitemapData.createdAt = new Date();
    sitemapData.updatedAt = null;
    const sitemap = sitemapRepository.create(sitemapData);
    return await sitemapRepository.save(sitemap)
}

export const SitemapUpdate = async (idSitemap: number, sitemapData: any) => {
    const sitemapRepository = AppDataSource.getRepository(Sitemap);
    sitemapData.updatedAt = new Date();

    const sitemap = await sitemapRepository.findOneBy({ idSitemap });

    if(sitemap){
        sitemap.name = sitemapData.name;
        sitemap.url = sitemapData.url;
        sitemap.isMenuItem = sitemapData.isMenuItem;

        return await sitemapRepository.save(sitemap);
    }
};

export const SitemapDelete = async (idSitemap: number) => {
    const sitemapRepository = AppDataSource.getRepository(Sitemap);
    const sitemap = await sitemapRepository.findOneBy({ idSitemap });
    
    if(sitemap){
        return await sitemapRepository.remove(sitemap);
    }
}

