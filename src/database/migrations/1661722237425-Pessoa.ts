import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Pessoa1661722237425 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"pessoa",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true

                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true
                    }                    
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pessoa");
    }

}
