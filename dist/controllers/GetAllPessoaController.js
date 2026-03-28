"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllPessoaController = void 0;
const GetAllPessoaService_1 = require("./../services/GetAllPessoaService");
class GetAllPessoaController {
    async handle(request, response) {
        const { nome } = request.query;
        const service = new GetAllPessoaService_1.GetAllPessoaService();
        const pessoa = await service.execute(typeof nome === 'string' ? nome : undefined);
        return response.json(pessoa);
    }
}
exports.GetAllPessoaController = GetAllPessoaController;
