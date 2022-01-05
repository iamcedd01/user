const getElementType = (Component: any, props: Record<string, any>, getDefault?: any) => {
    const { defaultProps = {} } = Component;

    if (props.as && props.as !== defaultProps.as) return props.as;

    if (getDefault) {
        const computedDefault = getDefault();
        if (computedDefault) return computedDefault;
    }

    if (props.href || props.link) return 'a';

    return defaultProps.as || 'div';
};

export default getElementType;
