/**
 * Абстрактный тип контроллера хранилища localStorage
 */
export type StorageController<StorageInterface extends object> = {
    /**
   * Получить значение в хранилище по ключу. Вернет null если такого значения нет
   */
    get: <Key extends keyof StorageInterface>(key: Key) => StorageInterface[Key] | null;
    /**
   * Записать пару ключ-значение в хранилище
   */
    set: <Key extends keyof StorageInterface>(key: Key, value: StorageInterface[Key]) => void;
    /**
   * Удалить значение по ключу
   */
    delete: <Key extends keyof StorageInterface>(key: Key) => void;
    /**
   * Проверить, существует ли значение по данному ключу
   */
    has: <Key extends keyof StorageInterface>(key: Key) => boolean;
    /**
   * Очистить хранилище
   */
    clear: () => void;
}
