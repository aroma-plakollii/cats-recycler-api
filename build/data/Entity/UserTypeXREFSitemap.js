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
exports.UserTypeXREFSitemap = void 0;
const typeorm_1 = require("typeorm");
const UserType_1 = require("./UserType");
const Sitemap_1 = require("./Sitemap");
let UserTypeXREFSitemap = class UserTypeXREFSitemap extends typeorm_1.BaseEntity {
    constructor(idUserTypeXREFSitemap, idUserType, idSitemap, hasAuthorization, create, read, update, destroy) {
        super();
        this.idUserTypeXREFSitemap = idUserTypeXREFSitemap;
        this.idUserType = idUserType;
        this.idSitemap = idSitemap;
        this.hasAuthorization = hasAuthorization;
        this.create = create;
        this.read = read;
        this.update = update;
        this.destroy = destroy;
    }
};
exports.UserTypeXREFSitemap = UserTypeXREFSitemap;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserTypeXREFSitemap.prototype, "idUserTypeXREFSitemap", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UserType_1.UserType, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'idUserType' }),
    __metadata("design:type", UserType_1.UserType)
], UserTypeXREFSitemap.prototype, "idUserType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Sitemap_1.Sitemap, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'idSitemap' }),
    __metadata("design:type", Sitemap_1.Sitemap
    // if true then can access to node/page
    )
], UserTypeXREFSitemap.prototype, "idSitemap", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: false,
        type: "boolean"
    }),
    __metadata("design:type", Boolean)
], UserTypeXREFSitemap.prototype, "hasAuthorization", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: false,
        type: "boolean"
    }),
    __metadata("design:type", Boolean)
], UserTypeXREFSitemap.prototype, "create", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: false,
        type: "boolean"
    }),
    __metadata("design:type", Boolean)
], UserTypeXREFSitemap.prototype, "read", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: false,
        type: "boolean"
    }),
    __metadata("design:type", Boolean)
], UserTypeXREFSitemap.prototype, "update", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: false,
        type: "boolean"
    }),
    __metadata("design:type", Boolean)
], UserTypeXREFSitemap.prototype, "destroy", void 0);
exports.UserTypeXREFSitemap = UserTypeXREFSitemap = __decorate([
    (0, typeorm_1.Entity)({ name: 'user_type_xref_sitemap' }),
    __metadata("design:paramtypes", [Number, UserType_1.UserType,
        Sitemap_1.Sitemap, Boolean, Boolean, Boolean, Boolean, Boolean])
], UserTypeXREFSitemap);
//# sourceMappingURL=UserTypeXREFSitemap.js.map