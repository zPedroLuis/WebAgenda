"use strict";
// import { AppDataSource } from "./dataSource";
// import { Evento } from "../entities/Evento";
// import { Pessoa } from "../entities/Pessoa";
Object.defineProperty(exports, "__esModule", { value: true });
// export class index {
//     serviceEvento = AppDataSource.getRepository(Evento)
//     servicePessoa = AppDataSource.getRepository(Pessoa)
// }
const typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)();
