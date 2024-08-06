import { AppLoader } from '@frontend/ui-kit/appLoader';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { AppRouter } from './providers/router';

export const App = () => (
    <Suspense fallback={<AppLoader/>}>
        <Link to={'/'}>
            Main page
        </Link>
        <Link to={'/about'}>
            About page
        </Link>
        <AppRouter/>
    </Suspense>
);
