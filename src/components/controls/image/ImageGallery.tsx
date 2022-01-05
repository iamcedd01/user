import { FC } from 'react';
// UTILS
import cx from 'clsx';
import { useValueAndKey } from 'utils/hooks';
// COMPONENTS

import Text from '../text/Text';

import styles from './ImageGallery.scss';
import Image, { Props as ImageProps } from './Image';

type Props = DefaultComponentProps & {
    items: Array<ImageProps & { label?: string }>;
};

const ImageGallery: FC<Props> = ({ name, items, className }) => {
    const controlName = useValueAndKey(name, 'cs-image-gallery');
    const controlClasses = cx(styles.csImageGallery, className);

    return (
        <div data-cy={controlName} className={controlClasses}>
            <div className={styles.csItems}>
                {items.map(({ label, ...item }, i) => (
                    <div key={i} className={styles.csItem} data-index={i}>
                        <Image className={styles.csItemImage} {...item} />
                        <Text centered className={styles.csItemLabel} text={label} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
