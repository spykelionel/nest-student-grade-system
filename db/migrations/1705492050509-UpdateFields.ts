import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateFields1705492050509 implements MigrationInterface {
    name = 'UpdateFields1705492050509'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`course\` ADD \`gradeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`student\` ADD \`gradesId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`course\` ADD CONSTRAINT \`FK_9907378074b1d484169df5d5b5f\` FOREIGN KEY (\`gradeId\`) REFERENCES \`grade\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`student\` ADD CONSTRAINT \`FK_99167d9db2a51641fbca4a733d9\` FOREIGN KEY (\`gradesId\`) REFERENCES \`grade\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`student\` DROP FOREIGN KEY \`FK_99167d9db2a51641fbca4a733d9\``);
        await queryRunner.query(`ALTER TABLE \`course\` DROP FOREIGN KEY \`FK_9907378074b1d484169df5d5b5f\``);
        await queryRunner.query(`ALTER TABLE \`student\` DROP COLUMN \`gradesId\``);
        await queryRunner.query(`ALTER TABLE \`course\` DROP COLUMN \`gradeId\``);
    }

}
