"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEventoService = void 0;
const dataSource_1 = __importDefault(require("../database/dataSource"));
const Evento_1 = require("../entities/Evento");
class UpdateEventoService {
    async execute({ id, name }) {
        const repo = dataSource_1.default.getRepository(Evento_1.Evento);
        const evento = await repo.findOne({ where: { id: id } });
        if (!evento) {
            return new Error("Evento não existe");
        }
        evento.name = name ? name : evento.name;
        await repo.save(evento);
        return evento;
    }
}
exports.UpdateEventoService = UpdateEventoService;
