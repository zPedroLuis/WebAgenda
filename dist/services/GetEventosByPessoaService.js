"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEventosByPessoaService = void 0;
const dataSource_1 = __importDefault(require("../database/dataSource"));
const Evento_1 = require("../entities/Evento");
class GetEventosByPessoaService {
    async execute(pessoaId) {
        const repo = dataSource_1.default.getRepository(Evento_1.Evento);
        const eventos = await repo.find({
            where: { participantes: pessoaId },
            relations: ["pessoa"],
        });
        return eventos;
    }
}
exports.GetEventosByPessoaService = GetEventosByPessoaService;
