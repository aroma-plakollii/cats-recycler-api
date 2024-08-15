"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController = __importStar(require("../controllers/UserController"));
const AuthController = __importStar(require("../controllers/AuthController"));
const ClientController = __importStar(require("../controllers/ClientController"));
const CountryController = __importStar(require("../controllers/CountryController"));
const MunicipalityController = __importStar(require("../controllers/MunicipalityController"));
const OrderController = __importStar(require("../controllers/OrderController"));
const SaleController = __importStar(require("../controllers/SaleController"));
const SiteMapController = __importStar(require("../controllers/SitemapController"));
const UserTypeXREFSitemapController = __importStar(require("../controllers/UserTypeXREFSitemapController"));
const UserTypeController = __importStar(require("../controllers/UserTypeController"));
const AuthMiddleware = __importStar(require("../middlewares/AuthMiddleware"));
const router = express_1.default.Router();
//user routes
router.get('/', (req, res) => {
    res.send(`Server running on: ${process.env.SERVER_URL}`);
});
router.get('/users', AuthMiddleware.isLoggedIn, UserController.getAllUsers);
router.get('/users/create', AuthMiddleware.isLoggedIn, UserController.getCreateModel);
router.get('/users/update', AuthMiddleware.isLoggedIn, UserController.getUpdateModel);
router.get('/users/type', AuthMiddleware.isLoggedIn, UserController.getAllUserType);
router.post('/users/register', UserController.registerUser);
router.post('/users/verify', UserController.verifyEmail);
router.post('/users/reset-password', UserController.resetPassword);
router.get('/users/paged/:page', AuthMiddleware.isLoggedIn, UserController.getAllUsersPaged);
router.put('/users/:idUser', AuthMiddleware.isLoggedIn, UserController.updateUser);
// router.get('/users/:idUser', AuthMiddleware.isLoggedIn,  UserController.getSingleUser);
router.get('/users/:idUser', AuthMiddleware.isLoggedIn, UserController.getSingleUser);
router.delete('/users/:idUser', AuthMiddleware.isLoggedIn, UserController.deleteUser);
//user type routes
router.get('/userTypes', AuthMiddleware.isLoggedIn, UserTypeController.getAllUserTypes);
router.post('/userTypes/create', AuthMiddleware.isLoggedIn, UserTypeController.createUserType);
router.get('/userTypes/:idUserType', AuthMiddleware.isLoggedIn, UserTypeController.getSingleUserType);
router.delete('/userTypes/:idUserType', AuthMiddleware.isLoggedIn, UserTypeController.deleteUserType);
// router.get('/users/abc', AuthMiddleware.isLoggedIn, UserController.abc);
// router.get('/users', UserController.getAllUsers);
// router.post('/users', UserController.registerUser);
//authentications routes
router.post('/login', AuthController.Login);
router.get('/logout', AuthController.Logout);
// router.get('/abc', AuthMiddleware.isLoggedIn, )
//client routes
router.get('/clients', AuthMiddleware.isLoggedIn, ClientController.getAllClients);
router.post('/clients/create', ClientController.createClient);
router.get('/clients/create', AuthMiddleware.isLoggedIn, ClientController.getCreateModel);
router.get('/clients/update', AuthMiddleware.isLoggedIn, ClientController.getUpdateModel);
router.get('/clients/paged/:page', AuthMiddleware.isLoggedIn, ClientController.getAllClientsPaged);
router.get('/clients/:idClient', AuthMiddleware.isLoggedIn, ClientController.getSingleClient);
router.get('/clients/users/:idUser', AuthMiddleware.isLoggedIn, ClientController.getClientsByUser);
router.post('/clients/users/paged/:idUser', AuthMiddleware.isLoggedIn, ClientController.getClientsByUserPaged);
router.put('/clients/:idClient', AuthMiddleware.isLoggedIn, ClientController.updateClient);
router.delete('/clients/:idClient', AuthMiddleware.isLoggedIn, ClientController.deleteClient);
router.get('/clients/search/:term', AuthMiddleware.isLoggedIn, ClientController.searchClient);
router.get('/clients/search/:term/:idUser', AuthMiddleware.isLoggedIn, ClientController.searchClientByUser);
//country routes
router.get('/countries', AuthMiddleware.isLoggedIn, CountryController.getAllCountries);
//municipality routes
router.get('/municipalities', AuthMiddleware.isLoggedIn, MunicipalityController.getAllMunicipalities);
//order routes
router.get('/orders', AuthMiddleware.isLoggedIn, OrderController.getAllOrders);
router.post('/orders/create', AuthMiddleware.isLoggedIn, OrderController.createOrder);
router.get('/orders/create', AuthMiddleware.isLoggedIn, OrderController.getCreateModel);
router.get('/orders/update', AuthMiddleware.isLoggedIn, OrderController.getUpdateModel);
router.post('/orders/year', AuthMiddleware.isLoggedIn, OrderController.getOrdersByYear);
router.post('/orders/date', AuthMiddleware.isLoggedIn, OrderController.getOrdersByDate);
router.post('/orders/date-client', AuthMiddleware.isLoggedIn, OrderController.getOrdersByDateAndClient);
router.get('/orders/paged/:page', AuthMiddleware.isLoggedIn, OrderController.getAllOrdersPaged);
router.get('/orders/:idOrder', AuthMiddleware.isLoggedIn, OrderController.getSingleOrder);
router.get('/orders/clients/:idClient', AuthMiddleware.isLoggedIn, OrderController.getOrdersByClient);
router.post('/orders/clients/paged/:idClient', AuthMiddleware.isLoggedIn, OrderController.getOrdersByClientPaged);
router.get('/orders/users/:idUser', AuthMiddleware.isLoggedIn, OrderController.getOrdersByUser);
router.post('/orders/users/paged/:idUser', AuthMiddleware.isLoggedIn, OrderController.getOrdersByUserPaged);
router.put('/orders/:idOrder', AuthMiddleware.isLoggedIn, OrderController.updateOrder);
router.delete('/orders/:idOrder', AuthMiddleware.isLoggedIn, OrderController.deleteOrder);
//sale routes
router.get('/sales', AuthMiddleware.isLoggedIn, SaleController.getAllSales);
router.post('/sales/create', AuthMiddleware.isLoggedIn, SaleController.createSale);
router.get('/sales/create', AuthMiddleware.isLoggedIn, SaleController.getCreateModel);
router.get('/sales/update', AuthMiddleware.isLoggedIn, SaleController.getUpdateModel);
router.get('/sales/paged/:page', AuthMiddleware.isLoggedIn, SaleController.getAllSalesPaged);
router.get('/sales/:idSale', AuthMiddleware.isLoggedIn, SaleController.getSingleSale);
router.put('/sales/:idSale', AuthMiddleware.isLoggedIn, SaleController.updateSale);
router.get('/sales/client/:idClient', AuthMiddleware.isLoggedIn, SaleController.getSaleByClient);
router.post('/sales/clients/paged/:idClient', AuthMiddleware.isLoggedIn, SaleController.getSaleByClientPaged);
router.delete('/sales/:idSale', AuthMiddleware.isLoggedIn, SaleController.deleteSale);
//sitemap routes
router.get('/sitemaps', AuthMiddleware.isLoggedIn, SiteMapController.getAllSitemaps);
router.post('/sitemaps/create', AuthMiddleware.isLoggedIn, SiteMapController.createSitemap);
router.get('/sitemaps/:idSitemap', AuthMiddleware.isLoggedIn, SiteMapController.getSingleSitemap);
router.put('/sitemaps/:idSitemap', SiteMapController.updateSitemap);
router.delete('/sitemaps/:idSitemap', AuthMiddleware.isLoggedIn, SiteMapController.deleteSitemap);
//userTypeXREFSitemap
router.get('/userTypeXREFSitemaps', AuthMiddleware.isLoggedIn, UserTypeXREFSitemapController.getAllUserTypeXREFSitemaps);
router.post('/userTypeXREFSitemaps/create', AuthMiddleware.isLoggedIn, UserTypeXREFSitemapController.createUserTypeXREFSitemap);
router.get('/userTypeXREFSitemaps/create', AuthMiddleware.isLoggedIn, UserTypeXREFSitemapController.getCreateModel);
router.get('/userTypeXREFSitemaps/update', AuthMiddleware.isLoggedIn, UserTypeXREFSitemapController.getUpdateModel);
router.get('/userTypeXREFSitemaps/:idUserTypeXREFSitemap', AuthMiddleware.isLoggedIn, UserTypeXREFSitemapController.getSingleUserTypeXREFSitemap);
router.get('/userTypeXREFSitemaps/userTypes/:idUserType', UserTypeXREFSitemapController.getUserTypeXREFSitemapByUserType);
router.get('/userTypeXREFSitemaps/sitemaps/:idSitemap', AuthMiddleware.isLoggedIn, UserTypeXREFSitemapController.getUserTypeXREFSitemapBySitemap);
router.put('/userTypeXREFSitemaps/:idUserTypeXREFSitemap', AuthMiddleware.isLoggedIn, UserTypeXREFSitemapController.updateUserTypeXREFSitemap);
router.delete('/userTypeXREFSitemaps/:idUserTypeXREFSitemap', AuthMiddleware.isLoggedIn, UserTypeXREFSitemapController.deleteUserTypeXREFSitemap);
exports.default = router;
//# sourceMappingURL=index.js.map