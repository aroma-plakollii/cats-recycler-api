"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientsByUserPaged = exports.getClientsByUser = exports.searchClientByUser = exports.searchClient = exports.getUpdateModel = exports.getCreateModel = exports.deleteClient = exports.updateClient = exports.createClient = exports.getAllClientsPaged = exports.getAllClients = exports.getSingleClient = void 0;
const class_validator_1 = require("class-validator");
const ActionType_1 = __importDefault(require("../data/helpers/ActionType"));
const ClientDAL_1 = require("../data/DataAccessLayer/ClientDAL");
const CountryDAL_1 = require("../data/DataAccessLayer/CountryDAL");
const MuniciplityDAL_1 = require("../data/DataAccessLayer/MuniciplityDAL");
const UserDAL_1 = require("../data/DataAccessLayer/UserDAL");
const getSingleClient = async (req, res) => {
    const { idClient } = req.params;
    const client = await (0, ClientDAL_1.ClientGetByPrimaryKey)(idClient);
    return res.status(200).send(client);
};
exports.getSingleClient = getSingleClient;
const getAllClients = async (req, res) => {
    const clients = await (0, ClientDAL_1.ClientGetAll)();
    return res.status(200).send({
        clients
    });
};
exports.getAllClients = getAllClients;
const getAllClientsPaged = async (req, res) => {
    const { page } = req.params;
    const { clients, totalPages } = await (0, ClientDAL_1.ClientGetAllPaged)(page);
    return res.status(200).send({
        clients,
        totalPages
    });
};
exports.getAllClientsPaged = getAllClientsPaged;
const createClient = async (req, res) => {
    const { firstName, lastName, phone, nationalId, digitalSignature, idCountry, idMunicipality, idUser } = req.body;
    const clientData = {
        firstName,
        lastName,
        phone,
        nationalId,
        digitalSignature,
        idCountry,
        idMunicipality,
        idUser
    };
    try {
        const existingClient = await (0, ClientDAL_1.ClientGetByNationalId)(nationalId);
        if (existingClient) {
            return res.status(409).send({
                status: 409,
                message: 'A client with this national ID already exists.'
            });
        }
        const client = await (0, ClientDAL_1.ClientCreate)(clientData);
        const validationErrors = await (0, class_validator_1.validate)(client);
        if (validationErrors.length > 0) {
            return res.status(400).send({
                status: 400,
                message: 'Validation failed',
                errors: validationErrors
            });
        }
        return res.status(200).send({
            status: 200,
            message: 'Client create successful',
            client
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({
            status: 500,
            error,
            message: 'An error occurred during client create'
        });
    }
};
exports.createClient = createClient;
const updateClient = async (req, res) => {
    const { firstName, lastName, phone, nationalId, digitalSignature, idCountry, idMunicipality, idUser } = req.body;
    const { idClient } = req.params;
    const clientData = {
        firstName,
        lastName,
        phone,
        nationalId,
        digitalSignature,
        idCountry,
        idMunicipality,
        idUser
    };
    try {
        const client = await (0, ClientDAL_1.ClientUpdate)(idClient, clientData);
        return res.status(200).send({
            status: 200,
            message: 'Client update successful',
            client
        });
    }
    catch (error) {
        return res.status(500).send({
            status: 500,
            message: 'An error occurred during client update'
        });
    }
};
exports.updateClient = updateClient;
const deleteClient = async (req, res) => {
    const { idClient } = req.params;
    try {
        const client = await (0, ClientDAL_1.ClientDelete)(idClient);
        return res.status(200).send({
            status: 200,
            message: 'Client remove successful',
            user: client
        });
    }
    catch (error) {
        return res.status(500).send({
            status: 500,
            error,
            message: 'An error occurred during client removal'
        });
    }
};
exports.deleteClient = deleteClient;
const getCreateModel = async (req, res) => {
    const countries = await (0, CountryDAL_1.CountryGetAll)();
    const municipalities = await (0, MuniciplityDAL_1.MunicipalityGetAll)();
    const users = await (0, UserDAL_1.UserGetAll)();
    return res.status(200).send({
        operation: ActionType_1.default.CREATE,
        countries,
        municipalities,
        users
    });
};
exports.getCreateModel = getCreateModel;
const getUpdateModel = async (req, res) => {
    const countries = await (0, CountryDAL_1.CountryGetAll)();
    const municipalities = await (0, MuniciplityDAL_1.MunicipalityGetAll)();
    const users = await (0, UserDAL_1.UserGetAll)();
    return res.status(200).send({
        operation: ActionType_1.default.UPDATE,
        countries,
        municipalities,
        users
    });
};
exports.getUpdateModel = getUpdateModel;
const searchClient = async (req, res) => {
    const { term } = req.params;
    const clients = await (0, ClientDAL_1.ClientGetBySearchTerm)(term);
    return res.status(200).send(clients);
};
exports.searchClient = searchClient;
const searchClientByUser = async (req, res) => {
    const { term, idUser } = req.params;
    const clients = await (0, ClientDAL_1.ClientGetBySearchTermAndUser)(term, idUser);
    return res.status(200).send(clients);
};
exports.searchClientByUser = searchClientByUser;
const getClientsByUser = async (req, res) => {
    const { idUser } = req.params;
    const clients = await (0, ClientDAL_1.ClientGetByUser)(idUser);
    return res.status(200).send({ clients });
};
exports.getClientsByUser = getClientsByUser;
const getClientsByUserPaged = async (req, res) => {
    const { idUser } = req.params;
    const { page } = req.body;
    const { clients, totalPages } = await (0, ClientDAL_1.ClientGetByUserPaged)(idUser, page);
    return res.status(200).send({
        clients,
        totalPages
    });
};
exports.getClientsByUserPaged = getClientsByUserPaged;
//# sourceMappingURL=ClientController.js.map