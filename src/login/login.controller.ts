import { Controller, HttpStatus, Req, Res, Request, UseGuards } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Login } from './login';
import { LoginService } from './Login.service';
import { PassportModule, AuthGuard, PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-jwt'



@Controller('login')
export class LoginController {
    constructor(
        private readonly loginService: LoginService
    ) { }

    @Post('/signup')
    async criar(@Body() login: Login): Promise<Login> {
        return this.loginService.createUser(login.username, login.password);
    }

    @Post('/signin')
    async signIn(@Body() Login:Login) {
        return await this.loginService.validateUser(Login.username, Login.password);
    }

    @UseGuards(AuthGuard('local'))
    @Put('/check')
    async update(@Req() req: any, @Res() res: any, @Body() body: any) {
        res.status(HttpStatus.OK).json({
            success: true
        })
    }

}
