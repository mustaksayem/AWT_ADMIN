"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
let AdminService = class AdminService {
    adduser(add) {
        return "Name is :" + add.Name + " ; Id is  : " + add.id + " and , location is : " + add.location;
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
    (0, common_1.Injectable)()
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map