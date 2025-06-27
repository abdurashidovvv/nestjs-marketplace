import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCategory1750219624804 implements MigrationInterface {
    name = 'AddCategory1750219624804'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categoires" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addedById" integer, CONSTRAINT "PK_5174d672b0017a45d5827d7301b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "categoires" ADD CONSTRAINT "FK_4e34a585b2fc934d7b2989b4558" FOREIGN KEY ("addedById") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categoires" DROP CONSTRAINT "FK_4e34a585b2fc934d7b2989b4558"`);
        await queryRunner.query(`DROP TABLE "categoires"`);
    }

}
