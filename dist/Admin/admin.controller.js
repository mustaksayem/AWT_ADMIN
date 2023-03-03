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
const admin_service_1 = require("../Services/admin.service");
const session_guard_1 = require("./session.guard");
const multer_1 = require("multer");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    getProfile(session) {
        console.log(session.Email);
        return this.adminService.Profile();
    }
    insert(admindto, file) {
        admindto.fileName = file.filename;
        return this.adminService.insert(admindto);
    }
    signin(session, admindto) {
        if (this.adminService.signin(admindto)) {
            session.Email = admindto.Email;
            console.log(session.Email);
            return { message: " login success" };
        }
        else {
            return { message: "login  faild" };
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Get)("/getindex"),
    __param(0, (0, decorators_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getProfile", null);
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
], AdminController.prototype, "insert", null);
__decorate([
    (0, common_1.Get)('/signin'),
    __param(0, (0, decorators_1.Session)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, admin_dto_1.AdminDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "signin", null);
AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
exports.AdminController = AdminController;
function moment() {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=admin.controller.js.map