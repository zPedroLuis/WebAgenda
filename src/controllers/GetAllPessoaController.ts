import { GetAllPessoaService } from './../services/GetAllPessoaService';
import { Request, Response } from 'express'

export class GetAllPessoaController {
    async handle(request: Request, response: Response) {
        const service = new GetAllPessoaService()

        const pessoa = await service.execute()

        return response.json(pessoa)
    }
}