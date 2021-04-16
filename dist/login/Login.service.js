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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const login_1 = require("./login");
const mongoose_2 = require("mongoose");
const jwt_1 = require("@nestjs/jwt");
let LoginService = class LoginService {
    constructor(loginModel, jwtService) {
        this.loginModel = loginModel;
        this.jwtService = jwtService;
    }
    async validateUser(username, password) {
        const user = await this.loginModel.findOne({ username: username });
        if (user && user.password == password) {
            return this.createJwt(username);
        }
        return console.error("Incorrect password or login");
        ;
    }
    async createUser(username, password) {
        const create = {
            username: username,
            password: password
        };
        const newUser = await this.loginModel.create(create);
        console.log("User created: " + username + " " + password);
        return newUser;
    }
    async createJwt(username) {
        const user = await this.loginModel.findOne({ username: username });
        const payload = { username: user.username, id: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
};
LoginService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(login_1.Login.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=Login.service.js.map