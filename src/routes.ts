import { Router } from "express";
import { CreatePessoaController } from './controllers/CreatePessoaController';
import { DeletePessoaController } from "./controllers/DeletePessoaController";
import { GetAllPessoaController } from './controllers/GetAllPessoaController';
import { UpdatePessoaController } from './controllers/UpdatePessoaController';
import { CreateEventoController } from './controllers/CreateEventoController';
import { DeleteEventoController } from './controllers/DeleteEventoController';
import { GetAllEventoController } from './controllers/GetAllEventoController';
import { UpdateEventoController } from './controllers/UpdateEventoController';
import { GetEventosByPessoaController } from "./controllers/GetEventosByPessoaController";

const routes = Router();

/**
 * @swagger
 * tags:
 *   - name: Pessoa
 *     description: Endpoints para gerenciar pessoas
 *   - name: Evento
 *     description: Endpoints para gerenciar eventos
 */

/**
 * @swagger
 * /pessoa:
 *   post:
 *     summary: Cria uma nova pessoa
 *     tags: [Pessoa]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Pessoa criada com sucesso
 *   get:
 *     summary: Lista todas as pessoas
 *     tags: [Pessoa]
 *     responses:
 *       200:
 *         description: Lista de pessoas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pessoa'
 */

/**
 * @swagger
 * /pessoa/{id}:
 *   put:
 *     summary: Atualiza uma pessoa
 *     tags: [Pessoa]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Pessoa atualizada
 *   delete:
 *     summary: Remove uma pessoa
 *     tags: [Pessoa]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Pessoa removida
 */

/**
 * @swagger
 * /pessoa/{id}/eventos:
 *   get:
 *     summary: Lista eventos de uma pessoa
 *     tags: [Pessoa]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de eventos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Evento'
 */

/**
 * @swagger
 * /evento:
 *   post:
 *     summary: Cria um novo evento
 *     tags: [Evento]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               participantes:
 *                 type: string
 *               data:
 *                 type: string
 *                 format: date
 *               horario:
 *                 type: string
 *     responses:
 *       201:
 *         description: Evento criado com sucesso
 *   get:
 *     summary: Lista todos os eventos ou pesquisa por data
 *     tags: [Evento]
 *     parameters:
 *       - in: query
 *         name: data
 *         schema:
 *           type: string
 *           format: date
 *         description: Data para filtrar
 *     responses:
 *       200:
 *         description: Lista de eventos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Evento'
 */

/**
 * @swagger
 * /evento/{id}:
 *   put:
 *     summary: Atualiza um evento
 *     tags: [Evento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               participantes:
 *                 type: string
 *               data:
 *                 type: string
 *                 format: date
 *               horario:
 *                 type: string
 *     responses:
 *       200:
 *         description: Evento atualizado
 *   delete:
 *     summary: Remove um evento
 *     tags: [Evento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Evento removido
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Pessoa:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *     Evento:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         participantes:
 *           type: string
 *         data:
 *           type: string
 *           format: date
 *         horario:
 *           type: string
 */

// Rotas Pessoa
routes.post("/pessoa", new CreatePessoaController().handle);
routes.get("/pessoa", new GetAllPessoaController().handle);
routes.get("/pessoa/:id/eventos", new GetEventosByPessoaController().handle);
routes.put("/pessoa/:id", new UpdatePessoaController().handle);
routes.delete("/pessoa/:id", new DeletePessoaController().handle);

// Rotas Evento
routes.post("/evento", new CreateEventoController().handle);
routes.get("/evento", new GetAllEventoController().handle);
routes.put("/evento/:id", new UpdateEventoController().handle);
routes.delete("/evento/:id", new DeleteEventoController().handle);

export { routes };