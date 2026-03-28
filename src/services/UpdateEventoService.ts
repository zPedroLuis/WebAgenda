import { AppDataSource } from "../database/dataSource";
import { Evento } from "../entities/Evento";

type EventoUpdateRequest = {
    id: string
    name: string
    
}

export class UpdateEventoService {
    async execute({id, name}: EventoUpdateRequest) {
        const repo = AppDataSource.getRepository(Evento)        

        const evento = await repo.findOne({ where: { id: id } })

        if(!evento) {
            return new Error("Evento não existe")
        }

        evento.name = name ? name : evento.name

        await repo.save(evento)

        return evento
    }
}