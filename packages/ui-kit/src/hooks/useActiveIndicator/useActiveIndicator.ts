import { AccentColors } from '@frontend/shared/const';
import { getInteractionEventKeys, getScreenEventPosition, ScreenEvent } from '@frontend/shared/miscUtils';
import { useEffect, useRef } from 'react';
import { exitAnimation, exitAnimationId, initialAnimation, initialAnimationId } from './const/animations';
import s from './activeIndicator.module.scss';

interface UseActiveIndicatorProps {
    backgroundColor?: AccentColors;
    disabled?: boolean;
    stopPropagation?: boolean;
}

/**
 * Возвращает ref заданного типа.
 * На ref навешивает слушатель на событие "нажатия" (click/touch).
 * По нажатию отрисовывает на элементе расширяющуюся окружность.
 * @note
 * Элемент, для которого передается ref должен иметь position: relative
 */
export const useActiveIndicator = <T extends HTMLElement>(props: UseActiveIndicatorProps) => {
    const { backgroundColor, disabled, stopPropagation } = props;
    const bgColorRef = useRef<string>('');
    const elementRef = useRef<T | null>(null);
    const disabledRef = useRef(disabled);
    const interactionEventKeys = useRef(getInteractionEventKeys());
    const activeIndicatorSet = useRef<Set<HTMLDivElement>>(new Set());

    useEffect(() => {
        disabledRef.current = disabled;
        bgColorRef.current = backgroundColor ? `${backgroundColor}-1` : 'constant-white';
    }, [ disabled, backgroundColor ]);

    useEffect(() => {
        if (!elementRef.current) return;
        const [ initialEventKey ] = getInteractionEventKeys();

        elementRef.current.addEventListener(initialEventKey, appendIndicator, { passive: true });

        return () => {
            elementRef.current?.removeEventListener(initialEventKey, appendIndicator);
        };
    }, []);

    /**
     * Обрабатывает событие нажатия.
     * Получает координаты клика/тача и координаты ноды, на которую навешан слушатель.
     * Вычисляет координаты клика относительно ноды и отрисовывает по этим координатам пустой div.
     * div получает анимацию расширяющейся окружности.
     */
    const appendIndicator = (e: ScreenEvent) => {
        stopPropagation && e.stopPropagation();
        const element = elementRef.current;

        if (disabledRef.current || !element) return;

        const [ _, exitEventKey ] = interactionEventKeys.current;
        window.addEventListener(exitEventKey, clearIndicators, { once: true });

        const { x, y } = element.getBoundingClientRect();
        const { x: eventX, y: eventY } = getScreenEventPosition(e);

        const indicator = document.createElement('div');
        indicator.setAttribute('class', s['indicator'] ?? '');
        indicator.style.left = `${eventX - x}px`;
        indicator.style.top = `${eventY - y}px`;
        indicator.style.backgroundColor = `var(--${bgColorRef.current})`;
        indicator.animate(...initialAnimation);

        activeIndicatorSet.current.add(indicator);
        element.appendChild(indicator);
    };

    const clearIndicators = () => {
        activeIndicatorSet.current.forEach(removeIndicator);
        activeIndicatorSet.current.clear();
    };

    const removeIndicator = (indicator: HTMLDivElement) => {
        const animations = indicator.getAnimations();
        const initial = animations.find(it => it.id === initialAnimationId);
        const exit = animations.find(it => it.id === exitAnimationId);

        if (!initial) return;
        if (!exit) {
            initial.playState === 'finished'
                ? appendExitAnimation(indicator)
                : initial.onfinish = () => appendExitAnimation(indicator);
        }
    };

    const appendExitAnimation = (indicator: HTMLDivElement) => {
        const exit = indicator.animate(...exitAnimation);
        exit.onfinish = () => indicator.remove();
    };

    return elementRef;
};
