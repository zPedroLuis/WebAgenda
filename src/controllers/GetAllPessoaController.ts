import { GetAllPessoaService } from './../services/GetAllPessoaService';
import { Request, Response } from 'express'

export class GetAllPessoaController {
    async handle(request: Request, response: Response) {
        const { nome } = request.query;
        const service = new GetAllPessoaService();
        const pessoa = await service.execute(typeof nome === 'string' ? nome : undefined);
        return response.json(pessoa);
    }
}