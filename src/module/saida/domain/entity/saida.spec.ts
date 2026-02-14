import { describe } from "node:test";
import { Saida } from "./saida";

describe('Saída domain entity', () => {
    it('deve criar uma saída válida', () => {
        const saida = Saida.create('Testes', 2.5);

        expect(saida.name.value).toBe("Testes")
        expect(saida.value.value).toBe(2.5)
    });
})