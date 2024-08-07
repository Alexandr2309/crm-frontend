export const arrayAverage = (...args: [...number[]]) => {
    if (args.length === 0) return 0;
    return args.reduce((acc, value) => acc + value, 0) / args.length;
};
