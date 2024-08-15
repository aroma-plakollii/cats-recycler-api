"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
// import bodyParesr from 'body-parser';
const bodyParser = require('body-parser');
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const routes_1 = __importDefault(require("./routes"));
const appDataSource_1 = require("./db/appDataSource");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    // origin: ["https://admin.koscatrecycler.com"],
    // origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Credentials', 'true');
//   // Other CORS headers...
//   next();
// });
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(bodyParser.json());
app.use('/api', routes_1.default);
const server = http_1.default.createServer(app);
const SERVER_PORT = process.env.SERVER_PORT;
server.listen(8000, () => {
    console.log(`Server running on ${process.env.SERVER_URL}:${SERVER_PORT}`);
});
const __init = async () => {
    try {
        await appDataSource_1.AppDataSource.initialize();
        console.log("Data Source has been initialized!");
    }
    catch (error) {
        console.log('Error connecting to the database', error);
    }
};
__init();
//# sourceMappingURL=app.js.map