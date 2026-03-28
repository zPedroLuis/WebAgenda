"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePessoaService = void 0;
const dataSource_1 = __importDefault(require("../database/dataSource"));
const Pessoa_1 = require("../entities/Pessoa");
class DeletePessoaService {
    async execute(id) {
        const repo = dataSource_1.default.getRepository(Pessoa_1.Pessoa);
        if (!await repo.findOne({ where: { id: id } })) {
            return new Error("Evento não existe");
        }
        await repo.delete(id);
    }
}
exports.DeletePessoaService = DeletePessoaService;
