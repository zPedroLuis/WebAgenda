import AppDataSource from "../database/dataSource";
import { Pessoa } from "../entities/Pessoa";

export class GetAllPessoaService {
    async execute (nome?: string) {
        const repo = AppDataSource.getRepository(Pessoa)
        let pessoa;
        if (nome) {
            pessoa = await repo.find({ where: { name: nome } });
        } else {
            pessoa = await repo.find();
        }
        return pessoa;
    }
}