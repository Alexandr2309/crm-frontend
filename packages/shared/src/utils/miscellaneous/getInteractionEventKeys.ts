import { createMediaQuery } from './createMediaQuery';

type InitialInteractionEventKey = keyof Pick<HTMLElementEventMap, 'mousedown' | 'touchstart'>;
type ExitInteractionEventKey = keyof Pick<HTMLElementEventMap, 'mouseup' | 'touchend'>;
type MoveInteractionEventKey = keyof Pick<HTMLElementEventMap, 'mousemove' | 'touchmove'>;

export type InteractionEventKeyTuple = [
    initEventKey: InitialInteractionEventKey,
    exitEventKey: ExitInteractionEventKey,
    moveEventKey: MoveInteractionEventKey,
];

export const getInteractionEventKeys = (): InteractionEventKeyTuple => {
    const isTouchDevice = createMediaQuery('(hover: none)')?.matches ?? false;

    return isTouchDevice
        ? [ 'touchstart', 'touchend', 'touchmove' ]
        : [ 'mousedown', 'mouseup', 'mousemove' ];
};
