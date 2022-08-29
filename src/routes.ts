import { Router } from "express";
import { CreatePessoaController } from './controllers/CreatePessoaController';
import { DeleteEventoController } from './controllers/DeleteEventoController';
import { GetAllEventoController } from './controllers/GetAllEventoController';
import { CreateEventoController } from './controllers/CreateEventoController';
import { UpdateEventoController } from './controllers/UpdateEventoController';
import { GetAllPessoaController } from './controllers/GetAllPessoaController';
import { DeletePessoaController } from "./controllers/DeletePessoaController";
import { UpdatePessoaController } from "./controllers/UpdatePessoaController";

const routes = Router()

/**
 * [X] C - CREATE - POST
 * [X] R - READ   - GET
 * [X] U - UPDATE - PUT
 * [X] D - DELETE - DELETE
 */


routes.post("/pessoa", new CreatePessoaController().handle)
routes.get("/pessoa", new GetAllPessoaController().handle)
routes.put("/pessoa/:id", new UpdatePessoaController().handle)
routes.delete("/pessoa/:id", new DeletePessoaController().handle)

routes.post("/evento", new CreateEventoController().handle)
routes.get("/evento", new GetAllEventoController().handle)
routes.put("/evento/:id", new UpdateEventoController().handle)
routes.delete("/evento/:id", new DeleteEventoController().handle)

export { routes }