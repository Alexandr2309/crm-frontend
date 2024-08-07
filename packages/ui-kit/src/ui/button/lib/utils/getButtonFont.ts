import { AppTypography } from '@22byte/shared/const';
import { ButtonProps, ButtonSize } from '../../model/types/buttonTypes';

export const getButtonFont = ({ textWeight, size }: Pick<Required<ButtonProps>, 'textWeight' | 'size'>) => {
    switch (size) {
        case ButtonSize.L:
            return textWeight === 'default' ? AppTypography.BTN_LABEL : AppTypography.TEXT;
        case ButtonSize.S:
            return textWeight === 'default' ? AppTypography.BTN_LABEL_MINI : AppTypography.CAPTION;
    }
};
