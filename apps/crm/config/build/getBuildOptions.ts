import { BuildOptions } from 'vite';

const hugePackages = [ 'react-redux', '@reduxjs/toolkit', 'i18next' ];
const hugePackageRegex = new RegExp(hugePackages.join('|'));

export const getBuildOptions = (): BuildOptions => ({
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
        external: (id: string) => /public\/wrappedLocales/.test(id),
        output: {
            manualChunks: (id: string) => {
                if (hugePackageRegex.exec(id)) return 'huge-packages';
            },
        },
    },
});
