import { Suspense } from 'react';
import { AppRouter } from './providers/router';

export const App = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <div className='layout'>
            <AppRouter/>
        </div>
    </Suspense>
);
