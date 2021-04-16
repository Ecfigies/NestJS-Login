import { Document } from 'mongoose';
export declare class Login extends Document {
    username: string;
    password: string;
}
export declare const Loginchema: import("mongoose").Schema<Login, import("mongoose").Model<any, any>, undefined>;
