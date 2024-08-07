import { DashboardSubroutes, WorkspaceSubroutes } from '../const/dashboardSubroute';
import { AppRoutesProps } from '../types/appRoutes';
import { mapSubroutes } from '../utils/mapSubroutes';

export const workspaceSubrouteConfig: Record<WorkspaceSubroutes, AppRoutesProps> = {
    [WorkspaceSubroutes.PBN]: {
        path: WorkspaceSubroutes.PBN,
        element: <div>PBN</div>,
    },
    [WorkspaceSubroutes.LINK_BUILDING]: {
        path: WorkspaceSubroutes.LINK_BUILDING,
        element: <div>Link building</div>,
    },
    [WorkspaceSubroutes.PRIVATE]: {
        path: WorkspaceSubroutes.PRIVATE,
        element: <div>Private</div>,
    },
    [WorkspaceSubroutes.TASKS]: {
        path: WorkspaceSubroutes.TASKS,
        element: <div>Tasks</div>,
    },
    [WorkspaceSubroutes.WEBSITE]: {
        path: WorkspaceSubroutes.WEBSITE,
        element: <div>Website</div>,
    },
};

export const dashboardSubrouteConfig: Record<DashboardSubroutes, AppRoutesProps> = {
    [DashboardSubroutes.WORKSPACE]: {
        path: DashboardSubroutes.WORKSPACE,
        element: <div> Workspace</div>,
        children: mapSubroutes(workspaceSubrouteConfig),
    },
    [DashboardSubroutes.ACCESS]: {
        path: DashboardSubroutes.ACCESS,
        element: <div>Access</div>,
    },
    [DashboardSubroutes.API_DOCUMENTATION]: {
        path: DashboardSubroutes.API_DOCUMENTATION,
        element: <div>API DOCUMENTATION</div>,
    },
    [DashboardSubroutes.CLOUD_FLARE]: {
        path: DashboardSubroutes.CLOUD_FLARE,
        element: <div>Cloud flare</div>,
    },
    [DashboardSubroutes.DOMAIN]: {
        path: DashboardSubroutes.DOMAIN,
        element: <div>DOMAIN</div>,
    },
    [DashboardSubroutes.HR_MANAGMENT]: {
        path: DashboardSubroutes.HR_MANAGMENT,
        element: <div>HR_MANAGMENT</div>,
    },
    [DashboardSubroutes.REF_LINKS]: {
        path: DashboardSubroutes.REF_LINKS,
        element: <div>REF_LINKS</div>,
    },
    [DashboardSubroutes.SERVER]: {
        path: DashboardSubroutes.SERVER,
        element: <div>SERVER</div>,
    },
    [DashboardSubroutes.USERS]: {
        path: DashboardSubroutes.USERS,
        element: <div>USERS</div>,
    },
};
