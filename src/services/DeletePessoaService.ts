import { AppDataSource } from "../database/dataSource";
import { Pessoa } from "../entities/Pessoa";

export class DeletePessoaService {
    async execute(id: any) {
        const repo = AppDataSource.getRepository(Pessoa);
        const repoEvento = AppDataSource.getRepository("evento");

        const pessoa = await repo.findOne({ where: { id: id } });
        if (!pessoa) {
            return new Error("Pessoa não existe");
        }

        // Verifica se existe evento vinculado
        const eventos = await repoEvento.count({ where: { participantes: id } });
        if (eventos > 0) {
            return new Error("Não é possível excluir uma pessoa vinculada a eventos.");
        }

        await repo.delete(id);
    }
}