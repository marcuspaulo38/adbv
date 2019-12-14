import React from 'react';

import { connect } from 'react-redux';

import {
  Row,
  Col
} from 'antd';

import styled from 'styled-components';

import {
  ColumnStyle,
  TabContentStyle,
  Tabs,
  TabPane
} from './tab-metadata';

import SearchBar from './Searchbar/index';
import ProductPicker from './ProductPicker';
import openNotification from '../Calculator/Notification/index';
import Estimatives from './Estimatives/index';

import actions from '../../../redux/calculator/actions';

const {
  loadProducts,
  searchProducts,
  requestAddItemToEstimative
} = actions

const EstimativesStyle = styled.div`
  margin-top: 1rem;
`;

class CalculatorComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showOnlyProducts: false
    }

    this.onSearchProduct = this.onSearchProduct.bind(this);
    this.onProductSelected = this.onProductSelected.bind(this);
  }

  componentDidMount() {
    this.props.loadProducts();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.lastAddedItem.item !== this.props.lastAddedItem.item) {
      const { item, name, product } = this.props.lastAddedItem;

      openNotification(product, name, item);
    }
  }

  callback(key) {
    console.log(`-- main-tabs.selected: ${key}`)
  }

  onSearchProduct(e) {
    const q = e.target.value;
    this.props.searchProducts(q);

    this.updateState(q);
  }

  updateState(q) {
    this.setState({
      showOnlyProducts: (q.length > 0)
    })
  }

  onProductSelected(product, productLabel) {
    this.props.requestAddItemToEstimative(product, productLabel, this.props.currentEstimative);
  }

  render() {
    return (
      <>
        <Row type="flex" justify="space-around">
          <Col xs={24} sm={24} md={24} lg={20}>
                <p style={{margin: 0}}></p>
          

            <ColumnStyle>
              <Tabs animated={false} type="card">
                <TabPane tab="Editar" key="1">
                  <TabContentStyle>
                    <SearchBar onQueryChange={this.onSearchProduct}/>
                    <ProductPicker
                      key={this.props.products}
                      products={this.props.products}
                      onSelectProduct={this.onProductSelected}
                      showOnlyProducts={this.state.showOnlyProducts}/>

                  </TabContentStyle>
                </TabPane>

                
              </Tabs>
            </ColumnStyle>
          </Col>
        </Row>

        <EstimativesStyle>
            <Estimatives />
        </EstimativesStyle>
      </>
    );
  }
}

const Calculator = connect(
  (state) => ({
      products: state.Calculator.products,
      currentEstimative: state.Calculator.currentEstimative,
      lastAddedItem: state.Calculator.lastAddedItem
  }),
  {
      loadProducts,
      searchProducts,
      requestAddItemToEstimative
  }
)(CalculatorComponent)

export default Calculator