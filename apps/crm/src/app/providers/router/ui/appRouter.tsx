import { AppRoutesProps, routeConfig } from '@/z-shared/config/routeConfig';
import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthRequiredWrapper } from './authRequiredWrapper';

const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<div>Loading...</div>}>
                {route.element}
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.children ? `${route.path}*` : route.path}
                element={
                route.authOnly
                    ? (
                        <AuthRequiredWrapper>
                            {element}
                        </AuthRequiredWrapper>
                    )
                    : element
                }
            >
                {route.children}
            </Route>
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
});

export default AppRouter;
