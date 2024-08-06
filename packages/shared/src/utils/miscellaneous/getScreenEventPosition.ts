export type ReactScreenEvent = React.TouchEvent | React.MouseEvent;
export type NativeScreenEvent = TouchEvent | MouseEvent;

export type ScreenEvent = ReactScreenEvent | NativeScreenEvent;

export type Coordinates = { x: number; y: number };

export const isTouchEvent = (e: ScreenEvent): e is React.TouchEvent | TouchEvent =>
    e && 'touches' in e;

export const getScreenEventPosition = (e: ScreenEvent): Coordinates => isTouchEvent(e)
    ? { x: e.touches[0]?.pageX ?? 0, y: e.touches[0]?.pageY ?? 0 }
    : { x: e.clientX, y: e.clientY };
