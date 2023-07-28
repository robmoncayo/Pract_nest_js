import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from 'src/users/schema/users.schema';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { User } from 'src/users/schema/users.schema';
import { Model } from 'mongoose';
import { hash } from 'bcrypt';



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

        login() {}

}
