
import AuthRoute from '../../app/auth/AuthRoute';
import UserRoute from '../../app/auth/UserRoute';
import CategoryRoute from '../../app/helpRequests/category/CategoryRoute';
import RequestPrivateRoute from '../../app/helpRequests/RequestPrivateRoute';
import RequestPublicRoute from '../../app/helpRequests/RequestPublicRoute';

const Routes = [
    {
        route: UserRoute,
        url: 'users',
    },
    {
        guard: false,
        route: CategoryRoute,
        url: 'category',
    },
    {
        route: RequestPrivateRoute,
        url: 'request',
    },
    {
        guard: false,
        route: RequestPublicRoute,
        url: 'request',
    },
    {
        guard: false,
        route: AuthRoute,
        url: 'auth',
    },
];

export default Routes;
