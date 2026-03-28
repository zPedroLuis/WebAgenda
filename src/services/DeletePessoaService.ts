import { AppDataSource } from "../database/dataSource";
import { Pessoa } from "../entities/Pessoa";

export class DeletePessoaService {
    async execute(id: any) {
        const repo = AppDataSource.getRepository(Pessoa)

        if(!await repo.findOne({ where: { id: id } })) {
            return new Error("Evento não existe")
        }

        await repo.delete(id)        
    }
}