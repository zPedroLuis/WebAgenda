"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evento1661725980496 = void 0;
const typeorm_1 = require("typeorm");
class Evento1661725980496 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "evento",
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("evento");
    }
}
exports.Evento1661725980496 = Evento1661725980496;
