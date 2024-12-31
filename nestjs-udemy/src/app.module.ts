import { Module } from '@nestjs/common';
import { UsersController, UsersService } from './modules';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
