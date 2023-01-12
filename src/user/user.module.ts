import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userRepository } from './repo/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([userRepository])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
