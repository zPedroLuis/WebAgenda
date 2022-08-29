import { Request, Response } from 'express'
import { DeleteEventoService } from './../services/DeleteEventoService';

export class DeleteEventoController {
    async handle(request: Request, response: Response) {
        const { id } = request.params

        const service = new DeleteEventoService()

        const result = await service.execute(id)

        if(result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(204).end()
    }
}