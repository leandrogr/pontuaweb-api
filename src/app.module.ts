import { Module } from '@nestjs/common';
import { CharactersModule } from './characters/characters.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [CharactersModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
