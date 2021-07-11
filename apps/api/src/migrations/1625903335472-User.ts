import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * password = root
 */

export class User1625903335472 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    INSERT INTO users (username, nickname, phone, email, password)
    VALUES ('admin', 'administrator', '+375293333333', 'admin@example.com', '$2a$10$szFBj8rwUdcQNoJm/I1t0uIGmlQ3Ccay1e44yEvPmH340qVfRVIEC')`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    DELETE FROM users WHERE(username = 'admin')`);
  }
}
