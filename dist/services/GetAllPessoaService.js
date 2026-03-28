"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllPessoaService = void 0;
const dataSource_1 = __importDefault(require("../database/dataSource"));
const Pessoa_1 = require("../entities/Pessoa");
class GetAllPessoaService {
    async execute(nome) {
        const repo = dataSource_1.default.getRepository(Pessoa_1.Pessoa);
        let pessoa;
        if (nome) {
            pessoa = await repo.find({ where: { name: nome } });
        }
        else {
            pessoa = await repo.find();
        }
        return pessoa;
    }
}
exports.GetAllPessoaService = GetAllPessoaService;
