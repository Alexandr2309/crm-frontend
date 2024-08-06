import { ToastControlsMap, ToasterHeightTuple } from '../context/toastContext';

// приращение значения scale для тоста
const dScale = 0.05;
// приращение значения translateY для тоста в wrapped виде
const dY = 12;
// приращение значения translateZ для тоста
const dZ = -1;
// расстояние между тостами в контейнере (тостере) в unwrapped виде
const toasterGap = 8;
// макс. высота контента тоста в wrapped виде
const wrappedContentMaxHeight = 32;

/**
 * Функция пересчитывает положение тостов в тостере и назначает эти положения напрямую переданным нодам.
 * Функция возвращает кортеж высот контейнера (тостера) в сложенном и разложенном виде.
 */
export const recalculateToastsPosition = (toastControlsMap: ToastControlsMap): ToasterHeightTuple => {
    const initialToastHeightArray: number[] = [];

    Array.from(toastControlsMap).forEach(([ _, { node, initialNodeHeight } ], index) => {
        // scale в wrapped состоянии.
        const nodeWrappedScale = 1 - dScale * index;

        // сумма начальных высот всех предыдущих тостов. Для первого тоста равна нулю
        const cumulativeHeight = initialToastHeightArray.reduce((acc, it) => acc + it, 0);
        initialToastHeightArray.push(initialNodeHeight);

        // насколько нужно сдвинуть тост от верхней точки контейнера (unwrapped)
        const nodeY = cumulativeHeight + toasterGap * index;
        // насколько нужно сдвинуть тост от верхней точки контейнера (wrapped)
        const nodeWrappedY = index === 0 ? 0 : (initialToastHeightArray[0] ?? 0) + dY * index;

        const nodeZ = dZ * index;

        if (index === 0) {
            node.style.transform = `translate3d(0, 0, ${nodeZ}px) scale(1)`;
            node.style.setProperty('--content-max-height', 'unset');
            node.style.setProperty('--content-opacity', '1');
        } else {
            node.style.transform =
                `translate3d(0, calc(${nodeWrappedY}px - 100%), ${nodeZ}px) scale(${nodeWrappedScale})`;
            node.style.setProperty('--content-max-height', `${wrappedContentMaxHeight}px`);
            node.style.setProperty('--content-opacity', '0');
        }
        // значения этих переменных применятся в scss в разложенном виде
        node.style.setProperty('--y', `${nodeY}px`);
        node.style.setProperty('--z', `${nodeZ}px`);
    });

    // кол-во тостов помимо первого
    const notFirstToastQuantity = initialToastHeightArray.length - 1;
    const wrappedHeight = (initialToastHeightArray[0] ?? 0) + dY * notFirstToastQuantity;
    const unwrappedHeight = initialToastHeightArray
        .reduce((acc, it) => acc + it, 0) + toasterGap * notFirstToastQuantity;

    return [ wrappedHeight, unwrappedHeight ];
};
