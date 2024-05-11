import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1715451022229 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE tutor (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone VARCHAR(255) NOT NULL,
                dateOfBirth DATE NOT NULL,
                zipCode VARCHAR(255) NOT NULL
            )
        `);

    await queryRunner.query(`
            CREATE TABLE pet (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name VARCHAR(255) NOT NULL,
                species VARCHAR(255) NOT NULL,
                carry BOOLEAN NOT NULL,
                tutorId INTEGER NOT NULL,
                weight FLOAT NOT NULL,
                dateOfBirth DATE NOT NULL,
                FOREIGN KEY (tutorId) REFERENCES tutor(id),
                
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE pet");
    await queryRunner.query("DROP TABLE tutor");
  }
}
