// import { AppDataSource } from "./dataSource";
// import { Evento } from "../entities/Evento";
// import { Pessoa } from "../entities/Pessoa";

// export class index {
//     serviceEvento = AppDataSource.getRepository(Evento)
//     servicePessoa = AppDataSource.getRepository(Pessoa)
// }

import { createConnection } from "typeorm";

createConnection()