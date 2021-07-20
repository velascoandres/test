import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  findAll(params?: Record<keyof User, any>): User[] {
    return this.userRepository.findAll(params);
  }

  findOne(id: string) {
    return this.userRepository.findById(id);
  }
}
