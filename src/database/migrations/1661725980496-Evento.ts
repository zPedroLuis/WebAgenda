import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Evento1661725980496 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"evento",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true

                    },
                    {
                        name: "participantes",
                        type: "uuid",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "data",
                        type: "date",                
                    },
                    {
                        name: "horario",
                        type: "time",
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_participantes",
                        columnNames: ["participantes"],
                        referencedTableName: "pessoa",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
    )}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("evento");
    }

}
