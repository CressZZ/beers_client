import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.scss';

class Header extends Component {
  render() {
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
      </div>
    )
  }
}

export default Header