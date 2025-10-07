import { somatoria } from "./somatoria";
describe('somatoria', () => {
    it("A soma correta de dois numeros", () =>{
        expect(somatoria(2, 3)).toBe(5);
        expect(somatoria(2, 2)).toBe(4);
        expect(somatoria(1, 8)).toBe(9);
    })
}  )
