import { SVGComponent } from '@22byte/shared/types';
import { AccentColors } from '@22byte/shared/const';
import { ButtonHTMLAttributes, CSSProperties } from 'react';

export enum ButtonVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export enum ButtonSize {
    L = 'l',
    S = 's',
}

export interface BaseButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    text?: string;
    textWeight: 'default' | 'thin';
    icon: JSX.Element | SVGComponent;
    secondaryIcon?: JSX.Element | SVGComponent;
    iconAlignment: 'left' | 'right';
    theme?: AccentColors;
    fillContainer?: boolean;
    justifyCenter?: boolean;
    justify?: 'space-between' | 'start' | 'end';
    showLoader?: boolean;
}

export type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonCSSProperties extends CSSProperties {
    '--content-color': string;
    '--content-hover-color': string;
    '--bg-color': string;
    '--bg-hover-color': string;
}
