import { DataSource } from "typeorm"


const isCompiled = __dirname.includes('dist');
const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "webagenda",
    entities: [isCompiled ? "dist/entities/*.js" : "src/entities/*.ts"]
});


export default AppDataSource;