import clsx from 'clsx';
import styles from './paragraphSkeleton.module.scss';
import { Skeleton } from './skeleton';
import { createDummyArray } from '@22byte/shared/arrayUtils';
import { AppTypography } from '@22byte/shared/const';
import { SkeletonVariant } from './lib/types/skeleton';

/**
 * Скелет параграфа текста
 * @param lineQuantity количество строк.
 * @param className имя текстового класса. Позволяет задать высоту строки.
 * Может быть составной строкой e.g. clsx(AppTypography.H1, 'class').
 * По умолчанию является пустой строкой и зависит от унаследованных выше классов текста.
 * @param lastLineWidth ширина последней строки (в %).
 * @param composite Является ли этот скелет вложенным в другой скелет (ex: скелет текста в скелете кнопки)
 */
export interface ParagraphSkeletonProps {
    lineQuantity?: number;
    className?: AppTypography | string;
    lastLineWidth?: '25' | '50' | '75' | '100';
    composite?: boolean;
}

export const ParagraphSkeleton = (
    { lineQuantity = 1, className, composite, lastLineWidth = '25' }: ParagraphSkeletonProps,
) => (
    <div
        className={clsx(
            styles['paragraph-skeleton'],
            styles[`paragraph-skeleton--last-line-${lastLineWidth}`],
            className,
        )}
    >
        {
            createDummyArray(lineQuantity).map((_, index) =>
                <Skeleton
                    variant={SkeletonVariant.RECT}
                    className={''}
                    composite={composite}
                    key={index}
                />,
            )
        }
    </div>
);
