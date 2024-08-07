import { FCC } from '@22byte/shared/types';
import clsx from 'clsx';
import { type SkeletonProps, SkeletonVariant } from './lib/types/skeleton';
import s from './skeleton.module.scss';

export const Skeleton: FCC<SkeletonProps> = (
    { variant = SkeletonVariant.RECT, children, composite, className, style },
) => (
    <div
        className={clsx(
            s['skeleton'],
            s[`skeleton--${variant}`],
            s[`skeleton--${composite ? 'composite' : 'base'}`],
            className,
        )}
        style={style}
    >
        { children ?? <>&nbsp;</> }
    </div>
);
