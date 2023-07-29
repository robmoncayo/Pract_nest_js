import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateusersDto } from './dto/create-user.dto';
import { UpdateusersDto } from './dto/update-user.dto';


@ApiTags('users')
@Controller('users') //TODO http://localhost:3000/users
export class ItemsController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createusersDto: CreateusersDto) {
    return this.usersService.create(createusersDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateusersDto: UpdateusersDto) {
    return this.usersService.update(+id, updateusersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}