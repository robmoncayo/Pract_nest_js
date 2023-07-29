import { Injectable } from '@nestjs/common';
import { CreateusersDto } from './dto/create-user.dto';
import { UpdateusersDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createusersDto: CreateusersDto) {
    // Lógica para crear un usuario en la base de datos
  }

  findAll() {
    // Lógica para obtener todos los usuarios de la base de datos
  }

  findOne(id: number) {
    // Lógica para obtener un usuario por su ID de la base de datos
  }

  update(id: number, updateusersDto: UpdateusersDto) {
    // Lógica para actualizar un usuario en la base de datos
  }

  remove(id: number) {
    // Lógica para eliminar un usuario de la base de datos
  }
}
