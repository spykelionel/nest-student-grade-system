import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateFields31705492339351 implements MigrationInterface {
    name = 'UpdateFields31705492339351'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`course\` DROP FOREIGN KEY \`FK_9907378074b1d484169df5d5b5f\``);
        await queryRunner.query(`ALTER TABLE \`course\` DROP COLUMN \`gradeId\``);
        await queryRunner.query(`ALTER TABLE \`grade\` ADD \`courseId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`grade\` ADD CONSTRAINT \`FK_1b8c18efb3f2ecaf5603e2729ee\` FOREIGN KEY (\`courseId\`) REFERENCES \`course\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`grade\` DROP FOREIGN KEY \`FK_1b8c18efb3f2ecaf5603e2729ee\``);
        await queryRunner.query(`ALTER TABLE \`grade\` DROP COLUMN \`courseId\``);
        await queryRunner.query(`ALTER TABLE \`course\` ADD \`gradeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`course\` ADD CONSTRAINT \`FK_9907378074b1d484169df5d5b5f\` FOREIGN KEY (\`gradeId\`) REFERENCES \`grade\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
