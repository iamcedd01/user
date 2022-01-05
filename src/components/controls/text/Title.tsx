import React, { FC } from 'react';
// UTILS
import cx from 'clsx';
import { toCapitalize } from 'utils';
import { useValueAndKey } from 'utils/hooks';
import { useTranslation } from 'react-i18next';

import styles from './Text.scss';

type Props = DefaultComponentProps &
    DefaultTextProps & {
        as?: TitleAs;
        text?: string;
    };

const Title: FC<Props> = ({ as, name, text, color, children, centered, uppercase, className }) => {
    const { t } = useTranslation();
    const controlName = useValueAndKey(name, 'cs-title');
    const controlClasses = cx(
        styles.csTitle,
        {
            [styles.csCentered]: centered,
            [styles.csUppercase]: uppercase,
            [styles[`csColor${toCapitalize(color)}`]]: color,
        },
        className
    );

    console.log({ controlClasses, styles });

    return (
        <div data-cy={controlName} className={controlClasses}>
            {React.createElement(as || 'h1', {}, t(text || '') || children)}
        </div>
    );
};

export default Title;

Title.defaultProps = {
    as: 'h1',
};
