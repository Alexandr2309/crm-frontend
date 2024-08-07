import { forwardRef, useImperativeHandle, useMemo } from 'react';
import { ButtonProps, ButtonSize, ButtonVariant } from './model/types/buttonTypes';
import { useActiveIndicator } from '../../hooks/useActiveIndicator/useActiveIndicator';
import { generateButtonCssVars } from './lib/utils/generateButtonCssVars';
import clsx from 'clsx';
import s from './button.module.scss';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const {
        className, variant = ButtonVariant.PRIMARY, size = ButtonSize.L, theme, iconAligment = 'left', type = 'button',
        icon: Icon = null, secondaryIcon: SecondaryIcon, textWeight = 'default', style,
        fillContainer, onClick, showLoader, text, justifyCenter = !SecondaryIcon, ...rest
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
        )}
        />
    );

});
