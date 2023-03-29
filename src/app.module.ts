import { Module } from '@nestjs/common';
import { CharactersModule } from './characters/characters.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Character } from './characters/entities/character.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Character],
      migrations: [`${__dirname}/migrations/{*.ts,*.js}`],
      migrationsRun: true,
    }),
    CharactersModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
