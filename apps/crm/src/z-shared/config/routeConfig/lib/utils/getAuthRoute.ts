import { AppRoutes, appRoutePaths } from '../const/appRoute';
import { AuthSubroutes } from '../const/authSubroute';

export const getAuthRoute = (subroute: AuthSubroutes) =>
    `${appRoutePaths[AppRoutes.AUTH]}${subroute}`;
