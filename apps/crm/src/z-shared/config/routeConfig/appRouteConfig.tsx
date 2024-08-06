import { RouteProps } from 'react-router-dom';
import { appRoutePaths, AppRoutes } from './lib/const/appRoute';
import { MainPage } from '@/pages/main';
import { AboutPage } from '@/pages/about';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: appRoutePaths[AppRoutes.MAIN],
        element: <MainPage/>,
    },
    [AppRoutes.ABOUT]: {
        path: appRoutePaths[AppRoutes.ABOUT],
        element: <AboutPage/>,
    },
};
