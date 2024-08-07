export const notEmptyFilter = <TValue>(value: TValue | null | undefined): value is TValue =>
    value !== null && value !== undefined;
