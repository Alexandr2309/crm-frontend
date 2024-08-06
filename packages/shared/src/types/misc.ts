import React from 'react';

export type SVGComponent = React.FC<React.SVGAttributes<SVGElement>>;

/**
 * Замена конструкции <P = {}>, на которую жалуется eslint
 */
export type AnyObject = Record<string, unknown>;

export type FCC<P = AnyObject> = React.FC<React.PropsWithChildren<P>>;

export type WithClassname = {
    className?: string;
}
