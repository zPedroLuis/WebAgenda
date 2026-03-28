import { Request, Response } from 'express'
import { GetAllEventoService } from '../services/GetAllEventoService'

export class GetAllEventoController {
    async handle(request: Request, response: Response) {
        const { data } = request.query;
        const service = new GetAllEventoService();
        const evento = await service.execute(typeof data === 'string' ? data : undefined);
        return response.json(evento);
    }
}