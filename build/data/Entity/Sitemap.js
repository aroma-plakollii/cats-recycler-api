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
exports.Sitemap = void 0;
const typeorm_1 = require("typeorm");
let Sitemap = class Sitemap extends typeorm_1.BaseEntity {
    constructor(idSitemap, name, url, isMenuItem) {
        super();
        this.idSitemap = idSitemap;
        this.name = name;
        this.url = url;
        this.isMenuItem = isMenuItem;
    }
};
exports.Sitemap = Sitemap;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Sitemap.prototype, "idSitemap", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Sitemap.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Sitemap.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: false,
        type: "boolean"
    }),
    __metadata("design:type", Boolean)
], Sitemap.prototype, "isMenuItem", void 0);
exports.Sitemap = Sitemap = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Number, String, String, Boolean])
], Sitemap);
//# sourceMappingURL=Sitemap.js.map