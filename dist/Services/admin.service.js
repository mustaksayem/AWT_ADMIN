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
const admin_entity_1 = require("../entitys/admin.entity");
const bcrypt = require("bcrypt");
const mailer_1 = require("@nestjs-modules/mailer");
let AdminService = class AdminService {
    constructor(adminRepo, mailerService) {
        this.adminRepo = adminRepo;
        this.mailerService = mailerService;
    }
    Profile() {
        return "this is the admin profile";
    }
    async AdminSingUp(adminDto) {
        const salt = await bcrypt.genSalt();
        const hasse = await bcrypt.hash(adminDto.Password, salt);
        adminDto.Password = hasse;
        return this.adminRepo.save(adminDto);
    }
    async AdminSignIn(admindto) {
        console.log(admindto.Password);
        const data = await this.adminRepo.findOneBy({ Email: admindto.Email });
        const isMatch = await bcrypt.compare(admindto.Password, data.Password);
        if (isMatch) {
            return data.id;
        }
        else {
            return 0;
        }
    }
    async update(adminDto, id) {
        const salt = await bcrypt.genSalt();
        const hasse = await bcrypt.hash(adminDto.Password, salt);
        adminDto.Password = hasse;
        return this.adminRepo.update(id, adminDto);
    }
    async sendEmail(mydata, file) {
        if (!mydata.email) {
            throw new Error('Recipient email address is missing');
        }
        const attachments = [];
        if (file) {
            attachments.push({
                filename: file.originalname,
                content: file.buffer,
                encoding: 'base64'
            });
        }
        return await this.mailerService.sendMail({
            to: mydata.email,
            subject: mydata.subject,
            text: mydata.text,
            attachments: attachments
        });
    }
    getAdminById(id) {
        return this.adminRepo.findOneBy({ id });
    }
    DeleteAdmin(id) {
        return this.adminRepo.delete(id);
    }
    FindTransprotationByAdminId(id) {
        return this.adminRepo.find(({ where: { id: id }, relations: { productEntity: true, }, }));
    }
};
AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_entity_1.AdminEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        mailer_1.MailerService])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map