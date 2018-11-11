import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as api from './lib/api';

import { Link } from 'react-router-dom'
import './header.scss';

class Header extends Component {
  async componentDidMount(){
    const { dispatch } = this.props;
      await api.getCart(dispatch)
  }

  render() {
    console.log(this.props.cart)
    return (
      <div className='header'>
        <p>
          맥주담기
        </p>
        <ul className='links'>
          <li>
            <Link to={'/beer_list'}>맥주 리스트</Link>
          </li>
          <li>
            <Link to={'/cart'}>장바구니</Link>
          </li>
          
        </ul>
          <div>
          {this.props.cart.length}
          </div>
      </div>
    )
  }
}
Header.propTypes = {
  cart: PropTypes.array,
};

function states(state) {
 
  return {
      cart: state.cart,
  };
}
// 디스패치와 상태를 주입하려는 컴포넌트를 감싸줍니다.
export default connect(states)(Header);

