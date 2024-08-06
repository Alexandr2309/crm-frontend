import { StorageController } from '../../types/storageController';

/**
 * Данная функция позволяет обойти ошибку 'window is nor defined' в случаях, когда
 * контроллер localStorage вызывается на сервере
 */
const getWindow = (): Window | undefined => typeof window === undefined ? undefined : window;

/**
 * Конструктор контроллера localStorage
 */
export const createLocalStorageController = <Storage extends object>(): StorageController<Storage> => ({
    get: key => {
        const value = getWindow()?.localStorage.getItem(String(key));
        if (!value) return null;

        try {
            return JSON.parse(value);
        } catch (error) {
            return null;
        }
    },
    clear: () => getWindow()?.localStorage.clear(),
    delete: key => getWindow()?.localStorage.removeItem(String(key)),
    set: (key, value) => getWindow()?.localStorage.setItem(String(key), JSON.stringify(value)),
    has: key => Boolean(getWindow()?.localStorage.getItem(String(key))),
});
