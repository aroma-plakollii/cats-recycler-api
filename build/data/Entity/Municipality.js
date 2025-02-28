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
exports.Municipality = void 0;
const typeorm_1 = require("typeorm");
const Country_1 = require("./Country");
let Municipality = class Municipality extends typeorm_1.BaseEntity {
    constructor(idMunicipality, municipalityName, idCountry) {
        super();
        this.idMunicipality = idMunicipality;
        this.municipalityName = municipalityName;
        this.idCountry = idCountry;
    }
};
exports.Municipality = Municipality;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Municipality.prototype, "idMunicipality", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Municipality.prototype, "municipalityName", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Country_1.Country, { nullable: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Country_1.Country)
], Municipality.prototype, "idCountry", void 0);
exports.Municipality = Municipality = __decorate([
    (0, typeorm_1.Entity)({ name: 'municipalities' }),
    __metadata("design:paramtypes", [Number, String, Country_1.Country])
], Municipality);
//# sourceMappingURL=Municipality.js.map