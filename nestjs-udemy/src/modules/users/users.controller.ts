import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.usersService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: User['id']): Promise<User | undefined> {
    return this.usersService.getOne(id);
  }

  @Post()
  createUser(
    @Body('email') email: User['email'],
    @Body('password') password: User['password'],
  ): Promise<User> {
    return this.usersService.create({ email, password });
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: User['id']): Promise<void> {
    return this.usersService.delete(id);
  }
}
