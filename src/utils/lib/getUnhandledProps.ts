const getUnhandledProps = (Component: any, props: Record<string, any>) => {
    const { handledProps = [] } = Component;

    return Object.keys(props).reduce((acc: any, prop: any) => {
        if (prop === 'childKey') return acc;
        if (handledProps.indexOf(prop) === -1) acc[prop] = props[prop];
        return acc;
    }, {});
};

export default getUnhandledProps;
