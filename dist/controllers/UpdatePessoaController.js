"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePessoaController = void 0;
const UpdatePessoaService_1 = require("../services/UpdatePessoaService");
class UpdatePessoaController {
    async handle(request, response) {
        const { id } = request.params;
        const { name } = request.body;
        const service = new UpdatePessoaService_1.UpdatePessoaService();
        const result = await service.execute({ id, name });
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.UpdatePessoaController = UpdatePessoaController;
