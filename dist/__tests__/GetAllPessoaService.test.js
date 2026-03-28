"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GetAllPessoaService_1 = require("../../src/services/GetAllPessoaService");
const dataSource_1 = __importDefault(require("../../src/database/dataSource"));
jest.mock("../../src/database/dataSource", () => {
    const originalModule = jest.requireActual("../../src/database/dataSource");
    return {
        ...originalModule,
        AppDataSource: {
            getRepository: jest.fn()
        }
    };
});
describe("GetAllPessoaService", () => {
    it("deve retornar um array de pessoas (mock)", async () => {
        const mockPessoas = [
            { id: "1", name: "Pedro" },
            { id: "2", name: "Maria" }
        ];
        const mockFind = jest.fn().mockResolvedValue(mockPessoas);
        dataSource_1.default.getRepository.mockReturnValue({ find: mockFind });
        const service = new GetAllPessoaService_1.GetAllPessoaService();
        const pessoas = await service.execute();
        expect(Array.isArray(pessoas)).toBe(true);
        expect(pessoas).toEqual(mockPessoas);
        expect(mockFind).toHaveBeenCalled();
    });
});
