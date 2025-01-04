import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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
  getOne(@Param('id') id: User['id']): Promise<User> {
    try {
      const user = this.usersService.getOne(id);
      if (!user) throw Error;
      return user;
    } catch {
      throw Error('User not found.');
    }
  }

  @Post()
  createUser(
    @Body('email') email: User['email'],
    @Body('password') password: User['password'],
  ): Promise<User> {
    return this.usersService.create({ email, password });
  }

  @Put()
  updateUser(@Body('user') data: User): Promise<User> {
    try {
      const user = this.usersService.getOne(data.id);
      if (!user) throw Error;

      return this.usersService.update(data);
    } catch {
      throw Error('Could not update user.');
    }
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: User['id']): Promise<void> {
    return this.usersService.delete(id);
  }
}
