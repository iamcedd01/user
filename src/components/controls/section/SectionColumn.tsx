import { FC } from 'react';
import cx from 'clsx';
import { useValueAndKey } from 'utils/hooks';

import styles from './Section.scss';

type Props = DefaultComponentProps & {
    xs?: Widths;
    sm?: Widths;
    md?: Widths;
    lg?: Widths;
    xl?: Widths;
    width?: Widths;
};

const SectionColumn: FC<Props> = ({ xs, sm, md, lg, xl, name, width, children, className }) => {
    const controlName = useValueAndKey(name, 'cs-section-column');
    const controlClasses = cx(
        styles.csSectionColumn,
        {
            [styles[`csWidth${width}`]]: width,
            [styles[`csXsWidth${xs}`]]: xs,
            [styles[`csSmWidth${sm}`]]: sm,
            [styles[`csMdWidth${md}`]]: md,
            [styles[`csLgWidth${lg}`]]: lg,
            [styles[`csXlWidth${xl}`]]: xl,
        },
        className
    );

    return (
        <div data-cy={controlName} className={controlClasses}>
            {children}
        </div>
    );
};

export default SectionColumn;

SectionColumn.defaultProps = {
    width: 12,
};
