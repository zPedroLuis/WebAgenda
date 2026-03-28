import { DataSource } from "typeorm";
import { Pessoa } from "../entities/Pessoa";
import { Evento } from "../entities/Evento";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "webagenda",
    synchronize: true,
    logging: true,
    entities: [Pessoa, Evento],
    migrations: [],
    subscribers: [],
});