import clsx from 'clsx';
import s from './iconWrapper.module.scss';
import { FCC } from '@22byte/shared/types';
import { ButtonProps } from '../model/types/buttonTypes';

interface IconWrapperProps extends Pick<ButtonProps, 'iconAlignment'> {
    createWrapper: boolean;
    justifyCenter?: boolean;
    gap?: 'l' | 's';
    justify?: 'space-between' | 'start' | 'end';
}

export const IconWrapper: FCC<IconWrapperProps> = (
    { createWrapper, iconAlignment, justifyCenter, gap = 'l', justify, children },
) =>
    createWrapper
        ? (
            <div className={clsx(
                    s['icon-wrapper'],
                    s[`icon-wrapper_align--${iconAlignment}`],
                    s[`icon-wrapper_gap--${gap}`],
                    justifyCenter && s['icon-wrapper--center'],
                    justify && s[`icon-wrapper_justify-${justify}`],
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
