"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePessoaService = void 0;
const dataSource_1 = __importDefault(require("../database/dataSource"));
const Pessoa_1 = require("../entities/Pessoa");
class CreatePessoaService {
    async execute({ name }) {
        const repo = dataSource_1.default.getRepository(Pessoa_1.Pessoa);
        //SELECT * FROM EVENTO WHERE NAME = "NAME" LIMIT 1
        if (await repo.findOne({ where: { name: name } })) {
            return new Error("Pessoa ja existente");
        }
        const pessoa = repo.create({
            name,
        });
        await repo.save(pessoa);
        return pessoa;
    }
}
exports.CreatePessoaService = CreatePessoaService;
