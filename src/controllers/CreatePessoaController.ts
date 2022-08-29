import { Request, Response } from "express";
import { CreatePessoaService } from "../services/CreatePessoaService"; 

export class CreatePessoaController {
    async handle(request: Request, response: Response) {
        const { name } = request.body

        const service = new CreatePessoaService()

        const result = await service.execute({ name })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}