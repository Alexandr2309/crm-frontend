import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { AppRouter } from './providers/router';

export const App = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Link to={'/'}>
            Main page
        </Link>
        <Link to={'/about'}>
            About page
        </Link>
        <AppRouter/>
    </Suspense>
);
