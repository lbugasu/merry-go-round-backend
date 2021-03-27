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
const type_graphql_1 = require("type-graphql");
let ProductType = class ProductType {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductType.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductType.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], ProductType.prototype, "awardee", void 0);
__decorate([
    type_graphql_1.Field((type) => [String]),
    __metadata("design:type", Array)
], ProductType.prototype, "bids", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductType.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductType.prototype, "photo", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductType.prototype, "owner", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], ProductType.prototype, "likes", void 0);
ProductType = __decorate([
    type_graphql_1.ObjectType()
], ProductType);
exports.default = ProductType;
