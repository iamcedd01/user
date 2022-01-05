import { FC } from 'react';
import { Outlet } from 'react-router';

import styles from './MainLayout.scss';

const MainLayout: FC = () => {
    return (
        <div data-cy="cs-main-layout" className={styles.csMainLayout}>
            <main className={styles.csMainContent}>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
