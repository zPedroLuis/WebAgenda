"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePessoaService = void 0;
const dataSource_1 = __importDefault(require("../database/dataSource"));
const Pessoa_1 = require("../entities/Pessoa");
class UpdatePessoaService {
    async execute({ id, name }) {
        const repo = dataSource_1.default.getRepository(Pessoa_1.Pessoa);
        const pessoa = await repo.findOne({ where: { id: id } });
        if (!pessoa) {
            return new Error("Evento não existe");
        }
        pessoa.name = name ? name : pessoa.name;
        await repo.save(pessoa);
        return pessoa;
    }
}
exports.UpdatePessoaService = UpdatePessoaService;
