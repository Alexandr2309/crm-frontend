type Range = {
    /**
     * Создает массив заданного размера, заполненный числами от `0` до `size - 1`.
     * @example
     * range(3); // [ 0, 1, 2 ]
     */
    (size: number): number[];
    /**
     * Создает массив заданного размера, заполненный числами от `start` до `end`.
     * @example
     * range(1, 4) // [ 1, 2, 3, 4 ]
     */
    (start: number, end: number): number[];
};

export const range: Range = (start: number, end?: number) => {
    if (!end) {
        const size = start;
        return [ ...Array(Math.abs(size)).keys() ];
    }

    const size = 1 + end - start;

    return Array(size).fill(null).map((_, index) => start + index * 1);
};
