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
exports.UserType = void 0;
const typeorm_1 = require("typeorm");
let UserType = class UserType extends typeorm_1.BaseEntity {
    constructor(idUserType, typeName) {
        super();
        this.idUserType = idUserType;
        this.typeName = typeName;
    }
};
exports.UserType = UserType;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserType.prototype, "idUserType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserType.prototype, "typeName", void 0);
exports.UserType = UserType = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Number, String])
], UserType);
//# sourceMappingURL=UserType.js.map