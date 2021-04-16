import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Login, Loginchema } from './login';
import { LoginController } from './login.controller';
import { LoginService } from './Login.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';


@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Login.name,
            schema: Loginchema,
        }]),

        PassportModule,

        JwtModule.register({
            signOptions: { expiresIn: '300s' },
            secret: "hard-to-guess",
        })
    ],

    exports: [],
    controllers: [LoginController],
    providers: [LoginService, JwtModule]
})
export class LoginModule { }

