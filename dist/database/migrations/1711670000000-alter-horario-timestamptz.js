"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alterHorarioTimestamptz1711670000000 = void 0;
class alterHorarioTimestamptz1711670000000 {
    async up(queryRunner) {
        // Altera o tipo da coluna 'horario' para timestamptz, preservando os dados existentes
        await queryRunner.query(`ALTER TABLE "evento" ALTER COLUMN "horario" TYPE timestamptz USING horario::timestamptz`);
    }
    async down(queryRunner) {
        // Reverte para o tipo time (sem timezone)
        await queryRunner.query(`ALTER TABLE "evento" ALTER COLUMN "horario" TYPE time USING horario::time`);
    }
}
exports.alterHorarioTimestamptz1711670000000 = alterHorarioTimestamptz1711670000000;
