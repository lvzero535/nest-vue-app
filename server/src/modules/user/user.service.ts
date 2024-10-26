import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  /**
   * @InjectRepository(UserEntity) 注入User的存储库到服务里
   * @param usersRepository 存储库
   */
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  findAllUsers(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }
  create(userDto: UserDto) {
    return this.usersRepository.save(userDto);
  }
}
