import { Login } from './login';
import { LoginService } from './Login.service';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    criar(login: Login): Promise<Login>;
    signIn(Login: Login): Promise<any>;
    update(req: any, res: any, body: any): Promise<void>;
}
