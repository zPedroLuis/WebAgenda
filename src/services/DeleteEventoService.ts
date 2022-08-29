import { AppDataSource } from "../database/dataSource";
import { Evento } from "../entities/Evento";

export class DeleteEventoService {
    async execute(id: any) {
        const repo = AppDataSource.getRepository(Evento)

        if(!await repo.findOne({ where: { id: id } })) {
            return new Error("Evento não existe")
        }

        await repo.delete(id)        
    }
}