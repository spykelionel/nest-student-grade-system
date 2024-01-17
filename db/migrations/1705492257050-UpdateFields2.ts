import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateFields21705492257050 implements MigrationInterface {
    name = 'UpdateFields21705492257050'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`student\` DROP FOREIGN KEY \`FK_99167d9db2a51641fbca4a733d9\``);
        await queryRunner.query(`ALTER TABLE \`student\` DROP COLUMN \`gradesId\``);
        await queryRunner.query(`ALTER TABLE \`grade\` ADD \`studentId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`grade\` ADD CONSTRAINT \`FK_770cab79ce1d111bc05db17cfbd\` FOREIGN KEY (\`studentId\`) REFERENCES \`student\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`grade\` DROP FOREIGN KEY \`FK_770cab79ce1d111bc05db17cfbd\``);
        await queryRunner.query(`ALTER TABLE \`grade\` DROP COLUMN \`studentId\``);
        await queryRunner.query(`ALTER TABLE \`student\` ADD \`gradesId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`student\` ADD CONSTRAINT \`FK_99167d9db2a51641fbca4a733d9\` FOREIGN KEY (\`gradesId\`) REFERENCES \`grade\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
