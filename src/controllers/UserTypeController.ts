import { Request, Response } from "express";
import { validate } from 'class-validator';
import { UserTypeCreate, UserTypeDelete, UserTypeGetAll, UserTypeGetByPrimaryKey } from "../data/DataAccessLayer/UserTypeDAL";
import { UserType } from "../data/Entity/UserType";

export const getSingleUserType = async (req: Request, res: Response) => {
    const { idUserType } = req.params;
    const idUserTypeNumber = parseInt(idUserType);
    const userType = await UserTypeGetByPrimaryKey(idUserTypeNumber);

    return res.status(200).send(userType);
};

export const getAllUserTypes = async (req: Request, res: Response) => {
    const userTypes = await UserTypeGetAll();

    return res.status(200).send({
        userTypes
    });
};

export const createUserType = async (req: Request, res: Response) => {
    const {
        typeName} = req.body;

    const userTypeData = {
        typeName
    } as UserType;

    try {

        const userType = await UserTypeCreate(userTypeData);
        const validationErrors = await validate(userType);

        if (validationErrors.length > 0) {
            return res.status(400).send({
                message: 'Validation failed',
                errors: validationErrors
            });
        }
        
        return res.status(200).send({
            message: 'User create successful',
            userType
        });
    } catch (error) {
        console.error(error);

        return res.status(500).send({
            error,
            message: 'An error occurred during user create'
        });
    }
};

export const deleteUserType = async (req: any, res: any) => {
    const { idUserType } = req.params;

    try{
        const userType = await UserTypeDelete(idUserType);

        return res.status(200).send({
            message: 'UserType remove successful',
            userType
        });
    }catch (error) {
        return res.status(500).send({
            error,
            message: 'An error occurred during userType removal'
        });
    }
};