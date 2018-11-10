// import React from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './beer.scss';
import common from '../lib/utils';

class TagSlide extends Component {
    componentDidUpdate(){

    }

    componentDidMount(){

    }

    render() {
        const {beer} = this.props;
        return(
            <div className ="beer__item">
                <div className ="beer__top">
                    <div className ="beer__img">
                        <img src={`${beer.image}`} alt={`${beer.name}`} />
                    </div>
                    <div className ="beer__info">
                        <p className ="beer__name"> {beer.name}</p>
                        <p className ="beer__tags"> {beer.tags.join(', ')}</p>
                        <p className ="beer__price"> {common.comma(beer.price)} 원</p>
                        <div className ="beer__count">
                            <p>재고 <em>{common.comma(beer.stock)}</em></p>
                            <p>수량 <em>0</em></p>
                        </div>
                    </div>
                </div>
                <div className ="beer__bottom">
                    <div className ="beer__btnBox">
                        <div className = "beer__btn beer__btn--del">
                            빼기
                        </div>
                        <div className = "beer__btn beer__btn--add">
                            담기
                        </div>
                    </div>
                </div>
            </div>
        )

    }
};

TagSlide.propTypes = {
    beer: PropTypes.object
};

export default TagSlide;