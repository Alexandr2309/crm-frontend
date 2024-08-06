import { createLocalStorageController } from '@frontend/shared/storage';
import { Theme } from '@frontend/ui-kit/theme'

interface AppLocalStorage {
    /**
     * Тема приложения
     */
    theme: Theme;
}

export const appStorageController = createLocalStorageController<AppLocalStorage>();
