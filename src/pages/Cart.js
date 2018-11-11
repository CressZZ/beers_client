import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as api from '../lib/api';

import Beer from '../components/Beer';
import './cart.scss';
import common from '../lib/utils';
import Header from '../Header.js'



class Cart extends Component {
    constructor(props) {
        super(props);
        
        this.handleCartControl = this.handleCartControl.bind(this);
        this.handlerPurchase = this.handlerPurchase.bind(this);

    }

    /**
     * 라이프 싸이클 
     * 처음 마운트 될때 장바구니 리스트를 받아온다 
     */
    async componentDidMount(){

    }
    /**
     * 구매하기 처리
     */
    async handlerPurchase(e){
        e.preventDefault();
        const { dispatch , cart, totalPrice, history} = this.props;
        await api.purchase(dispatch, cart, cart.length, totalPrice, 1)
        await api.resetCart(dispatch, cart, cart.length, totalPrice, 1)

        // api.purchase(dispatch, cart, cart.length, totalPrice, 1)
        history.push('/beer_list');

    }
    /**
     * 장바구니 컨트롤 처리 
     */
    async handleCartControl(beerId, cartCnt, cnt, action,stock,e){
        const { dispatch , selctedTagsKey} = this.props;
        e.preventDefault();
    
        if(action === 'add'){
            if(stock === 0){
                // 재고 부족
                alert('해당 상품은 재고가 부족하여 장바구니에 다을 수 없습니다.')
                return false;
            } else{
                await api.cartAction(dispatch, 'plus', beerId, cnt)
            }
        }else{
            if(cartCnt < 0){
                // 없는 상품
                alert('해당 상품이 장바구니에 없습니다.')
                return false;
            }else {
                //수량 감소
                await api.cartAction(dispatch, 'minus', beerId, cnt)
            }
        }
        await api.getBeers(dispatch, selctedTagsKey);
    }



    /**
     * 개별 맥주 컴포넌트 렌더
     */
    rederBeer(){
        const { cart, match } = this.props;
        let _cart = cart.slice(0)
        let cartBeerComponent = _cart.map((beer, i) => {
            return(<Beer
                beer ={ beer }
                key ={i}
                cartCnt={beer.count}
                onClick={this.handleCartControl}
                match={match}
                />);
        })

        return cartBeerComponent;
    }

    render() {
        const {match} = this.props
        return (
            <div>
            <Header match={match}/>

            <div className="cart__container">
                <div className="cart">
                    {this.rederBeer()}
                </div>
                <div className="purchase__wrap">
                    <div className="purchase__infos">
                        <p className="purchase__info purchase__cnt">
                            총 구매수량 <em>{this.props.cart.length}</em> 개
                        </p>
                        <p className="purchase__info purchase__price">
                            총 결제금액 <em>{common.comma(this.props.totalPrice)}</em> 원
                        </p>
                    </div>
                    <div className="purchase__btn" onClick={this.handlerPurchase} >
                        구매하기
                    </div>
                </div>

            </div>
            </div>
         );
    }
}

Cart.propTypes = {
    beers: PropTypes.array,
    tags: PropTypes.array,
    page:  PropTypes.object,
    selctedTagsKey:  PropTypes.array,
    cart: PropTypes.array,
    totalPrice: PropTypes.number,

};

function states(state) {
 
    return {
        beers: state.beers,
        tags: state.tags,
        page: state.page,
        selctedTagsKey: state.selctedTagsKey,
        cart: state.cart,
        totalPrice: getTotalPrice(state.cart)

    };
}

function getTotalPrice(cart){
    return cart.reduce((totalPrice, beer)=>{
        totalPrice += ( beer.price * beer.count)
        return totalPrice;
    },0)
}

// 디스패치와 상태를 주입하려는 컴포넌트를 감싸줍니다.
export default connect(states)(Cart);


