import { SVGComponent } from '@frontend/shared/types';
import { AccentColors } from '@frontend/shared/const';
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
    iconAligment: 'left' | 'right';
    theme?: AccentColors;
    fillContainer?: boolean;
    justifyCenter?: boolean;
    showLoader?: boolean;
}

export type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonCSSProperties extends CSSProperties {
    '--content-color': string;
    '--content-hover-color': string;
    '--bg-color': string;
    '--bg-hover-color': string;
}
