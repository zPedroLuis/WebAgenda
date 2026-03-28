"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePessoaController = void 0;
const CreatePessoaService_1 = require("../services/CreatePessoaService");
class CreatePessoaController {
    async handle(request, response) {
        const { name } = request.body;
        const service = new CreatePessoaService_1.CreatePessoaService();
        const result = await service.execute({ name });
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.CreatePessoaController = CreatePessoaController;
