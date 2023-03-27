import { Module } from '@nestjs/common';
import { CharactersModule } from './characters/characters.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CharactersModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
