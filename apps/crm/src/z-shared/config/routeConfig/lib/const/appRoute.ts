export enum AppRoutes {
    MAIN = 'main',
    DASHBOARD = 'dashboard',
    AUTH = 'auth',
    NOT_FOUND = 'not_found',
}

export const appRoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.DASHBOARD]: '/dashboard/',
    [AppRoutes.AUTH]: '/auth/',
    [AppRoutes.NOT_FOUND]: '*',
};
