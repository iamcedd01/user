import { FC, Fragment, useCallback, useEffect, useState } from 'react';
// COMPONENTS - CONTROLS
import Text from 'components/controls/text/Text';
import Title from 'components/controls/text/Title';
import Button from 'components/controls/button/Button';
import Section from 'components/controls/section/Section';
import SectionColumn from 'components/controls/section/SectionColumn';
// COMPONENTS - GENERAL
import Page from 'components/general/page/Page';

// UTILS
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import styles from './LandingPage.scss';

const LandingPage: FC = () => {
    const { t } = useTranslation();
    const [fetching, setFetching] = useState(true);
    const [user, setUser] = useState({
        name: '',
        email: '',
    });

    // FUNCTIONS
    const fetchUser = useCallback(() => {
        setFetching(true);
        axios
            .get('https://randomuser.me/api')
            .then(({ data: res }) => {
                const { results } = res;
                localStorage.setItem('current_user', JSON.stringify(results[0]));

                const _user = results[0];
                const { name, email } = _user;

                setUser({
                    email,
                    name: `${name.first} ${name.last}`,
                });
            })
            .finally(() => setFetching(false));
    }, []);

    const handleRefetch = useCallback(() => fetchUser(), [fetchUser]);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    useEffect(() => {
        return () => localStorage.clear();
    }, []);

    return (
        <Page name="landing" className={styles.csLandingPage}>
            <Section className={styles.csUser}>
                <SectionColumn xs={12} sm={12}>
                    {fetching ? (
                        <Text centered text="LBL_FETCHING_USER" />
                    ) : (
                        <Fragment>
                            <Title centered uppercase color="primary">
                                {t('LBL_WELCOME_USER', {
                                    name: user.name,
                                })}
                            </Title>
                            <Title centered as="h3">
                                {t('LBL_USER_EMAIL', {
                                    email: user.email,
                                })}
                            </Title>
                        </Fragment>
                    )}
                    <Button centered text="BTN_REFRESH" onClick={handleRefetch} disabled={fetching} />
                </SectionColumn>
            </Section>
        </Page>
    );
};

export default LandingPage;
