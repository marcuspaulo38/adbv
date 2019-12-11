import React from 'react';

import {
    Icon,
    Button,
    Input
} from 'antd';

import getIconWrapper from '../../IconRepository/index';
import DummyForm from './dummies';

import './index.css';

function IconWithLink({ icon, href, label }) {
    return (
        <a href={href} target="target">
            <div className="actionLink">
                <Icon type={icon} />
                <span>{label}</span>
            </div>
        </a>
    )
}

const ItemContainer = (props) => {
    //console.log('-- item-container.props: ', props);

    function getIcon() {
        const LocalIcon = getIconWrapper(props.item.product);

        return <LocalIcon style={{ width: '50px', height: '50px' }}/>
    }

    function handleProductTitleChange(e) {
        let itemUpdated = {...props.item, name: e.target.value};

        updateItem(itemUpdated);
    }

    function removeItem() {
        props.requestRemove();
    }

    function updateItem(itemUpdated) {
        props.requestUpdate(itemUpdated);
    }

    function requestClone() {
        props.requestClone();
    }

    function toogleExpanded() {
        let itemUpdated = {...props.item, expanded: !props.item.expanded};

        updateItem(itemUpdated);
    }

    return (
        <>
            <div data-item-id={props.item.id}>
                <div className="item-bar">
                    <div className="item-bar-actions">
                        <Button
                            onClick={toogleExpanded}
                            className="item-bar-actions-name"
                            type="link"
                            size="small">
                                <span>
                                    {props.item.basicName + (props.item.name.length > 0 ? ':  ' : '   ') + props.item.name}
                                </span>
                        </Button>

                        <div className="item-bar-actions-name-buttons">
                            <Button
                                type="link"
                                size="small"
                                icon="copy"
                                onClick={requestClone}
                                >
                            </Button>

                            <Button
                                className="delete-item-btn"
                                type="link"
                                size="small"
                                icon="delete"
                                onClick={removeItem}>
                            </Button>
                        </div>
                    </div>

                    <div className="item-bar-description">
                        <span>
                            {props.item.shortDescription}
                        </span>
                    </div>

                    <div className="item-bar-subtotal">
                        <span>
                            R$ 152,62
                        </span>
                    </div>
                </div>

                <div className={props.item.expanded ? "item-body" : "collapsed"}>
                    <div className="item-body-wrapper">
                        <div className="item-body-header">
                            <div>
                                {getIcon()}
                            </div>
                            <div className="item-body-header-title">
                                <Input
                                    size="large"
                                    className="item-body-header-title-input"
                                    placeholder={props.item.basicName}
                                    onChange={handleProductTitleChange}
                                    value={props.item.name} />
                            </div>
                        </div>

                        <div className="item-form-container">
                            <DummyForm />
                        </div>
                    </div>

                    <div className="item-body-actions">
                        <div className="item-body-actions-buttons">
                            <Button
                                type="primary"
                                size="large"
                                icon="copy"
                                onClick={requestClone}
                                >
                                <span>
                                    Clonar
                                </span>
                            </Button>
                            <Button
                                type="danger"
                                size="large"
                                icon="delete"
                                onClick={removeItem}
                                >
                                <span>
                                    Excluir
                                </span>
                            </Button>
                        </div>

                        <div className="item-body-actions-links">
                            <span className="item-body-actions-links-text">Mais informações</span>

                            <div>
                                <div>
                                    <IconWithLink
                                        icon="dollar"
                                        href="http://www.google.com.br"
                                        label="Detalhes de preço"
                                        />
                                </div>

                                <div>
                                    <IconWithLink
                                        icon="info-circle"
                                        href="http://www.google.com.br"
                                        label="Detalhes do produto"
                                        />
                                </div>

                                <div>
                                    <IconWithLink
                                        icon="snippets"
                                        href="http://www.google.com.br"
                                        label="Documentação"
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemContainer;