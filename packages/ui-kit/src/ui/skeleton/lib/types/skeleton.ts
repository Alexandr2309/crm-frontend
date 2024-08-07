import { WithClassName } from '@22byte/shared/types';
import { HTMLAttributes } from 'react';

export enum SkeletonVariant {
    RECT = 'rect',
    SQUARE = 'square',
    CIRCLE = 'circle',
}

export type SkeletonProps = {
    variant?: SkeletonVariant;
    /**
     * Является ли этот скелет вложенным в другой селект (ex: скелет иконки в скелете кнопки)
     */
    composite?: boolean;
}
/**
 * className является опциональным атрибутом.
 * Но фактически для корректной работы нужно задать размеры скелетону
 * либо через класс, либо через style
 */
& WithClassName
& Pick<HTMLAttributes<HTMLDivElement>, 'style'>
