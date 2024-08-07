import { AppRoutes, appRoutePaths } from '../const/appRoute';
import { DashboardSubroutes } from '../const/dashboardSubroute';

export const getDashboardRoute = (subroute: DashboardSubroutes) =>
    `${appRoutePaths[AppRoutes.DASHBOARD]}${subroute}`;
