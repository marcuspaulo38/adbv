import React from 'react';
import { notification } from 'antd';

import getIconWrapper from '../IconRepository/index';


const openNotification = (product, title, itemId) => {
    function scrollIntoViewItem(e) {
        e.preventDefault();

        document.querySelector(`[data-item-id='${itemId}']`).scrollIntoView()
    }

    const LocalIcon = getIconWrapper(product);

    notification.info({
        key: "product-selection-add",
        duration: 3,
        placement: "bottomRight",
        bottom: 224,
        message: title,
        description: (
            <>
                <a href={itemId}
                   onClick={scrollIntoViewItem}>
                    Exibir
                </a>
            </>
        ),
        icon: <LocalIcon style={{ width: '40px', height: '40px', marginLeft: '-10px' }}/>
    });
};

export default openNotification;