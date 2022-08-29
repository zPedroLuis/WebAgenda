import { Request, Response } from 'express'
import { DeletePessoaService } from './../services/DeletePessoaService';

export class DeletePessoaController {
    async handle(request: Request, response: Response) {
        const { id } = request.params

        const service = new DeletePessoaService()

        const result = await service.execute(id)

        if(result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(204).end()
    }
}