"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SitemapDelete = exports.SitemapUpdate = exports.SitemapCreate = exports.SitemapGetAll = exports.SitemapGetByPrimaryKey = void 0;
const appDataSource_1 = require("../../db/appDataSource");
const Sitemap_1 = require("../Entity/Sitemap");
const SitemapGetByPrimaryKey = async (idSitemap) => {
    const sitemapRepository = appDataSource_1.AppDataSource.getRepository(Sitemap_1.Sitemap);
    return await sitemapRepository.findOne({ where: { idSitemap } });
};
exports.SitemapGetByPrimaryKey = SitemapGetByPrimaryKey;
const SitemapGetAll = async () => {
    const sitemapRepository = appDataSource_1.AppDataSource.getRepository(Sitemap_1.Sitemap);
    return await sitemapRepository.find();
};
exports.SitemapGetAll = SitemapGetAll;
const SitemapCreate = async (sitemapData) => {
    const sitemapRepository = appDataSource_1.AppDataSource.getRepository(Sitemap_1.Sitemap);
    sitemapData.createdAt = new Date();
    sitemapData.updatedAt = null;
    const sitemap = sitemapRepository.create(sitemapData);
    return await sitemapRepository.save(sitemap);
};
exports.SitemapCreate = SitemapCreate;
const SitemapUpdate = async (idSitemap, sitemapData) => {
    const sitemapRepository = appDataSource_1.AppDataSource.getRepository(Sitemap_1.Sitemap);
    sitemapData.updatedAt = new Date();
    const sitemap = await sitemapRepository.findOneBy({ idSitemap });
    if (sitemap) {
        sitemap.name = sitemapData.name;
        sitemap.url = sitemapData.url;
        sitemap.isMenuItem = sitemapData.isMenuItem;
        return await sitemapRepository.save(sitemap);
    }
};
exports.SitemapUpdate = SitemapUpdate;
const SitemapDelete = async (idSitemap) => {
    const sitemapRepository = appDataSource_1.AppDataSource.getRepository(Sitemap_1.Sitemap);
    const sitemap = await sitemapRepository.findOneBy({ idSitemap });
    if (sitemap) {
        return await sitemapRepository.remove(sitemap);
    }
};
exports.SitemapDelete = SitemapDelete;
//# sourceMappingURL=SitemapDAL.js.map