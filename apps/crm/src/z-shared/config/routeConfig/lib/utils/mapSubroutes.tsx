import { Route } from 'react-router-dom';
import { AppRoutesProps } from '../types/appRoutes';

export const mapSubroutes = <T extends string>(subrouteConfig: Record<T, AppRoutesProps>) => (
    <>
        {
            Object.values<AppRoutesProps>(subrouteConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={element}
                />
            ))
        }
    </>
);
