export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const appRoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};
