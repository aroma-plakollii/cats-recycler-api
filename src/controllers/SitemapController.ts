import { Request, Response } from "express";
import { validate } from 'class-validator';
import { SitemapCreate, SitemapDelete, SitemapGetAll, SitemapGetByPrimaryKey, SitemapUpdate } from "../data/DataAccessLayer/SitemapDAL";
import { Sitemap } from "../data/Entity/Sitemap";

export const getSingleSitemap = async (req: any, res: any) => {
    const { idSitemap } = req.params;
    const sitemap = await SitemapGetByPrimaryKey(idSitemap);

    return res.status(200).send(sitemap);
};

export const getAllSitemaps = async (req: any, res: any) => {
    const sitemap = await SitemapGetAll();

    return res.status(200).send({
        sitemap
    });
};

export const createSitemap = async (req: Request, res: Response) => {
    const { 
        name, 
        url, 
        isMenuItem} = req.body;

    const sitemapData = {
        name, 
        url, 
        isMenuItem
    } as Sitemap;

    try {

        const sitemap = await SitemapCreate(sitemapData);
        const validationErrors = await validate(sitemap);

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
    } catch (error) {
        return res.status(500).send({
            status: 500,
            error,
            message: 'An error occurred during sitemap create'
        });
    }
};

export const updateSitemap = async (req: any, res: any) => {
    const {
        name, 
        url, 
        isMenuItem} = req.body;

    const { idSitemap } = req.params;

    const sitemapData = {
        name, 
        url, 
        isMenuItem
    } as Sitemap;

    try {
        const sitemap = await SitemapUpdate(idSitemap, sitemapData);
        
        return res.status(200).send({
            status: 200,
            message: 'Sitemap update successful',
            sitemap
        });
    } catch (error) {
        return res.status(500).send({
            status: 500,
            message: 'An error occurred during sitemap update'
        });
    }
}

export const deleteSitemap = async (req: any, res: any) => {
    const { idSitemap } = req.params;

    try{
        const sitemap = await SitemapDelete(idSitemap);

        return res.status(200).send({
            status: 200,
            message: 'Sitemap remove successful',
            user: sitemap
        });
    }catch (error) {
        return res.status(500).send({
            status: 500,
            error,
            message: 'An error occurred during sitemap removal'
        });
    }
};