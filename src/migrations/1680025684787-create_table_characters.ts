import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableCharacters1680025684787 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    CREATE TABLE public."character" (
        id serial4 NOT NULL,
        "name" varchar NOT NULL,
        description varchar NOT NULL,
        thumbnail varchar NULL,
        created_at timestamp NOT NULL DEFAULT now(),
        updated_at timestamp NOT NULL DEFAULT now(),
        CONSTRAINT "PK_6c4aec48c564968be15078b8ae5" PRIMARY KEY (id)
    );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`drop table public.characters`);
  }
}
