import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Login extends Document {

  @Prop()
  username: string;

  @Prop()
  password: string;

}

export const Loginchema = SchemaFactory.createForClass(Login);
