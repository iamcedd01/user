import React, { FC } from 'react';
// UTILS
import cx from 'clsx';
import { toCapitalize } from 'utils';
import { useValueAndKey } from 'utils/hooks';
import { useTranslation } from 'react-i18next';
import getElementType from 'utils/lib/getElementType';

import styles from './Text.scss';

type Props = DefaultComponentProps &
    DefaultTextProps & {
        text?: string;
        href?: string;
    };

const Text: FC<Props> = props => {
    const { bold, name, text, color, children, centered, uppercase, className } = props;

    const ControlElement = getElementType(Text, props);

    const { t } = useTranslation();
    const controlName = useValueAndKey(name, 'cs-text');
    const controlClasses = cx(
        styles.csText,
        {
            [styles.csBold]: bold,
            [styles.csCentered]: centered,
            [styles.csUppercase]: uppercase,
            [styles[`csColor${toCapitalize(color)}`]]: !!color,
        },
        className
    );

    return (
        <ControlElement data-cy={controlName} className={controlClasses}>
            {t(text || '') || children}
        </ControlElement>
    );
};

export default Text;

Text.defaultProps = {};
