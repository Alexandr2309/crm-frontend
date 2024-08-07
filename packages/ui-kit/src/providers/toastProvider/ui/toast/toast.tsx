import { useEffect, useRef } from 'react';
import { ToastControls, ToastInterface } from '../../lib/context/toastContext';
import { useToast } from '../../lib/hooks/useToast';
import s from './toast.module.scss';
import clsx from 'clsx';
import { Button, ButtonSize, ButtonVariant } from '../../../../ui/button';
import Cross from '@bnetex/icons/cross.svg';
import Check from '@bnetex/icons/check.svg';
import CrossCircle from '@bnetex/icons/cross-circle.svg';
import Info from '@bnetex/icons/info.svg';
import { useTimer } from '@22byte/shared/hooks';

interface ToastProps extends ToastInterface {
    id: string;
    unwrapped: boolean;
}

export const Toast = ({ message, type, id, unwrapped, persist = false }: ToastProps) => {
    const { deleteToast, setToastControls } = useToast();
    const timerController = useTimer(() => deleteToast(id), 5000);
    const toastRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!toastRef.current) return;
        !persist && timerController.start();

        const controls: ToastControls = {
            node: toastRef.current,
            initialNodeHeight: toastRef.current.getBoundingClientRect().height,
            pauseTimer: () => {
                !persist && timerController.pause;
            },
            resumeTimer: () => {
                !persist && timerController.resume;
            },
        };

        setToastControls(id, controls);
    }, []);

    const icon = (() => {
        switch (type) {
            case 'error':
                return <CrossCircle/>;
            case 'success':
                return <Check/>;
            case 'info':
                return <Info/>;
        }
    })();

    return (
        <div
            className={clsx(
                s['container'],
                unwrapped && s['container--unwrapped'],
            )}
            ref={toastRef}
        >
            <div className={s['content']}>
                <div className={clsx(s['icon-wrapper'], s[`icon-wrapper--${type}`])}>
                    {icon}
                </div>
                <div className={s['message-wrapper']}>
                    {message}
                </div>
                <Button
                    variant={ButtonVariant.GHOST}
                    size={ButtonSize.S}
                    onClick={() => deleteToast(id)}
                    icon={Cross}
                />
            </div>
        </div>
    );
};
