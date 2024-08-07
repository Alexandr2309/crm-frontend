import { Navigate, RouteProps } from 'react-router-dom';
import { appRoutePaths, AppRoutes } from './lib/const/appRoute';
import { AboutPage } from '@/pages/about';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: appRoutePaths[AppRoutes.MAIN],
        element: <Navigate to={appRoutePaths[AppRoutes.DASHBOARD]}/>,
    },
    [AppRoutes.AUTH]: {
        path: appRoutePaths[AppRoutes.AUTH],
        element: <AboutPage/>,
    },
    [AppRoutes.NOT_FOUND]: {
        path: appRoutePaths[AppRoutes.NOT_FOUND],
        element: <div>Not found</div>,
    },
    [AppRoutes.DASHBOARD]: {
        path: appRoutePaths[AppRoutes.DASHBOARD],
        element: <div>Dashboard</div>,
    },
};
