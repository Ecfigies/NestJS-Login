import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Login } from './login';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {

    constructor(
        @InjectModel(Login.name) private loginModel: Model<Login>,
        private readonly jwtService: JwtService,
    ) { }

    //Validate USER
    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.loginModel.findOne({ username: username });

        if (user && user.password == password) {

            return this.createJwt(username);

        }
        return console.error("Incorrect password or login");
        ;
    }

    async createUser(username: string, password: string): Promise<any> {
        const create = {
            username: username,
            password: password
        }
        const newUser = await this.loginModel.create(create);
        console.log("User created: " + username + " " + password)
        return newUser;
    }

    // // create JWT
    async createJwt(username: any) {
        const user = await this.loginModel.findOne({ username: username });
        const payload = { username: user.username, id: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        }
    }

    async verifyToken(){

        if(!this.validateUser){
            throw new HttpException('Invalid Token', HttpStatus.UNAUTHORIZED);
        }

        return console.log("Good to go") ;
       

    }

    






}



