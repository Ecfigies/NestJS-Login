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
exports.LoginController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const login_1 = require("./login");
const Login_service_1 = require("./Login.service");
const passport_1 = require("@nestjs/passport");
let LoginController = class LoginController {
    constructor(loginService) {
        this.loginService = loginService;
    }
    async criar(login) {
        return this.loginService.createUser(login.username, login.password);
    }
    async signIn(Login) {
        return await this.loginService.validateUser(Login.username, Login.password);
    }
    async update(req, res, body) {
        res.status(common_1.HttpStatus.OK).json({
            success: true
        });
    }
};
__decorate([
    common_2.Post('/signup'),
    __param(0, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_1.Login]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "criar", null);
__decorate([
    common_2.Post('/signin'),
    __param(0, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_1.Login]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "signIn", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('local')),
    common_2.Put('/check'),
    __param(0, common_1.Req()), __param(1, common_1.Res()), __param(2, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "update", null);
LoginController = __decorate([
    common_1.Controller('login'),
    __metadata("design:paramtypes", [Login_service_1.LoginService])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map