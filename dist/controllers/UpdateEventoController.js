"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEventoController = void 0;
const UpdateEventoService_1 = require("./../services/UpdateEventoService");
class UpdateEventoController {
    async handle(request, response) {
        const { id } = request.params;
        const { name } = request.body;
        const service = new UpdateEventoService_1.UpdateEventoService();
        const result = await service.execute({ id, name });
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.UpdateEventoController = UpdateEventoController;
