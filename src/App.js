import React, { Component } from 'react';
import './App.css';
import * as ProductJson from './data/Products.json';
import ProductList from './components/product-list/product-list';

import {FormGroup , FormControl} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.ProductJson = ProductJson;
    this.state = { products: ProductJson, searchText: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let searchText = e.target.value ;
   
    let items = this.ProductJson.filter(product=>{
      if(product && product.name){
        return product.name.toLowerCase().includes(this.processText(searchText))
      }
      return false;
    })
    console.log(e.target.value);
    console.log(items);
    this.setState({
      products: items,
      searchText: e.target.value
    });
  }
  processText(searchText){
      try{
        let text = searchText;
        text = searchText.trim();
        text = text.toLowerCase()
        return text;
      }
      catch (error){
        console.log(error);
        return searchText;
      }
  }


  render() {
    const searchText = this.state.searchText;
    
    return (
      <div className="brantu-app-container">
          <div className="app-header">
                <div className="title">Brantu</div>
                <div className="sub-title">Search Products</div> 
          </div>
          <div className="app-content">
                <div className="search-input">
                  <form>
                    
                    <FormGroup>
                      <FormControl type="text" placeholder="Search ..." value={searchText}	onChange={this.handleChange} />
                    </FormGroup>
                   
                  </form>
                </div>
                <div className="products-container">
                 
                <ProductList products={this.state.products} />
                </div>
          </div>
          
      </div>
    );
  }
}

export default App;
