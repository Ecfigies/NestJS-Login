import { Login } from './login';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
export declare class LoginService {
    private loginModel;
    private readonly jwtService;
    constructor(loginModel: Model<Login>, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<any>;
    createUser(username: string, password: string): Promise<any>;
    createJwt(username: any): Promise<{
        access_token: string;
    }>;
}
