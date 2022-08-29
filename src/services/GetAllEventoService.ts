import { AppDataSource } from "../database/dataSource";
import { Evento } from "../entities/Evento";

export class GetAllEventoService {
    async execute () {
        const repo = AppDataSource.getRepository(Evento)

        const evento = await repo.find({
            relations: ["pessoa"],
        })

        return evento
    }
}