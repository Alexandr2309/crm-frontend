import clsx from 'clsx';
import { ButtonProps } from '../types/buttonTypes';
import s from './iconWrapper.module.scss';
import { FCC } from '@bnetex/shared/types';

interface IconWrapperProps extends Pick<ButtonProps, 'iconAlignment'> {
    createWrapper: boolean;
    justifyCenter?: boolean;
    gap?: 'l' | 's';
}

export const IconWrapper: FCC<IconWrapperProps> = (
    { createWrapper, iconAlignment, justifyCenter, gap = 'l', children },
) =>
    createWrapper
        ? (
            <div className={clsx(
                    s['icon-wrapper'],
                    s[`icon-wrapper_align--${iconAlignment}`],
                    s[`icon-wrapper_gap--${gap}`],
                    justifyCenter && s['icon-wrapper--center'],
                )}
            >
                {children}
            </div>
        )
        : (
            <>
                {children}
            </>
        );
