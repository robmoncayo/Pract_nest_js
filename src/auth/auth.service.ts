import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from 'src/users/schema/users.schema';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { User } from 'src/users/schema/users.schema';
import { Model } from 'mongoose';
import { hash, compare } from 'bcrypt';
import { LoginAuthDto } from './dto/login-auth.dto';



@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>,

    ){}

      async  register(userObject:RegisterAuthDto) {
        const { password } = userObject; //TODO 123456 ES TEXTO PLANO, NUNCA SE GUARDA, SE HACE UN HASH
        const plainTohash = await hash(password, 10) // TODO $34503515464, SE ENCRIPTA, SE VUELVE HASH
        userObject = {...userObject, password:plainTohash}
        return this.userModel.create(userObject)
        }

      async login(userObjectLogin:LoginAuthDto) {
        const{ email, password } = userObjectLogin; //
          const findUser = await this.userModel.findOne({ email});
          if(!findUser) throw new HttpException ('USER_NOT_FOUND', 404)

          const checkPassword = await compare(password, findUser.password);

          if (!checkPassword) throw new HttpException('PASSWORD_INCORRECT', 403)

          const data = findUser

          return data
        }

}
