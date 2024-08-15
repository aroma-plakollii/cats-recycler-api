"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSitemap = exports.updateSitemap = exports.createSitemap = exports.getAllSitemaps = exports.getSingleSitemap = void 0;
const class_validator_1 = require("class-validator");
const SitemapDAL_1 = require("../data/DataAccessLayer/SitemapDAL");
const getSingleSitemap = async (req, res) => {
    const { idSitemap } = req.params;
    const sitemap = await (0, SitemapDAL_1.SitemapGetByPrimaryKey)(idSitemap);
    return res.status(200).send(sitemap);
};
exports.getSingleSitemap = getSingleSitemap;
const getAllSitemaps = async (req, res) => {
    const sitemap = await (0, SitemapDAL_1.SitemapGetAll)();
    return res.status(200).send({
        sitemap
    });
};
exports.getAllSitemaps = getAllSitemaps;
const createSitemap = async (req, res) => {
    const { name, url, isMenuItem } = req.body;
    const sitemapData = {
        name,
        url,
        isMenuItem
    };
    try {
        const sitemap = await (0, SitemapDAL_1.SitemapCreate)(sitemapData);
        const validationErrors = await (0, class_validator_1.validate)(sitemap);
        if (validationErrors.length > 0) {
            return res.status(400).send({
                status: 400,
                message: 'Validation failed',
                errors: validationErrors
            });
        }
        return res.status(200).send({
            status: 200,
            message: 'Sitemap create successful',
            sitemap
        });
    }
    catch (error) {
        return res.status(500).send({
            status: 500,
            error,
            message: 'An error occurred during sitemap create'
        });
    }
};
exports.createSitemap = createSitemap;
const updateSitemap = async (req, res) => {
    const { name, url, isMenuItem } = req.body;
    const { idSitemap } = req.params;
    const sitemapData = {
        name,
        url,
        isMenuItem
    };
    try {
        const sitemap = await (0, SitemapDAL_1.SitemapUpdate)(idSitemap, sitemapData);
        return res.status(200).send({
            status: 200,
            message: 'Sitemap update successful',
            sitemap
        });
    }
    catch (error) {
        return res.status(500).send({
            status: 500,
            message: 'An error occurred during sitemap update'
        });
    }
};
exports.updateSitemap = updateSitemap;
const deleteSitemap = async (req, res) => {
    const { idSitemap } = req.params;
    try {
        const sitemap = await (0, SitemapDAL_1.SitemapDelete)(idSitemap);
        return res.status(200).send({
            status: 200,
            message: 'Sitemap remove successful',
            user: sitemap
        });
    }
    catch (error) {
        return res.status(500).send({
            status: 500,
            error,
            message: 'An error occurred during sitemap removal'
        });
    }
};
exports.deleteSitemap = deleteSitemap;
//# sourceMappingURL=SitemapController.js.map