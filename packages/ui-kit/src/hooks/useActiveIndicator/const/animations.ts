import { AnimateFunctionProps } from '@frontend/shared/types';

const resultingOpacity = '7%';

const initialAnimationKeyFrames: Keyframe[] = [
    { 'opacity': '0%', 'width': '0%' },
    { 'opacity': resultingOpacity },
    { 'opacity': resultingOpacity, 'width': '300%' },
];

export const initialAnimationDuration = 400;
export const initialAnimationId = 'initial';

const initialAnimationProps: KeyframeAnimationOptions = {
    duration: initialAnimationDuration,
    id: initialAnimationId,
    fill: 'forwards',
    iterations: 1,
};

export const initialAnimation: AnimateFunctionProps = [ initialAnimationKeyFrames, initialAnimationProps ];

const exitAnimationKeyFrames: Keyframe[] = [
    { 'opacity': resultingOpacity },
    { 'opacity': '0%' },
];

export const exitAnimationDuration = 150;
export const exitAnimationId = 'exit';

const exitAnimationProps: KeyframeAnimationOptions = {
    duration: exitAnimationDuration,
    id: exitAnimationId,
    fill: 'forwards',
    iterations: 1,
};

export const exitAnimation: AnimateFunctionProps = [ exitAnimationKeyFrames, exitAnimationProps ];
