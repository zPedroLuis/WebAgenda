"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEventoService = void 0;
const dataSource_1 = __importDefault(require("../database/dataSource"));
const Evento_1 = require("../entities/Evento");
class DeleteEventoService {
    async execute(id) {
        const repo = dataSource_1.default.getRepository(Evento_1.Evento);
        if (!await repo.findOne({ where: { id: id } })) {
            return new Error("Evento não existe");
        }
        await repo.delete(id);
    }
}
exports.DeleteEventoService = DeleteEventoService;
