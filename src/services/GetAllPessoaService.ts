import { AppDataSource } from "../database/dataSource";
import { Pessoa } from "../entities/Pessoa";

export class GetAllPessoaService {
    async execute () {
        const repo = AppDataSource.getRepository(Pessoa)

        const pessoa = await repo.find()

        return pessoa
    }
}