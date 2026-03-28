"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const CreatePessoaController_1 = require("./controllers/CreatePessoaController");
const DeleteEventoController_1 = require("./controllers/DeleteEventoController");
const GetAllEventoController_1 = require("./controllers/GetAllEventoController");
const CreateEventoController_1 = require("./controllers/CreateEventoController");
const UpdateEventoController_1 = require("./controllers/UpdateEventoController");
const GetAllPessoaController_1 = require("./controllers/GetAllPessoaController");
const DeletePessoaController_1 = require("./controllers/DeletePessoaController");
const UpdatePessoaController_1 = require("./controllers/UpdatePessoaController");
const GetEventosByPessoaController_1 = require("./controllers/GetEventosByPessoaController");
const routes = (0, express_1.Router)();
exports.routes = routes;
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
 *     summary: Lista todas as pessoas ou pesquisa por nome
 *     tags: [Pessoa]
 *     parameters:
 *       - in: query
 *         name: nome
 *         schema:
 *           type: string
 *         description: Nome para filtrar
 *     responses:
 *       200:
 *         description: Lista de pessoas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pessoa'
 *
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
 *         description: ID da pessoa
 *     responses:
 *       200:
 *         description: Lista de eventos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Evento'
 *
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
 *
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
 *
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
routes.post("/pessoa", new CreatePessoaController_1.CreatePessoaController().handle);
routes.get("/pessoa", new GetAllPessoaController_1.GetAllPessoaController().handle);
routes.get("/pessoa/:id/eventos", new GetEventosByPessoaController_1.GetEventosByPessoaController().handle);
routes.put("/pessoa/:id", new UpdatePessoaController_1.UpdatePessoaController().handle);
routes.delete("/pessoa/:id", new DeletePessoaController_1.DeletePessoaController().handle);
routes.post("/evento", new CreateEventoController_1.CreateEventoController().handle);
routes.get("/evento", new GetAllEventoController_1.GetAllEventoController().handle);
routes.put("/evento/:id", new UpdateEventoController_1.UpdateEventoController().handle);
routes.delete("/evento/:id", new DeleteEventoController_1.DeleteEventoController().handle);
