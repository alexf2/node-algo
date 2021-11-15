import {ERR_MSG, getFiboRegular, getFiboRecursive, getFiboGeneratorRecursive} from './fibo';

describe('Fibo', () => {
    it('Fibo no params recursive', () => {
        expect(() => getFiboRecursive()).toThrow(ERR_MSG);
    });

    it('Fibo no params regular', () => {
        expect(() => getFiboRegular()).toThrowError(ERR_MSG);
    });

    it('Fibo no params generator', () => {
        expect(() => [...getFiboGeneratorRecursive()]).toThrow(ERR_MSG);
    });

    it.each([0,1,2,3,4,5,6,7,8,9,10])(
        "%p first numbers:",
        (n) => {
          const recursive = getFiboRecursive(n);
          const regular = getFiboRegular(n);
          const generator = [...getFiboGeneratorRecursive(n)];

          expect(recursive, `recursive returned ${recursive.length}`).toHaveLength(n);
          expect(regular, `regular returned ${regular.length}`).toHaveLength(n);
          expect(generator, `generator recursive returned ${generator.length}`).toHaveLength(n);

          expect(recursive).toEqual(regular);
          expect(recursive).toEqual(generator);
        }
    );
});

