import AppDataSource from "../database/dataSource";
import { Evento } from "../entities/Evento";

export class GetAllEventoService {
    async execute (data?: string) {
        const repo = AppDataSource.getRepository(Evento);
        let evento;
        if (data) {
            evento = await repo.find({
                where: { data: new Date(data) },
                relations: ["pessoa"],
            });
        } else {
            evento = await repo.find({
                relations: ["pessoa"],
            });
        }
        return evento;
    }
}