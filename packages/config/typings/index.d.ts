declare module '*.scss' {
    interface ClassNames {
        [className: string]: string;
    }

    const classNames: ClassNames;
    export = classNames;
}

declare module '*.svg' {
    const SVG: React.FC<React.SVGAttributes<SVGElement>>;
    export default SVG;
}
