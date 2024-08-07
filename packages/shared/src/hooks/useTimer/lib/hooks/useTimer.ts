import { useEffect, useMemo, useRef } from 'react';
import { UseTimer } from '../../model/types/timerTypes';

export const useTimer: UseTimer = (callback, delay, options) => {
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const startTimeRef = useRef<number>(0);
    const remainingTimeRef = useRef<number>(0);

    useEffect(() => {
        options?.setImmediately && start();
    }, [ options?.setImmediately ]);

    const timerCallback = () => {
        callback();
        cancel();
    };

    const start = () => {
        cancel();
        startTimeRef.current = Date.now();
        remainingTimeRef.current = delay;
        timerRef.current = setTimeout(timerCallback, delay);
    };

    const pause = () => {
        if (!timerRef.current) return;
        clearTimer();
        remainingTimeRef.current -= Date.now() - startTimeRef.current;
    };

    const resume = () => {
        if (timerRef.current || remainingTimeRef.current === 0) return;
        startTimeRef.current = Date.now();
        timerRef.current = setTimeout(timerCallback, remainingTimeRef.current);
    };

    const clearTimer = () => {
        timerRef.current && clearTimeout(timerRef.current);
        timerRef.current = null;
    };

    const cancel = () => {
        clearTimer();
        startTimeRef.current = 0;
        remainingTimeRef.current = 0;
    };

    return useMemo(() => ({
        start,
        pause,
        resume,
        cancel,
    }), [ delay, callback ]);
};
