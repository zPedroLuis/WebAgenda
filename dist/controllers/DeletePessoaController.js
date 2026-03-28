"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePessoaController = void 0;
const DeletePessoaService_1 = require("./../services/DeletePessoaService");
class DeletePessoaController {
    async handle(request, response) {
        const { id } = request.params;
        const service = new DeletePessoaService_1.DeletePessoaService();
        const result = await service.execute(id);
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.status(204).end();
    }
}
exports.DeletePessoaController = DeletePessoaController;
