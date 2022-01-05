import { FC } from 'react';
// UTILS
import cx from 'clsx';
import { toCapitalize } from 'utils';
import { useValueAndKey } from 'utils/hooks';
import { useTranslation } from 'react-i18next';
import getElementType from 'utils/lib/getElementType';

import styles from './Text.scss';

type Props = DefaultComponentProps &
    DefaultTextProps &
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        href?: string;
        text?: string;
        endIcon?: SvgIconComponent;
        startIcon?: SvgIconComponent;
        onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    };

const Link: FC<Props> = ({
    bold,
    name,
    text,
    color,
    children,
    className,
    uppercase,
    endIcon: EndIcon,
    startIcon: StartIcon,
    ...props
}) => {
    const { t } = useTranslation();
    const controlName = useValueAndKey(name, 'cs-link');
    const controlClasses = cx(
        styles.csLink,
        {
            [styles.csBold]: bold,
            [styles.csUppercase]: uppercase,
            [styles[`csColor${toCapitalize(color)}`]]: color,
        },
        controlName,
        className
    );
    const controlContent = !!text ? t(text) : children;
    const ControlElement = getElementType(Link, props);

    return (
        <ControlElement data-cy={controlName} className={controlClasses} {...props}>
            {!!StartIcon && <StartIcon className={styles.csLinkIcon} />}
            {controlContent}
            {!!EndIcon && <EndIcon className={styles.csLinkIcon} />}
        </ControlElement>
    );
};

export default Link;

Link.defaultProps = {
    bold: false,
    color: 'General',
};
