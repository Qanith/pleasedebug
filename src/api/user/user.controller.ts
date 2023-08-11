import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Render,
} from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  service: any;
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @Render('user')
  public async getUser(@Param('id', ParseIntPipe) id: number) {
    const user: User = await this.userService.getUser(id);
    return { user };
  }

  @Post()
  public createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.service.createUser(body);
  }
}
