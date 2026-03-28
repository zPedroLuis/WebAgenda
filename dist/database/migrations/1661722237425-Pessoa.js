"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa1661722237425 = void 0;
const typeorm_1 = require("typeorm");
class Pessoa1661722237425 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "pessoa",
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("pessoa");
    }
}
exports.Pessoa1661722237425 = Pessoa1661722237425;
