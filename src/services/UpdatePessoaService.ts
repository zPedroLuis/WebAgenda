import { AppDataSource } from "../database/dataSource";
import { Pessoa } from "../entities/Pessoa";

type PessoaUpdateRequest = {
    id: string
    name: string    
}

export class UpdatePessoaService {
    async execute({id, name}: PessoaUpdateRequest) {
        const repo = AppDataSource.getRepository(Pessoa)        

        const pessoa = await repo.findOne({ where: { id: id } })

        if(!pessoa) {
            return new Error("Evento não existe")
        }

        pessoa.name = name ? name : pessoa.name

        await repo.save(pessoa)

        return pessoa
    }
}