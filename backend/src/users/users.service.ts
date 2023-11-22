import { Injectable } from '@nestjs/common';
import {} from './user.entity';

@Injectable()
export class UsersService {
  async findAll(): Promise<any> {
    return 'asdf';
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
