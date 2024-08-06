import { MutableRefObject, forwardRef } from 'react';
import { ToastControlsMap, ToastMap, ToasterHeightTuple } from '../../lib/context/toastContext';
import s from './toaster.module.scss';
import { Toast } from '../toast/toast';
import { useBooleanState } from '@bnetex/shared/hooks';

interface ToasterProps {
    toastMap: ToastMap;
    toastControlsMap: MutableRefObject<ToastControlsMap>;
    // Высоты нужны для того, чтобы в разложенном состоянии в gap между тостами
    // не отрабатывал onMouseLeave на контейнере.
    // Иначе будет "прыгать" wrapped стейт
    heightTuple: ToasterHeightTuple;
}

export const Toaster = forwardRef<HTMLDivElement, ToasterProps>((
    { toastMap, toastControlsMap, heightTuple }, ref,
) => {
    const [ wrappedHeight, unwrappedHeight ] = heightTuple;
    const [ isUnwrapped, setIsUnwrapped, setIsWrapped ] = useBooleanState(false);

    const handleMouseEnter = () => {
        setIsUnwrapped();
        toastControlsMap.current.forEach(({ node: _, pauseTimer }) => {
            pauseTimer();
        });
    };

    const handleMouseLeave = () => {
        setIsWrapped();
        toastControlsMap.current.forEach(({ node: _, resumeTimer }) => {
            resumeTimer();
        });
    };

    if (!toastMap.size) return null;

    return (
        <div
            className={s['container']}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            // Событие onMouseLeave не отрабатывает если мы вручную удаляем последний тост
            // (из-за чего высота тостера уменьшается и событие не работает)
            // поэтому используем классический дедовский костыль с пустой анимацией на селектор :not(:hover)
            // и хэнлдером onAnimationEnd
            onAnimationEnd={handleMouseLeave}
            style={{ height: `${isUnwrapped ? unwrappedHeight : wrappedHeight}px` }}
            ref={ref}
        >
            <div className={s['content']}>
                {
                    Array.from(toastMap).map(([ id, toast ]) => (
                        <Toast
                            id={id}
                            key={id}
                            unwrapped={isUnwrapped}
                            {...toast}
                        />
                    ))
                }
            </div>
        </div>
    );
});
