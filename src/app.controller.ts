import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

//TODO http://localhost:3000/

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getUsers(): string []{
    return this.appService.getUsers(); 
  }
  @Post()
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
