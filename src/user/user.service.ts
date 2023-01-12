import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { userRepository } from './repo/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: userRepository){}
  create(createUserDto: CreateUserDto): Promise<User> {
    let user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.age = createUserDto.age;
    return this.userRepository.save(user);
  }

  findUserByAge(age: number) {
    return this.userRepository.getUserByAge(age);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id): Promise<User> {
    return this.userRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let user = new User();
    user.firstName = updateUserDto.firstName;
    user.lastName = updateUserDto.lastName;
    user.age = updateUserDto.age;
    user.id = id;
    return this.userRepository.save(user);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
