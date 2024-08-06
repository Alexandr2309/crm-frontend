import { AnimateFunctionProps } from '@22byte/shared/types';

const animationOptions: KeyframeAnimationOptions = {
    easing: 'ease',
    iterations: 1,
    duration: 350,
    fill: 'forwards',
};

/**
 * Создать fade-out анимацию для тоста на основе текущего значения opacity
 */
export const createToastFadeOutAnimation = (node: HTMLDivElement): AnimateFunctionProps => {
    const currentOpacity = getComputedStyle(node)['opacity'];

    const keyframes: Keyframe[] = [
        { opacity: currentOpacity },
        { opacity: 0 },
    ];

    return [ keyframes, animationOptions ];
};
