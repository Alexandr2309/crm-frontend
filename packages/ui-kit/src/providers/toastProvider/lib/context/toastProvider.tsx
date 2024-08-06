import { ReactNode, useMemo, useRef, useState } from 'react';
import { BakeToast, ToastContext, ToastControls, ToastControlsMap, ToastInterface, ToastMap, ToasterHeightTuple, toastContext } from './toastContext';
import { v4 as uuid } from 'uuid';
import { createToastFadeOutAnimation } from '../utils/toastAnimation';
import { Toaster } from '../../ui/toaster/toaster';
import { recalculateToastsPosition } from '../utils/recalculateToastsPosition';

const MAX_TOASTS = 3;

export const ToastProvider = ({ children }: {children: ReactNode}) => {
    const [ toastMap, setToastMap ] = useState<ToastMap>(new Map());
    const [ toasterHeight, setToasterHeight ] = useState<ToasterHeightTuple>([ 0, 0 ]);
    const toastControlsMap = useRef<ToastControlsMap>(new Map());
    const toasterRef = useRef<HTMLDivElement | null>(null);

    const bakeToast: BakeToast = {
        error: (message, options) => createToast({ type: 'error', message, ...options }),
        success: (message, options) => createToast({ type: 'success', message, ...options }),
        info: (message, options) => createToast({ type: 'info', message, ...options }),
    };

    // при завершении fade-out анимации удалить записи об этом тосте
    // и пересчитать положения оставшихся тостов
    const onToastAnimationFinish = (id: string) => {
        setToastMap(prevState => {
            prevState.delete(id);
            return new Map(prevState);
        });
        toastControlsMap.current.delete(id);
        onToastHeightChange();
    };

    const onToastHeightChange = () => {
        setToasterHeight(recalculateToastsPosition(toastControlsMap.current));
    };

    const deleteToast = (id: string) => {
        const toast = toastControlsMap.current.get(id)?.node;
        if (!toast) return;

        toast.animate(...createToastFadeOutAnimation(toast))
            .addEventListener('finish', () => onToastAnimationFinish(id));
    };

    const createToast = (toast: ToastInterface) => {
        const id = uuid();
        setToastMap(prevState => {
            const quantityDiff = prevState.size - MAX_TOASTS;
            if (quantityDiff > 0) {
                const toastsToDelete = Array.from(prevState).slice(0, quantityDiff + 1);
                toastsToDelete.forEach(([ id ]) => deleteToast(id));
            }
            return new Map<string, ToastInterface>(prevState.set(id, toast));
        });
    };

    const setToastControls = (id: string, controls: ToastControls) => {
        controls.node
            // добавляем контроллер тоста в начало map, чтобы отобразить его в верхней части тостера
            ? toastControlsMap.current = new Map([ [ id, controls ], ...Array.from(toastControlsMap.current) ])
            : toastControlsMap.current.delete(id);
        onToastHeightChange();
    };

    const memorized: ToastContext = useMemo(() => ({
        bakeToast,
        deleteToast,
        setToastControls,
    }), []);

    return (
        <toastContext.Provider
            value={memorized}
        >
            <Toaster
                toastMap={toastMap}
                toastControlsMap={toastControlsMap}
                heightTuple={toasterHeight}
                ref={toasterRef}
            />
            {children}
        </toastContext.Provider>
    );
};
