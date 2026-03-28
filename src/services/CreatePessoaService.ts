import { AppDataSource } from "../database/dataSource";
import { Pessoa } from "../entities/Pessoa";

type PessoaRequest = {
    name: string
}

export class CreatePessoaService {
    async execute({name}: PessoaRequest){
        const repo = AppDataSource.getRepository(Pessoa)
        
        //SELECT * FROM EVENTO WHERE NAME = "NAME" LIMIT 1
        if (await repo.findOne({ where: { name: name } })) {
            return new Error("Pessoa ja existente")
        }

        const pessoa = repo.create({
            name,
        })

        await repo.save(pessoa)

        return pessoa
    }
}