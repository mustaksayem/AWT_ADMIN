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
const decorators_1 = require("@nestjs/common/decorators");
const platform_express_1 = require("@nestjs/platform-express");
const admin_dto_1 = require("../DOTs/admin.dto");
const customer_dto_1 = require("../DOTs/customer.dto");
const admin_service_1 = require("../Services/admin.service");
const session_guard_1 = require("./session.guard");
const multer_1 = require("multer");
const customer_service_1 = require("../Services/customer.service");
const product_dto_1 = require("../DOTs/product.dto");
const product_service_1 = require("../Services/product.service");
let AdminController = class AdminController {
    constructor(adminService, productService, customerService) {
        this.adminService = adminService;
        this.productService = productService;
        this.customerService = customerService;
    }
    Profile(session) {
        console.log(session.Email);
        return this.adminService.Profile();
    }
    AdminSingUp(admindto, file) {
        admindto.fileName = file.filename;
        return this.adminService.AdminSingUp(admindto);
    }
    AdminSignIn(session, admindto) {
        if (this.adminService.AdminSignIn(admindto)) {
            session.Email = admindto.Email;
            console.log(session.Email);
            return { message: " login success" };
        }
        else {
            return { message: "login  faild" };
        }
    }
    getAdminById(id) {
        return this.adminService.getAdminById(id);
    }
    DeleteAdmin(id) {
        return this.adminService.DeleteAdmin(id);
    }
    async update(admindto, id) {
        return this.adminService.update(admindto, id);
    }
    AddProduct(productDto, file) {
        productDto.Image = file.filename;
        return this.productService.AddProduct(productDto);
        console.log(file);
    }
    getallProduct() {
        return this.productService.getallProduct();
    }
    getProductByCategory(Category) {
        return this.productService.getProductByCategory(Category);
    }
    getProductById(id) {
        return this.productService.getProductById(id);
    }
    SearchProductByCategory(Category) {
        return this.productService.SearchProductByCategory(Category);
    }
    SearchProductById(id) {
        return this.productService.SearchProductById(id);
    }
    DeleteProduct(id) {
        return this.productService.DeleteProduct(id);
    }
    async updateProductr(productDto, id) {
        return this.productService.updateProductr(productDto, id);
    }
    async sendEmail(mydata, file) {
        return await this.adminService.sendEmail(mydata, file);
    }
    addcustomer(dto) {
        return this.customerService.addcustomer(dto);
    }
    getCustomerByid(id) {
        return this.customerService.getCustomerByid(id);
    }
    async updateCustomer(Dto, id) {
        return this.customerService.updateCustomer(Dto, id);
    }
    DeleteCustomer(id) {
        return this.customerService.DeleteCustomer(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Get)("/getindex"),
    __param(0, (0, decorators_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "Profile", null);
__decorate([
    (0, common_1.Post)('/signup'),
    (0, decorators_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname);
            }
        })
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 160000000 }),
            new common_1.FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.AdminDto, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "AdminSingUp", null);
__decorate([
    (0, common_1.Get)('/AdminSignIn'),
    __param(0, (0, decorators_1.Session)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, admin_dto_1.AdminDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "AdminSignIn", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Get)("/getAdminById/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getAdminById", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Delete)("/deleteAdmin/:id"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "DeleteAdmin", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Put)("/update/:id"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.AdminDto, Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Post)("/addProduct"),
    (0, decorators_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname);
            }
        })
    })),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 160000000 }),
            new common_1.FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.ProductDto, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "AddProduct", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Get)("/allproduct"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getallProduct", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Get)("getProductByCategory/:Category"),
    __param(0, (0, common_1.Param)("Category")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getProductByCategory", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Get)("/getProductById/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getProductById", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Get)("SearchProductByCategory/:Category"),
    __param(0, (0, common_1.Param)("Category")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "SearchProductByCategory", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Get)("/searchProductById/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "SearchProductById", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Delete)("/deleteProduct/:id"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "DeleteProduct", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Put)("/updateproduct/:id"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.ProductDto, Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateProductr", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Post)('/sendemail'),
    (0, decorators_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "sendEmail", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Post)("/addcustomer"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_dto_1.CustomerDto]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "addcustomer", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Get)("getcustomerbyid/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getCustomerByid", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Put)("/updatecustomer/:id"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_dto_1.CustomerDto, Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateCustomer", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Delete)("/deletecustomer/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "DeleteCustomer", null);
AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService,
        product_service_1.ProductService,
        customer_service_1.CustomerService])
], AdminController);
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map