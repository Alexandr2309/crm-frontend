const module = import('./app').then(module => {
    if (window.fetch === undefined) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore cause no typings for package
        // https://www.npmjs.com/package/react-app-polyfill
        import('react-app-polyfill/stable.js');
    }

    return module.default;
});

export default module;
