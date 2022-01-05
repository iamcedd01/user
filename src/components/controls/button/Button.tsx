import { FC } from 'react';
// UTILS
import cx from 'clsx';
import { toCapitalize } from 'utils';
import { useValueAndKey } from 'utils/hooks';
import { useTranslation } from 'react-i18next';
// COMPONENTS
import MuiButton, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';

import styles from './Button.scss';

type Props = DefaultComponentProps &
    Omit<MuiButtonProps, 'color'> & {
        text?: string;
        centered?: boolean;
        color?: ButtonColors;
        Icon?: SvgIconComponent;
    };

const Button: FC<Props> = ({ name, text, color, centered, children, className, ...props }) => {
    const { t } = useTranslation();
    const controlName = useValueAndKey(name, 'cs-button');
    const controlClasses = cx(
        styles.csButton,
        {
            [styles.csCentered]: centered,
            [styles[`cs${toCapitalize(color)}`]]: !!color,
        },
        className
    );
    const controlContent = t(text || '') || children;

    return (
        <MuiButton variant="contained" data-cy={controlName} className={controlClasses} {...props}>
            {controlContent}
        </MuiButton>
    );
};

export default Button;

Button.defaultProps = {
    color: 'secondary',
};
