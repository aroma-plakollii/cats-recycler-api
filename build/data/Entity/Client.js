"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const typeorm_1 = require("typeorm");
const Country_1 = require("./Country");
const Municipality_1 = require("./Municipality");
const Users_1 = require("./Users");
let Client = class Client extends typeorm_1.BaseEntity {
    constructor(idClient, firstName, lastName, phone, nationalId, digitalSignature, idCountry, idMunicipality, idUser) {
        super();
        this.idClient = idClient;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.nationalId = nationalId;
        this.digitalSignature = digitalSignature;
        this.idCountry = idCountry;
        this.idMunicipality = idMunicipality;
        this.idUser = idUser;
    }
};
exports.Client = Client;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Client.prototype, "idClient", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Client.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Client.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Client.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Client.prototype, "nationalId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true
    }),
    __metadata("design:type", String)
], Client.prototype, "digitalSignature", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Country_1.Country, { nullable: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'idCountry' }),
    __metadata("design:type", Country_1.Country)
], Client.prototype, "idCountry", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Municipality_1.Municipality, { nullable: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'idMunicipality' }),
    __metadata("design:type", Municipality_1.Municipality)
], Client.prototype, "idMunicipality", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.User, { nullable: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'idUser' }),
    __metadata("design:type", Users_1.User)
], Client.prototype, "idUser", void 0);
exports.Client = Client = __decorate([
    (0, typeorm_1.Entity)({ name: 'clients' }),
    __metadata("design:paramtypes", [Number, String, String, String, String, String, Country_1.Country,
        Municipality_1.Municipality,
        Users_1.User])
], Client);
//# sourceMappingURL=Client.js.map