import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { User } from 'src/entities';
import { CreateUserDTO } from './dto';

@Injectable()
export class UsersService {
  users: User[] = [];
  async getAll(): Promise<User[]> {
    return await this.users;
  }

  async create(args: CreateUserDTO): Promise<User> {
    const newUser: User = {
      id: uuid(),
      ...args,
    };
    this.users.push(newUser);
    return newUser;
  }

  async delete(id: string): Promise<User[]> {
    this.users = this.users.filter((_) => _.id !== id);
    return await this.getAll();
  }
}
