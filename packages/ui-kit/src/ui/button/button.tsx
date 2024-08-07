import { forwardRef, useImperativeHandle, useMemo } from 'react';
import { ButtonProps, ButtonSize, ButtonVariant } from './model/types/buttonTypes';
import { useActiveIndicator } from '../../hooks/useActiveIndicator/useActiveIndicator';
import { generateButtonCssVars } from './lib/utils/generateButtonCssVars';
import clsx from 'clsx';
import s from './button.module.scss';
import { getButtonFont } from './lib/utils/getButtonFont';
import { IconWrapper } from './ui/iconWrapper';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const {
        className, variant = ButtonVariant.PRIMARY, size = ButtonSize.L, theme, iconAlignment = 'left', type = 'button',
        icon: Icon = null, secondaryIcon: SecondaryIcon, textWeight = 'default', style, 
        fillContainer, onClick, showLoader, text, justifyCenter = !SecondaryIcon, justify, ...rest
    } = props;

    const disableIndicator = showLoader;
    const buttonRef = useActiveIndicator<HTMLButtonElement>({
        disabled: disableIndicator, backgroundColor: variant === ButtonVariant.PRIMARY ? undefined : theme,
    });

    const buttonVars = useMemo(() => generateButtonCssVars(variant, theme), [ variant, theme ]);

    useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement, []);

    return (
        <button
            className={clsx(
            s['button'],
            s[`button_variant--${variant}`],
            s[`button_theme--${theme}`],
            s[`button_size--${size}`],
            Icon && !text && !SecondaryIcon && s['button--square'],
            fillContainer && s['button--fill'],
            showLoader && s['button--loading'],
            justifyCenter && s['button--center-h'],
            getButtonFont({ textWeight, size }),
            className,
            )}
            style={{ ...buttonVars, ...style }}
            onClick={showLoader ? undefined : onClick}
            ref={buttonRef}
            type={type}
            {...rest}
        >
            <IconWrapper
                createWrapper={!!Icon && !!text}
                iconAlignment={iconAlignment}
                justifyCenter={justifyCenter}
                gap={'l'}
                justify={justify}
            >
                { typeof Icon === 'function' ? <Icon/> : Icon }
                {
                    text && (
                        <span>
                            {text}
                        </span>
                    )
                }
            </IconWrapper>
            { typeof SecondaryIcon === 'function' ? <SecondaryIcon/> : SecondaryIcon }
        </button>
        
    );

});
