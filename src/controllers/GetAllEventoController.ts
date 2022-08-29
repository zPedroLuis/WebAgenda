import { Request, Response } from 'express'
import { GetAllEventoService } from '../services/GetAllEventoService'

export class GetAllEventoController {
    async handle(request: Request, response: Response) {
        const service = new GetAllEventoService()

        const evento = await service.execute()

        return response.json(evento)
    }
}