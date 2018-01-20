import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import ProductNameTooltip  from '../product-tool-tip/product-tool-tip';
import './product-list.css';

class ProductList extends Component {
    render() {
        if(this.props.products.length>0){
            return (
              <div>
                {this.props.products.map((product , index) => (
                  <Col className="product" xs={12} sm={6} md={4} key={index}>
                     <div className="product-content">
                        <div className="product-img" style={{backgroundImage: "url(" + product.picture + ")"}}>
                            
                        </div>
                        <div className="product-price">
                          <div> {product.price}$</div>
                        </div>
                        <div className="product-name">
                        
                        <ProductNameTooltip name={product.name} id={'tooltip-'+index}>
                            {product.name}
                        </ProductNameTooltip>
                        </div>        
                     </div>
                    
                  </Col>
                ))}
              </div>
            );

        }
        else{
            return (
                <div className="no-product"> No Products found </div>
              );
        }

    }
  }

  export default ProductList;
  