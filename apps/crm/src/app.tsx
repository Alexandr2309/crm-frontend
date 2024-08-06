import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@frontend/ui-kit/theme';
import { appStorageController } from './app/storage';

const root = ReactDOM.createRoot(document.getElementById('root')!);

const rootApp = root.render(
    <React.StrictMode>
        <ThemeProvider
            storageController={appStorageController}
            themeStorageKey={'theme'}
        >
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
);

export default rootApp;
