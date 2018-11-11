import React from 'react';
import PropTypes from 'prop-types';

/**
 * 함수형으로 만든  BeerBtnBoxCart.js 
 */
const BeerBtnBoxBeers = (props) => {
    
  
    return (
        <div className ="beer__btnBox beer__btnBox--beers">
            <div 
                className = {`beer__btn beer__btn--del ${props.cartCnt > 0 ? '' : 'hide'}`}
                onClick={
                    props.onClick.bind(null, props.beer.id,props.cartCnt, 1,'del',props.beer.stock)
                }
                >
                빼기
            </div>
            
            <div 
                className =  {`beer__btn beer__btn--add ${props.beer.stock === 0 ? 'soldout' : ''}`} 
                onClick={
                    props.onClick.bind(null, props.beer.id,props.cartCnt,  1,'add',props.beer.stock)
                }
                >
                담기
            </div>
        </div>
    );


    
};
BeerBtnBoxBeers.propTypes = {
    cartCnt: PropTypes.number,
    beer: PropTypes.object,
    onClick: PropTypes.func,

};

export default BeerBtnBoxBeers;