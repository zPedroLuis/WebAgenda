"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEventoService = void 0;
const dataSource_1 = __importDefault(require("../database/dataSource"));
const Evento_1 = require("../entities/Evento");
const Pessoa_1 = require("../entities/Pessoa");
class CreateEventoService {
    async execute({ name, participantes, data, horario }) {
        const repo = dataSource_1.default.getRepository(Evento_1.Evento);
        const repoPessoa = dataSource_1.default.getRepository(Pessoa_1.Pessoa);
        if (!await repoPessoa.findOne({ where: { id: participantes } })) {
            return new Error("Pessoa não existe!");
        }
        // Converte horario para Date (aceita string ISO 8601 com offset)
        const horarioDate = new Date(horario);
        const evento = repo.create({ name, participantes, data, horario: horarioDate });
        await repo.save(evento);
        return evento;
    }
}
exports.CreateEventoService = CreateEventoService;
