import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { User } from '../entities/user.entity';

export interface Repository<T> {
  findAll(params?: Record<keyof T, any>): T[];
  findById(id: string): T;
}

@Injectable()
export class UserRepository implements Repository<User> {
  // retrieves users from the json file
  private loadData(): Record<string, User> {
    const rawData = fs.readFileSync('./data/users.json', 'utf8');
    return JSON.parse(rawData);
  }
  // find users from a query dictionary called params (optional)
  findAll(params?: Record<keyof User, any>): User[] {
    const usersData = this.loadData();
    const users = Object.values(usersData) as User[];
    if (!params) {
      return users;
    }
    return users.filter((user: User) => {
      // get query fields from params
      const fields = Object.keys(params) as (keyof User)[];
      // compare if every condition match with record
      const match = fields.every(
        (field: keyof User) => user[field] === params[field],
      );
      return match;
    });
  }

  findById(id: string): User {
    const usersData = this.loadData();
    const user = usersData[id];
    if (!user) {
      throw new Error('Not found');
    }
    return user;
  }
}
