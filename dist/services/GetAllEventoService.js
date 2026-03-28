"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllEventoService = void 0;
const dataSource_1 = __importDefault(require("../database/dataSource"));
const Evento_1 = require("../entities/Evento");
class GetAllEventoService {
    async execute(data) {
        const repo = dataSource_1.default.getRepository(Evento_1.Evento);
        let evento;
        if (data) {
            evento = await repo.find({
                where: { data: new Date(data) },
                relations: ["pessoa"],
            });
        }
        else {
            evento = await repo.find({
                relations: ["pessoa"],
            });
        }
        return evento;
    }
}
exports.GetAllEventoService = GetAllEventoService;
