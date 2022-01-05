import { FC } from 'react';
// UTILS
import cx from 'clsx';
import { useValueAndKey } from 'utils/hooks';

import styles from './Section.scss';

type Props = DefaultComponentProps & {
    fluid?: boolean;
    compact?: boolean;
};

const Section: FC<Props> = ({ name, fluid, compact, children, className, ...props }) => {
    const controlName = useValueAndKey(name, 'cs-section');
    const controlClasses = cx(
        styles.csSection,
        {
            [styles.csFluid]: fluid,
            [styles.csCompact]: compact,
        },
        controlName,
        className
    );

    return (
        <div data-cy={controlName} className={controlClasses} {...props}>
            <div className={styles.csWrapper}>{children}</div>
        </div>
    );
};

export default Section;
