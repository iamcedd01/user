import { FC } from 'react';
// UTILS
import cx from 'clsx';
import { useValueAndKey } from 'utils/hooks';

import styles from './Page.scss';

type Props = DefaultComponentProps;

const Page: FC<Props> = ({ name, children, className }) => {
    const controlName = useValueAndKey(name, 'cs-page');
    const controlClasses = cx(styles.csPage, controlName, className);

    return (
        <div className={controlClasses}>
            <div className="cs-page-wrapper">
                <div className="cs-page-content">{children}</div>
            </div>
        </div>
    );
};

export default Page;
