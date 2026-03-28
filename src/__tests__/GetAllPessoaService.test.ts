import { GetAllPessoaService } from "../../src/services/GetAllPessoaService";
import AppDataSource from "../../src/database/dataSource";
import { Pessoa } from "../../src/entities/Pessoa";

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
    (AppDataSource.getRepository as jest.Mock).mockReturnValue({ find: mockFind });

    const service = new GetAllPessoaService();
    const pessoas = await service.execute();
    expect(Array.isArray(pessoas)).toBe(true);
    expect(pessoas).toEqual(mockPessoas);
    expect(mockFind).toHaveBeenCalled();
  });
});
