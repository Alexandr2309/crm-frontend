import s from './button.module.scss';
import clsx from 'clsx';
import { BaseButtonProps, ButtonSize, ButtonVariant } from './model/types/buttonTypes';
import { ParagraphSkeleton, Skeleton, SkeletonVariant } from '../skeleton';
import { IconWrapper } from './ui/iconWrapper';
import { getButtonFont } from './lib/utils/getButtonFont';
import { WithClassName } from '@22byte/shared/types';

type BooleanSkeletonButtonProps = 'icon' | 'text' | 'secondaryIcon';
type ButtonSkeletonProps = Omit<BaseButtonProps, BooleanSkeletonButtonProps | 'showLoader' | 'theme'>
& Partial<Record<BooleanSkeletonButtonProps, boolean>> & WithClassName

export const ButtonSkeleton = (props: ButtonSkeletonProps) => {
    const {
        variant = ButtonVariant.PRIMARY, size = ButtonSize.L, iconAlignment = 'left',
        icon, secondaryIcon, justifyCenter = !secondaryIcon, fillContainer, text, textWeight = 'default', className,
    } = props;

    return (
        <Skeleton
            className={clsx(
                s['skeleton'],
                s['button'],
                s[`skeleton_variant--${variant}`],
                s[`button_size--${size}`],
                justifyCenter && s['button--center-h'],
                icon && !text && !secondaryIcon && s['button--square'],
                fillContainer && s['button--fill'],
                className,
            )}
        >
            <IconWrapper
                createWrapper={!!icon && !!text}
                iconAlignment={iconAlignment}
                gap={variant === ButtonVariant.THIN || variant === ButtonVariant.FLAT ? 's' : 'l'}
            >
                {
                    icon && (
                        <Skeleton
                            className={s['icon-skeleton']}
                            variant={SkeletonVariant.SQUARE}
                            composite={true}
                        />
                    )
                }
                {
                    text && (
                        <ParagraphSkeleton
                            className={clsx(
                                getButtonFont({ textWeight, size }),
                                s['skeleton-text'],
                            )}
                            lastLineWidth={'100'}
                            composite={true}
                        />
                    )
                }
            </IconWrapper>
            {
                secondaryIcon && (
                    <Skeleton
                        className={s['icon-skeleton']}
                        variant={SkeletonVariant.SQUARE}
                        composite={true}
                    />
                )
            }
        </Skeleton>
    );
};
