export type ArrayDiffTuple<Arr = unknown> = [missingInFirstArr: Arr[], missingInSecondArr: Arr[]];

/**
 * Принимает на вход два массива с одинаковым примитивном содержимым (объекты не будут работать).
 * Возвращает два массива с элементами второго массива, отсутствующими в первом массиве и наоборот.
 * @example
 * const [ diffFirst, diffSecond ] = findArraysDifference([ 1, 2, 3 ], [ 1, 2, 4, 5 ]);
 * console.log(diffFirst) // [ 4, 5 ]
 * console.log(diffSecond) // [ 3 ];
 */
export const findArraysDifference = <Arr = unknown>(firstArray: Arr[], secondArray: Arr[]): ArrayDiffTuple<Arr> => {
    const firstArraySet = new Set(firstArray);
    const secondArraySet = new Set(secondArray);
    const missingInFirstArray = secondArray.filter(it => !firstArraySet.has(it));
    const missingInSecondArray = firstArray.filter(it => !secondArraySet.has(it));

    // очищаем хранилища, не дожидаясь garbage collector
    firstArraySet.clear();
    secondArraySet.clear();

    return [ missingInFirstArray, missingInSecondArray ];
};
