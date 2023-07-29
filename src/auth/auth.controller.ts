import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async registerUser(@Body() userObject: RegisterAuthDto) {
        console.log({ body: userObject });
        return this.authService.register(userObject);
    }

    @Post('login')
    async loginUser(@Body() userObjectLogin: LoginAuthDto) {
        return this.authService.login(userObjectLogin);
    }
}
