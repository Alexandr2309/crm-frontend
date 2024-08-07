import { AppRoutesProps } from '../types/appRoutes';
import { AuthSubroutes } from '../const/authSubroute';

export const authSubrouteConfig: Record<AuthSubroutes, AppRoutesProps> = {
    [AuthSubroutes.LOGIN]: {
        path: AuthSubroutes.LOGIN,
        element: <div>Login</div>,
    },
    [AuthSubroutes.REGISTRATION]: {
        path: AuthSubroutes.REGISTRATION,
        element: <div>REGISTRATION</div>,
    },
    [AuthSubroutes.VERIFY_EMAIL]: {
        path: AuthSubroutes.VERIFY_EMAIL,
        element: <div>Email verify</div>,
    },
    [AuthSubroutes.RESET_PASSWORD]: {
        path: AuthSubroutes.RESET_PASSWORD,
        element: <div>Reset password</div>,
    },
};
