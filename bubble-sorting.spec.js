import {bubbleSorting} from './bubble-sorting.js';

describe('Bubble sorting', () => {
    it('Undef arg', () => {
        expect(bubbleSorting()).toBeUndefined();
    });

    it('Non array', () => {
        expect(bubbleSorting('')).toBe('');
    });

    it('Empty array', () => {
        expect(bubbleSorting([])).toEqual([]);
    });

    it('[1]', () => {
        expect(bubbleSorting([1])).toEqual([1]);
    });

    it('[2, 1]', () => {
        expect(bubbleSorting([2, 1])).toEqual([1, 2]);
    });

    it('[1, 2]', () => {
        expect(bubbleSorting([1, 2])).toEqual([1, 2]);
    });

    it('[4, 3, 2, 1]', () => {
        expect(bubbleSorting([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
    });
});
