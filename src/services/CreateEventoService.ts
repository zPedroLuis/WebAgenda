
import { AppDataSource } from "../database/dataSource";
import { Evento } from "../entities/Evento";
import { Pessoa } from "../entities/Pessoa";

type EventoRequest = {
    name: string
    participantes: string
    data: string
    horario: string
}

export class CreateEventoService {
    async execute({name, participantes, data, horario}: EventoRequest): Promise<Evento | Error> {
        const repo = AppDataSource.getRepository(Evento)
        const repoPessoa = AppDataSource.getRepository(Pessoa)
        
        if(!await repoPessoa.findOne({ where: { id: participantes } })) {
            return new Error("Pessoa não existe!")
        }
        
        const evento = repo.create({name, participantes, data, horario})
       
        await repo.save(evento)

        return evento
    }
}