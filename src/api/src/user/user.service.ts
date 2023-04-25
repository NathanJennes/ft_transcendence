import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(  
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

    async findOne(id: number): Promise<User | null> {
      return this.userRepository.findOne({where: {id}});
    }

    async findAll(): Promise<User[]> {
      return this.userRepository.find();
    }

    async findUser(name: string, password: string): Promise<User | null> {
      return this.userRepository.findOne({where: {name, password}});
    }

    async create(body: CreateUserDto): Promise<User> {
      const user: User = new User();
  
      user.name = body.name;
      user.password = body.password;
  
      return this.userRepository.save(user);
    }
}