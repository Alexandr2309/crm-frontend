import { createContext } from 'react';

export type ToastType = 'error' | 'success' | 'info';

export interface ToastInterface extends ToastCreatorOptions {
    type: ToastType;
    message: string | JSX.Element;
}

export type ToastMap = Map<string, ToastInterface>
export type ToastControlsMap = Map<string, ToastControls>

export type ToastControls = {
    node: HTMLDivElement;
    /**
     * Высота контейнера тоста при его монтировании
     */
    initialNodeHeight: number;
    pauseTimer: () => void;
    resumeTimer: () => void;
}

export interface ToastCreatorOptions {
    persist?: boolean;
}

export type ToastCreatorFunction = (
    message: ToastInterface['message'],
    options?: ToastCreatorOptions
) => void;

/**
 * Контроллер создания тостов.
 * Предоставляет методы по созданию тостов каждого из доступных типов
 */
export type BakeToast = {
    [key in ToastType]: ToastCreatorFunction;
};

export type ToasterHeightTuple = [wrappedHeight: number, unwrappedHeight: number];

export interface ToastContext {
    bakeToast: BakeToast;
    setToastControls: (id: string, controls: ToastControls) => void;
    deleteToast: (id: string) => void;
}

export const toastContext = createContext<ToastContext | null>(null);
