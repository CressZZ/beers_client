import React from 'react';
import { Link } from 'react-router-dom'
import cartEmptyImg from '../assets/no_cart.png'
import './cartEmpty.scss'
import Header from '../Header.js'


/**
 * 함수형으로 만든  BeerBtnBoxCart.js 
 */
const CartEmpty = (props) => {
    return(
        <div>
            <Header match={props.match}/>
            <div className ="cartEmpty__container">
                <img className="cartEmpty__img" src={cartEmptyImg} alt="장바구니가 비어 있습니다" />
                <p className="cartEmpty__title">카트가 비었습니다.</p>
                <p className="cartEmpty__desc">
                    목록에서 원하는 맥주를<br />
                    카트에 담아 보세요
                </p>

                <div className="cartEmpty__btn">
                    <Link to='/beer_list'>목록으로 가기</Link>
                </div>
            </div>
        </div>
    )
};

CartEmpty.propTypes = {

};

export default CartEmpty;