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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const admin_entity_1 = require("./admin.entity");
let AdminService = class AdminService {
    constructor(adminRepo) {
        this.adminRepo = adminRepo;
    }
    insert(user) {
        return this.adminRepo.save(user);
    }
    getUser(id) {
        return "Get single  user id is : " + id;
    }
    getallUser() {
        return "Get all user ";
    }
    searchUser(id) {
        return "search the user " + id;
    }
    updateUSer(id) {
        return "update user " + id;
    }
    deleteUser(id) {
        return "delete user " + id;
    }
    addcustomer(add) {
        return "Name is :" + add.Name + "  and Numbner is : " + add.number;
    }
    getcustomer(number) {
        return "Get single  customer " + number;
    }
    searchcustomer(number) {
        return "search the customer " + number;
    }
    updatecustomer(number) {
        return "update customer " + number;
    }
    deletecustomer(number) {
        return "delete customer " + number;
    }
    customerExit(id) {
        if (id == true)
            return "Customer Exit";
        else
            return "Customer not exit";
    }
};
AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_entity_1.AdminEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map