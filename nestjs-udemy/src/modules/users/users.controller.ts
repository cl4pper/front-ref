import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.usersService.getAll();
  }

  @Post()
  createUser(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<User> {
    return this.usersService.create({ email, password });
  }

  @Delete()
  deleteUser(@Body('id') id: string): Promise<User[]> {
    return this.usersService.delete(id);
  }
}
