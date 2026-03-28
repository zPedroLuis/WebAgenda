"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "webagenda",
    entities: ["src/entities/*.ts"],
    migrations: ["src/database/migrations/*.ts"]
});
exports.default = AppDataSource;
