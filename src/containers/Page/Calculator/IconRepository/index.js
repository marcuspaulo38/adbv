import React from 'react';

import {
    Icon
} from 'antd';

import repository from './repository';

function getIconForService(serviceName) {
    const sName = serviceName || 'default';
    let iconJSX = repository[sName];

    if (!iconJSX)
        iconJSX = repository.default;

    return iconJSX;
}

const getIconWrapper = (serviceName) => {
    const SVGWrapper = () => getIconForService(serviceName)();

    const LocalIcon = props => <Icon component={SVGWrapper} {...props}/>

    return LocalIcon;
}

//export default getIconForService;
export default getIconWrapper;