"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evento = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Pessoa_1 = require("./Pessoa");
let Evento = class Evento {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Evento.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Evento.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Evento.prototype, "participantes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Pessoa_1.Pessoa),
    (0, typeorm_1.JoinColumn)({ name: "participantes" }),
    __metadata("design:type", Pessoa_1.Pessoa)
], Evento.prototype, "pessoa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Evento.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], Evento.prototype, "horario", void 0);
Evento = __decorate([
    (0, typeorm_1.Entity)("evento"),
    __metadata("design:paramtypes", [])
], Evento);
exports.Evento = Evento;
