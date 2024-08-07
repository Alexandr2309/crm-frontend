import { appRoutePaths, AppRoutes } from '../const/appRoute';
import { WorkspaceSubroutes } from '../const/dashboardSubroute';

export const getWorkspaceSubroute = (subroute: WorkspaceSubroutes) =>
    `${appRoutePaths[AppRoutes.DASHBOARD]}/workspace/${subroute}`;
