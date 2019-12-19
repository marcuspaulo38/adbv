import React from 'react';

import { connect } from 'react-redux';

import {
    Row,
    Col,
    Input,
    Button,
    Modal
} from 'antd';

import {
    ColumnStyle,
    TabContentStyle,
    Tabs,
    TabPane
} from './tab-metadata';

import actions from '../../../../redux/calculator/actions';
import ItemContainer from './Item/index';
import { EmptyEstimative } from './dummies';

import './index.css';

const {
    requestNewEstimative,
    requestChangeCurrentEstimative,
    requestRemoveEstimative,
    requestUpdateEstimative,
    requestUpdateItemToEstimative,
    requestRemoveItemToEstimative,
    requestCloneItemInEstimative,
    requestToogleAllItemsExpansion
} = actions;

const { confirm } = Modal;

const EstimativeHeader = (props) => {
    return (
        <div>
            <div className="estimative-header">
                <div className="estimative-header-title">
                    <Input
                        size="large"
                        placeholder="Sua Estimativa"
                        className="estimative-header-title-input"
                        value={props.estimativeName}
                        onChange={(e) => props.onChangeEstimativeName({ id: props.estimativeId, name: e.target.value })} />
                </div>
                <div className="estimative-header-total">
                    <div className="estimative-header-total-text">
                        <span>Total da estimativa: R$ {props.estimativeValue}</span>
                    </div>
                </div>
            </div>
            {/**Global estimative operations */}
            <div className="estimative-global-actions">
                <div className="estimative-global-actions-buttons">
                    <Button 
                        size="large"
                        type="primary"
                        shape="circle"
                        icon="arrows-alt"
                        onClick={() => props.onToogleExpansionOnAllItems(true)} />

                    <Button
                        size="large"
                        type="primary"
                        shape="circle"
                        icon="shrink"
                        onClick={() => props.onToogleExpansionOnAllItems(false)} />

                    <Button
                        size="large"
                        type="primary"
                        shape="circle"
                        icon="delete"
                        onClick={(e) => props.onRemoveEstimative(props.estimativeId)} />
                </div>
            </div>
        </div>
    )
}

class EstimativesContainer extends React.Component {

    constructor(props) {
        super(props);

        console.log('-- estimatives-container.props: ', props);
    }

    onEdit = (targetKey, action) => {
        console.log('-- action: ', action)
        this[action](targetKey);
    };

    add = () => {
        this.props.requestNewEstimative();
    }

    remove = (targetKey) => {
        let that = this;

        confirm({
            title: 'Fechar a Estimativa',
            content: 'Gostaria de salvar sua estimativa antes de fechar?',
            onOk() {
                that.props.requestRemoveEstimative(targetKey);
            },
            onCancel() {},
        });
    }

    onChangeTab = (activeKey) => {
        this.props.requestChangeCurrentEstimative(activeKey);
    };

    requestUpdateItem = (estimativeId) => {
        return (newItem) => {
            //console.log(' -- item-updated: ', newItem);
            this.props.requestUpdateItemToEstimative(newItem, estimativeId)
        }
    }

    requestToogleItemsEstimative = (estimativeId) => {
        return (expanded) => {
            this.props.requestToogleAllItemsExpansion(estimativeId, expanded)
        }
    }

    render() {
        return (
            <Row type="flex" justify="space-around">
                <Col xs={24} sm={24} md={24} lg={20}>
                    <ColumnStyle>
                        <Tabs
                            animated={false}
                            type="editable-card"
                            onChange={this.onChangeTab}
                            activeKey={this.props.currentEstimative}
                            onEdit={this.onEdit}>

                            {
                                this.props.estimatives.map(estimative => {
                                    return (
                                        <TabPane
                                            tab={estimative.name.trim() == '' ? '(sem nome)' : estimative.name}
                                            key={estimative.id}
                                            closable={this.props.estimatives.length > 1}>
                                                {
                                                    estimative.items.length == 0 ?
                                                        <EmptyEstimative /> :
                                                        (
                                                            <TabContentStyle>
                                                                <EstimativeHeader
                                                                    estimativeId={estimative.id}
                                                                    estimativeName={estimative.name}
                                                                    onRemoveEstimative={this.remove}
                                                                    onChangeEstimativeName={this.props.requestUpdateEstimative}
                                                                    onToogleExpansionOnAllItems={(expanded) => this.requestToogleItemsEstimative(estimative.id)(expanded)}/>

                                                                {
                                                                    estimative.items.map(item => {
                                                                        return (
                                                                            <ItemContainer
                                                                                key={item.id}
                                                                                item={item}
                                                                                requestRemove={() => this.props.requestRemoveItemToEstimative(item.id, estimative.id)}
                                                                                requestUpdate={(item) => this.requestUpdateItem(estimative.id)(item)}
                                                                                requestClone={() => this.props.requestCloneItemInEstimative(item.id, estimative.id)} />
                                                                        )
                                                                    })
                                                                }
                                                            </TabContentStyle>
                                                        )
                                                }
                                        </TabPane>
                                    )

                                })
                            }
                        </Tabs>
                    </ColumnStyle>
                </Col>
            </Row>
        );
    }
}

const Estimatives = connect(
    (state) => ({
        estimatives: state.Calculator.estimatives,
        currentEstimative: state.Calculator.currentEstimative
    }),
    {
        requestNewEstimative,
        requestChangeCurrentEstimative,
        requestRemoveEstimative,
        requestUpdateEstimative,
        requestUpdateItemToEstimative,
        requestRemoveItemToEstimative,
        requestCloneItemInEstimative,
        requestToogleAllItemsExpansion
    }
)(EstimativesContainer)

export default Estimatives