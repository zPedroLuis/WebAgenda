import { Request, Response } from "express";
import { CreateEventoService } from "../services/CreateEventoService"; 

export class CreateEventoController {
    async handle(request: Request, response: Response) {
        // horario deve ser string ISO 8601 com offset, ex: "2026-03-28T15:00:00-03:00"
        const { name, participantes, data, horario } = request.body

        const service = new CreateEventoService()

        const result = await service.execute({ 
            name,
            participantes,
            data,
            horario
         })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}