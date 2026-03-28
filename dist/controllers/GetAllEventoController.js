"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllEventoController = void 0;
const GetAllEventoService_1 = require("../services/GetAllEventoService");
class GetAllEventoController {
    async handle(request, response) {
        const { data } = request.query;
        const service = new GetAllEventoService_1.GetAllEventoService();
        const evento = await service.execute(typeof data === 'string' ? data : undefined);
        return response.json(evento);
    }
}
exports.GetAllEventoController = GetAllEventoController;
