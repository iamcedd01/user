/* eslint-disable jsx-a11y/alt-text */
import { FC } from 'react';
// UTILS
import cx from 'clsx';
import { useValueAndKey } from 'utils/hooks';
// COMPONENTS

import styles from './Image.scss';

export type Props = DefaultComponentProps &
    React.ImgHTMLAttributes<HTMLImageElement> & {
        layout?: number;
    };

const Image: FC<Props> = ({ name, layout, className, ...props }) => {
    const controlName = useValueAndKey(name, 'cs-image');
    const controlClasses = cx(
        styles.csImage,
        {
            [styles[`csLayout${layout}`]]: layout,
        },
        className
    );

    return (
        <div data-cy={controlName} className={controlClasses}>
            <img {...props} />
        </div>
    );
};

export default Image;
