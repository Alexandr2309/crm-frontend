export interface UseTimerOptions {
    /**
     * Таймер будет запущен при монтировании компонента, вызвавшего хук
     */
    setImmediately?: boolean;
}

export interface UseTimerReturn {
    /**
     * Запуск таймера c переданным delay. Отменит уже существующий таймер при его наличии.
     */
    start: () => void;
    /**
     * Поставить таймер на паузу. Текущий таймер(при наличии) будет остановлен.
     * Вреям оставщееся до заверщения будет записано. Чтобы продолжить выполнение таймера
     * с оставшимся временем вызвать функция 'resume'
     */
    pause: () => void;
    /**
     * Продолжить выполнение остановленного таймера
     */
    resume: () => void;
    /**
     * Отменить выполнение таймера
     */
    cancel: () => void;
}

export type UseTimer = (callback: () => void, delay: number, options?: UseTimerOptions) => UseTimerReturn;
