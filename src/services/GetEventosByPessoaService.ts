import { AppDataSource } from "../database/dataSource";
import { Evento } from "../entities/Evento";

export class GetEventosByPessoaService {
    async execute(pessoaId: string) {
        const repo = AppDataSource.getRepository(Evento);
        const eventos = await repo.find({
            where: { participantes: pessoaId },
            relations: ["pessoa"],
        });
        return eventos;
    }
}
