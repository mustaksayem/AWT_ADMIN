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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_dto_1 = require("./admin.dto");
const admin_service_1 = require("./admin.service");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    adduser(dto) {
        return this.adminService.adduser(dto);
    }
    getallUser() {
        return this.adminService.getallUser();
    }
    getUser(id) {
        return this.adminService.getUser(id);
    }
    SearchUser(id) {
        return this.adminService.searchUser(id);
    }
    updateUser(id) {
        return this.adminService.updateUSer(id);
    }
    delteteUser(id) {
        return this.adminService.deleteUser(id);
    }
    addcustomer(dto) {
        return this.adminService.addcustomer(dto);
    }
    getcustomer(number) {
        return this.adminService.getUser(number);
    }
    Searccustomer(number) {
        return this.adminService.searchcustomer(number);
    }
    updatecustomer(number) {
        return this.adminService.updatecustomer(number);
    }
    deltetecustomer(number) {
        return this.adminService.deletecustomer(number);
    }
    customerExit(id) {
        return this.adminService.customerExit(id);
    }
};
__decorate([
    (0, common_1.Post)("/adduser"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.AdminDto]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "adduser", null);
__decorate([
    (0, common_1.Get)("alluser"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AdminController.prototype, "getallUser", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)("/searchuser/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "SearchUser", null);
__decorate([
    (0, common_1.Put)("/updateuser/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)("/deleteuser/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "delteteUser", null);
__decorate([
    (0, common_1.Post)("/addcustomer"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.CustomerDto]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "addcustomer", null);
__decorate([
    (0, common_1.Get)("/:number"),
    __param(0, (0, common_1.Param)("number")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getcustomer", null);
__decorate([
    (0, common_1.Get)("/searchcustomer/:number"),
    __param(0, (0, common_1.Param)("number")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], AdminController.prototype, "Searccustomer", null);
__decorate([
    (0, common_1.Put)("/updatecustomer/:number"),
    __param(0, (0, common_1.Param)("number")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], AdminController.prototype, "updatecustomer", null);
__decorate([
    (0, common_1.Delete)("/deletecustomer/:number"),
    __param(0, (0, common_1.Param)("number")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], AdminController.prototype, "deltetecustomer", null);
__decorate([
    (0, common_1.Get)("/customerexit/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseBoolPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "customerExit", null);
AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map