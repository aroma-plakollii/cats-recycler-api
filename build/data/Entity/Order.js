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
exports.Order = void 0;
const typeorm_1 = require("typeorm");
const Client_1 = require("./Client");
const Users_1 = require("./Users");
let Order = class Order extends typeorm_1.BaseEntity {
    constructor(idOrder, idClient, quantity, price, orderDate, type, material, kilogram, totalPrice, idUser, createdAt, updatedAt) {
        super();
        this.idOrder = idOrder;
        this.idClient = idClient;
        this.quantity = quantity;
        this.price = price;
        this.orderDate = orderDate;
        this.type = type;
        this.material = material;
        this.kilogram = kilogram;
        this.totalPrice = totalPrice;
        this.idUser = idUser,
            this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
};
exports.Order = Order;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Order.prototype, "idOrder", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Client_1.Client, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'idClient' }),
    __metadata("design:type", Client_1.Client)
], Order.prototype, "idClient", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Order.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Order.prototype, "orderDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "material", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "kilogram", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Order.prototype, "totalPrice", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.User, { nullable: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'idUser' }),
    __metadata("design:type", Users_1.User)
], Order.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ nullable: true }),
    __metadata("design:type", Date)
], Order.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ nullable: true }),
    __metadata("design:type", Date)
], Order.prototype, "updatedAt", void 0);
exports.Order = Order = __decorate([
    (0, typeorm_1.Entity)({ name: 'orders' }),
    __metadata("design:paramtypes", [Number, Client_1.Client, Number, Number, Date, String, String, Number, Number, Users_1.User,
        Date,
        Date])
], Order);
//# sourceMappingURL=Order.js.map