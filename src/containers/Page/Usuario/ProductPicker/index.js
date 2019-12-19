import React from 'react';

import ProductSelector from './ProductSelector/index';
import getIconWrapper from '../IconRepository/index';

import processRawData from '../../../../helpers/calculator/index';

import './index.css';

export default class ProductPicker extends React.Component {
    constructor(props) {
        super(props);

        let productsAndCategories = processRawData(this.props.products);

        this.state = {
            categories: productsAndCategories.map((category, idx) => {
                if (idx === 0) // primeira categoria inicia selecionado
                    return {...category, selected: true}
                return {...category, selected: false}
            })
        }
    }

    handleClick(e, categoryName) {
        let categories = this.state.categories
            .map((category) => {
                if (category.categoryName === categoryName) return {...category, selected: true}
                else return {...category, selected: false}
            })

        this.setState({
            categories
        })
    }

    getIcon(product) {
        let LocalIcon = getIconWrapper(product);

        return <LocalIcon style={{ width: '30px', height: '30px' }} />
    }

    render() {
        let hasProducts = this.props.products && this.props.products.length > 0;

        let NoProductMatch = () => {
            return (
                <>
                    <span>Desculpe, não há produtos que correspondam à sua pesquisa</span>
                </>
            );
        };

        if (this.props.showOnlyProducts) {
            return (
                <section className="product-picker">
                    <div className="category-list">
                        <div className={hasProducts ? "only-products grid" : "only-products empty-message"}>
                            {
                                !hasProducts ?
                                <NoProductMatch /> :
                                this.props.products.map(product => {
                                    return (
                                        <div key={product.resource} className="product-selector">
                                            <ProductSelector
                                                shortDescription={product.shortDescription}
                                                label={product.label}
                                                resource={product.resource}
                                                onClick={this.props.onSelectProduct}>
                                                { this.getIcon(product.resource) }
                                            </ProductSelector>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <section className="product-picker">
                    <div className="category-list">
                        {
                            this.state.categories.map(category => {
                                return (
                                    <div key={category.categoryName} className="product-category">
                                        <button
                                            onClick={(e) => this.handleClick(e, category.categoryName)}
                                            className={category.selected ? "product-category-menu active" : "product-category-menu"}>
                                            {category.categoryName}
                                        </button>

                                        <div className={category.selected ? "products selected" : "products"}>
                                            {
                                                category.products.map(product => {
                                                    return (
                                                        <div key={product.resource} className="product-selector">
                                                            <ProductSelector
                                                                shortDescription={product.shortDescription}
                                                                label={product.label}
                                                                resource={product.resource}
                                                                onClick={this.props.onSelectProduct}>
                                                                { this.getIcon(product.resource) }
                                                            </ProductSelector>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            )
        }
    }
}