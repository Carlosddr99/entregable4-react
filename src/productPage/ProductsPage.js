
import React from 'react'
import {getPriceColor, changeOrderByPrice} from "./ProductPageFunction"


export default class ProductsPage extends React.Component {
state = {
    products: [
                {id: 1, name: 'Chachopo', price: 30},
                {id: 3, name: 'Navajas', price: 25},
                {id: 2, name: 'Chorizo a la sidra', price: 15}
            ],
    productFiltrado:[]        
        }

    filtrarProductos=(event)=> {
        let textFiltro = event.target.value;
        let filtroProducts = [];
        this.state.products.map((item)=>{
            if(item.name.includes(textFiltro)){
                filtroProducts.push(item);
            }
        })
        this.setState({productFiltrado: filtroProducts});
    }

render() {

return (
        <>
        <h1>Products</h1>
        <button onClick={()=>{this.setState(changeOrderByPrice(this.state.products))} }>Change order</button>
        {this.state.products.map(product => (
            <div key={product.id} style={{color: getPriceColor(product.price)}}>
            {product.name} - {product.price}
            </div>
        ))}
        <h1>Producos Filtrado</h1>
        <input type='text' onKeyUp={this.filtrarProductos}></input>
        {this.state.productFiltrado.map(product => (
            <div key={product.id} style={{color: getPriceColor(product.price)}}>
            {product.name} - {product.price}
            </div>
        ))}
        </>
    )}
}
