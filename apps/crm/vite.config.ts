import { defineConfig } from 'vite';
import { BuildMode } from './config/build/types/viteConfig';
import { getPlugins } from './config/build/getPlugins';
import { getCssOptions } from './config/build/getCssOptions';
import { resolve } from 'path';
import { getBuildOptions } from './config/build/getBuildOptions';

export default defineConfig(async ({ mode }) => {
    const [ _, buildMode ] = mode.split('-') as ['web', BuildMode];

    const plugins = await getPlugins(buildMode);

    return {
        plugins,
        css: getCssOptions(),
        server: {
            port: 5173,
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
            },
        },
        build: getBuildOptions(),
    };
});
