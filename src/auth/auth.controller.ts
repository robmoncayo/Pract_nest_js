import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto'; // Asumiendo que tienes un DTO para el login

//TODO POST -http:localhost/auth
@ApiTags('auth')
@Controller('auth')
//El Localhost y la ruta atuh esta interactuando con el Authcontroller
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register') // Decorador para el endpoint de registro, los decoradores no llevan ";"
    async registerUser(@Body() userObject: RegisterAuthDto) {
        return this.authService.register(userObject)
        console.log({ body: userObject });

    }

    @Post('login') // Decorador para el endpoint de login
    async loginUser(@Body() loginData: LoginAuthDto) {
        // console.log({ body:  });
        // Puedes devolver una respuesta con la información de inicio de sesión si lo deseas
    }
}


