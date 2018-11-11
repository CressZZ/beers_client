import React from 'react';
import PropTypes from 'prop-types';

/**
 * 함수형으로 만든  BeerBtnBoxCart.js 
 */
const BeerBtnBoxCart = (props) => {
    return (
        <div className ="beer__btnBox beer__btnBox--cart">
        <div 
            className = {`beer__btn beer__btn--del ${props.cartCnt > 0 ? '' : 'hide'}`}
            onClick={
               props.onClick.bind(null, props.beer.id,props.cartCnt, 1,'del',props.beer.stock)
            }
            >
            취소
        </div>
    </div>
    );
};

BeerBtnBoxCart.propTypes = {
    cartCnt: PropTypes.number,
    beer: PropTypes.object,
    onClick: PropTypes.func,

};

export default BeerBtnBoxCart;