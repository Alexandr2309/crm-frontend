import { CSSOptions } from 'vite';
import autoprefixer from 'autoprefixer';

export const getCssOptions = (): CSSOptions => ({
    postcss: {
        plugins: [
            autoprefixer({}),
        ],
    },
});
