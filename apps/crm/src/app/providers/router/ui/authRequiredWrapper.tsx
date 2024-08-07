import { AuthSubroutes, getAuthRoute } from '@/z-shared/config/routeConfig';
import { FCC } from '@22byte/shared/types';
import { useToast } from '@22byte/ui-kit/toast';
import { Navigate, useLocation } from 'react-router-dom';

export const AuthRequiredWrapper: FCC = ({ children }) => {
    const isLoggedIn = true;
    const location = useLocation();
    const { bakeToast } = useToast();

    if (!isLoggedIn) {
        bakeToast.info('Необходимо авторизоваться');
        return (
            <Navigate
                to={getAuthRoute(AuthSubroutes.LOGIN)}
                state={{ from: location }}
                replace={true}
            />
        );
    }

    return children;
};
