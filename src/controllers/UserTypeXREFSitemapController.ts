import { Request, Response } from "express";
import { validate } from 'class-validator';
import ActionType from "../data/helpers/ActionType";
import { SitemapGetAll } from "../data/DataAccessLayer/SitemapDAL";
import { UserTypeGetAll, } from "../data/DataAccessLayer/UserTypeDAL";
import { UserTypeXREFSitemapCreate, UserTypeXREFSitemapDelete, UserTypeXREFSitemapGetAll, UserTypeXREFSitemapGetByPrimaryKey, UserTypeXREFSitemapGetBySitemap, UserTypeXREFSitemapGetByUserType, UserTypeXREFSitemapUpdate } from "../data/DataAccessLayer/UserTypeXREFSitemapDAL";
import { UserTypeXREFSitemap } from "../data/Entity/UserTypeXREFSitemap";

export const getSingleUserTypeXREFSitemap = async (req: any, res: any) => {
    const { idUserTypeXREFSitemap } = req.params;
    const userTypeXREFSitemap = await UserTypeXREFSitemapGetByPrimaryKey(idUserTypeXREFSitemap);

    return res.status(200).send(userTypeXREFSitemap);
};

export const getAllUserTypeXREFSitemaps = async (req: any, res: any) => {
    const userTypeXREFSitemap = await UserTypeXREFSitemapGetAll();

    return res.status(200).send( userTypeXREFSitemap);
};

export const createUserTypeXREFSitemap = async (req: Request, res: Response) => {
    const { 
        idUserType, 
        idSitemap, 
        hasAuthorization,
        create,
        read,
        update,
        destroy} = req.body;

    const userTypeXREFSitemapData = {
        idUserType, 
        idSitemap, 
        hasAuthorization,
        create,
        read,
        update,
        destroy
    } as UserTypeXREFSitemap;

    try {

        const userTypeXREFSitemap = await UserTypeXREFSitemapCreate(userTypeXREFSitemapData);
        const validationErrors = await validate(userTypeXREFSitemap);

        if (validationErrors.length > 0) {
            return res.status(400).send({
                status: 400,
                message: 'Validation failed',
                errors: validationErrors
            });
        }
        
        return res.status(200).send({
            status: 200,
            message: 'UserTypeXREFSitemap create successful',
            userTypeXREFSitemap
        });
    } catch (error) {
        return res.status(500).send({
            status: 500,
            error,
            message: 'An error occurred during userTypeXREFSitemap create'
        });
    }
};

export const updateUserTypeXREFSitemap = async (req: any, res: any) => {
    const {
        idUserType, 
        idSitemap, 
        hasAuthorization,
        create,
        read,
        update,
        destroy} = req.body;

    const { idUserTypeXREFSitemap } = req.params;

    const userTypeXREFSitemapData = {
        idUserType, 
        idSitemap, 
        hasAuthorization,
        create,
        read,
        update,
        destroy
    } as UserTypeXREFSitemap;

    try {
        const userTypeXREFSitemap = await UserTypeXREFSitemapUpdate(idUserTypeXREFSitemap, userTypeXREFSitemapData);
        
        return res.status(200).send({
            status: 200,
            message: 'UserTypeXREFSitemap update successful',
            userTypeXREFSitemap
        });
    } catch (error) {
        return res.status(500).send({
            status: 500,
            message: 'An error occurred during userTypeXREFSitemap update'
        });
    }
}

export const deleteUserTypeXREFSitemap = async (req: any, res: any) => {
    const { idUserTypeXREFSitemap } = req.params;

    try{
        const userTypeXREFSitemap = await UserTypeXREFSitemapDelete(idUserTypeXREFSitemap);

        return res.status(200).send({
            status: 200,
            message: 'UserTypeXREFSitemap remove successful',
            user: userTypeXREFSitemap
        });
    }catch (error) {
        return res.status(500).send({
            status: 500,
            error,
            message: 'An error occurred during userTypeXREFSitemap removal'
        });
    }
};

export const getCreateModel = async (req: Request, res: Response) => {
    const userTypes = await UserTypeGetAll();
    const sitemaps = await SitemapGetAll();

    return res.status(200).send({
        operation: ActionType.CREATE,
        userTypes,
        sitemaps
      });
}

export const getUpdateModel = async (req: Request, res: Response) => {
    const userTypes = await UserTypeGetAll();
    const sitemaps = await SitemapGetAll();

    return res.status(200).send({
        operation: ActionType.UPDATE,
        userTypes,
        sitemaps
    });
}

export const getUserTypeXREFSitemapByUserType = async (req: any, res: any) => {
    const { idUserType } = req.params;

    try{
        const userTypeXREFSitemap = await UserTypeXREFSitemapGetByUserType(idUserType);

        return res.status(200).send(userTypeXREFSitemap);
    }catch(e){
        return  res.status(400).send(e);
    }
};

export const getUserTypeXREFSitemapBySitemap = async (req: any, res: any) => {
    const { idSitemap } = req.params;
    const userTypeXREFSitemap = await UserTypeXREFSitemapGetBySitemap(idSitemap);

    return res.status(200).send(userTypeXREFSitemap);
};


