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

  async getOne(id: User['id']): Promise<User> {
    /*
      Applying .filter since .find possibly returns undefined,
      what's not a possible scenario in this case.
      In addition, only one element should be found an returned.

      return await this.users.find((_) => _.id === id);

      TODO.: undefined results should be handled at the controller.
    */
    return await this.users.filter((_) => _.id === id)[0];
  }

  async create(args: CreateUserDTO): Promise<User> {
    const newUser: User = {
      id: uuid(),
      ...args,
    };
    this.users.push(newUser);
    return newUser;
  }

  async update(args: User): Promise<User> {
    const user = await this.getOne(args.id);
    const index = this.users.indexOf(user);
    this.users[index] = { ...args };

    return await this.getOne(this.users[index].id);
  }

  async delete(id: User['id']): Promise<void> {
    this.users = this.users.filter((_) => _.id !== id);
  }
}
