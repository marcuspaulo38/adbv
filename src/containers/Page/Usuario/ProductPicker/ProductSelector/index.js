import React from 'react';

import './index.css';

export default function ProductSelector(props) {
    return (
        <button
            onClick={e => props.onClick(props.resource, props.label)}
            className="product-btn"
            title={props.label}
            type="button">
            <div className="content">
                <div className="header">
                    <span className="icon">
                        {props.children}
                    </span>
                    <span className="title">
                        {props.label}
                    </span>
                </div>
                <div className="description">
                    <span>
                        {props.shortDescription}
                    </span>
                </div>
            </div>
        </button>
    );
}