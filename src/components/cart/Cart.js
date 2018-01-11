import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CartActions from '../../actions/cart';
import Shelf from './Shelf';

class Cart extends Component {
  render() {
    console.log(this.props)
    const CartItems = this.props.cart.map((item, idx) => {
      return <li key={idx}>{item}</li>
    });
    return (
      <div className="cart">
        <Shelf addItem={this.props.action.addToCart}></Shelf>
        <h2>Cart Items</h2>
        <ol>
          {CartItems}
        </ol>
      </div>
    )
  }
}

function mapStateToProps(state, prop) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(CartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
