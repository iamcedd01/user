import { FC } from 'react';
// UTILS
import cx from 'clsx';
import { useValueAndKey } from 'utils/hooks';
// COMPONENTS

import styles from './Divider.scss';

type Props = DefaultComponentProps;

const Divider: FC<Props> = ({ name, className }) => {
    const controlName = useValueAndKey(name, 'cs-');
    const controlClasses = cx(styles.csDivider, controlName, className);

    return <div data-cy={controlName} className={controlClasses}></div>;
};

export default Divider;
