import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './login/login.module';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/Login.service';
import { PassportModule } from '@nestjs/passport';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://ecfigies:eunao21@cluster0.ubm7h.gcp.mongodb.net/blog?retryWrites=true&w=majority'), 
  LoginModule, 
  PassportModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
