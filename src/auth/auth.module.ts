import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schema/users.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstanst } from './jwt.constants';

;


@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name:User.name,
        schema: UserSchema,
      }
    ]),
    JwtModule.register({
      global: true,
      secret: jwtConstanst.secret,
      signOptions: { expiresIn: '20h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
