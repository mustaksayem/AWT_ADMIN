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
exports.CustomerDto = exports.AdminDto = void 0;
const class_validator_1 = require("class-validator");
class AdminDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "id not epmty enter your id" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AdminDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "name must be string" }),
    (0, class_validator_1.IsNotEmpty)({ message: "enter your name" }),
    (0, class_validator_1.MaxLength)(10, { message: "nmae max length is 10" }),
    (0, class_validator_1.MinLength)(3, { message: "name Min length is 3" }),
    __metadata("design:type", String)
], AdminDto.prototype, "Name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Enter your Locatoon" }),
    (0, class_validator_1.IsString)({ message: "Location must be String" }),
    __metadata("design:type", String)
], AdminDto.prototype, "location", void 0);
exports.AdminDto = AdminDto;
class CustomerDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Enter your Locatoon" }),
    (0, class_validator_1.IsString)({ message: "Location must be String" }),
    __metadata("design:type", String)
], CustomerDto.prototype, "Name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Enter your naem" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", String)
], CustomerDto.prototype, "number", void 0);
exports.CustomerDto = CustomerDto;
//# sourceMappingURL=admin.dto.js.map