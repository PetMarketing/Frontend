import LocationIcon from '@/assets/svg/location-icon';
import CalendarIcon from '@/assets/svg/calendar-icon';

import { getClsNames } from '@/utils/helpers';

import styles from './InfoLabel.module.scss';

interface IInfoLabelProps {
    color: 'blue' | 'white';
    type: 'date' | 'location';
    content: string;
}

export default function InfoLabel({ color, type, content }: IInfoLabelProps) {
    // Визначення іконки на основі типу
    const Icon = type === 'location' ? LocationIcon : CalendarIcon;

    return (
        <div className={getClsNames(styles.infoLabel, [styles[color]])}>
            <Icon />
            <span>{content}</span>
        </div>
    )
}
