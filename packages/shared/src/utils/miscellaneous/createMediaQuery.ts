export const createMediaQuery = (query: string) => typeof window !== 'undefined'
    ? window.matchMedia(query)
    : undefined;
