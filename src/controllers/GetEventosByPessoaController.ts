import { Request, Response } from 'express';
import { GetEventosByPessoaService } from '../services/GetEventosByPessoaService';

export class GetEventosByPessoaController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const service = new GetEventosByPessoaService();
        const eventos = await service.execute(id);
        return response.json(eventos);
    }
}
