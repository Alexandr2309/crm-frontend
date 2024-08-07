import { useMemo, useState } from 'react';

type BooleanStateHandler = () => void;

type UseBooleanStateReturn = [
    state: boolean,
    setToTrue: BooleanStateHandler,
    setToFalse: BooleanStateHandler,
    toggle: BooleanStateHandler
];

export const useBooleanState = (initialState = false): UseBooleanStateReturn => {
    const [ booleanState, setBooleanState ] = useState(initialState);
    const setToTrue = () => setBooleanState(true);
    const setToFalse = () => setBooleanState(false);
    const toggle = () => setBooleanState(prev => !prev);

    return useMemo(() => [ booleanState, setToTrue, setToFalse, toggle ], [ booleanState ]);
};
