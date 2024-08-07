/**
 * Создает массив заданного размера, заполненный `null`.
 * Полезно, когда нужно отрисовать в `JSX` несколько одинаковых элементов.
 * @param size размерность массива на выходе
 * @example
 * createDummyArray(3) // [ null, null, null ]
 *
 * createDummyArray(3).map((_, index) => <Element key={index} />)
 */
export const createDummyArray = (size: number) => Array(size).fill(null);
