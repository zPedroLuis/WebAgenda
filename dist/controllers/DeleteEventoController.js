"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEventoController = void 0;
const DeleteEventoService_1 = require("./../services/DeleteEventoService");
class DeleteEventoController {
    async handle(request, response) {
        const { id } = request.params;
        const service = new DeleteEventoService_1.DeleteEventoService();
        const result = await service.execute(id);
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.status(204).end();
    }
}
exports.DeleteEventoController = DeleteEventoController;
