"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEventosByPessoaController = void 0;
const GetEventosByPessoaService_1 = require("../services/GetEventosByPessoaService");
class GetEventosByPessoaController {
    async handle(request, response) {
        const { id } = request.params;
        const service = new GetEventosByPessoaService_1.GetEventosByPessoaService();
        const eventos = await service.execute(id);
        return response.json(eventos);
    }
}
exports.GetEventosByPessoaController = GetEventosByPessoaController;
