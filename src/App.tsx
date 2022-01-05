import { FC } from 'react';
// STYLES
import 'styles/index.scss';
// UTILS
import 'utils/i18n';
import { RouteObject } from 'react-router';
import { useRoutes } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
// LAYOUTS
import MainLayout from 'pages/layouts/main/MainLayout';
// PAGES
import LandingPage from 'pages/landingPage/LandingPage';

const routes: Array<RouteObject> = [
    {
        path: '/',
        element: <MainLayout />,
        children: [{ path: '/', element: <LandingPage /> }],
    },
];

const App: FC = () => {
    const routing = useRoutes(routes);

    return (
        <>
            {routing}
            <ReactQueryDevtools initialIsOpen={false} />
        </>
    );
};

export default App;
