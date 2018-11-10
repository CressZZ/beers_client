// import React from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'swiper';
import './tagSlide.scss';

class TagSlide extends Component {
    // 컴포넌트 업데이트 시 mySwiper도 업데이트 (넓이 관련)
    componentDidUpdate(){
        this.mySwiper.slideTo(0);
        this.mySwiper.update();
    }

    // 마운트 시  new Swiper()
    componentDidMount(){
        this.mySwiper = new Swiper('.swiper-container',{
            slidesPerView: 'auto',
            spaceBetween: 20,
        });
    }

    // 태그 리스트
    tagList() {
        return this.props.tags.map(
        ({key, name}) => (
            <li id={key} key={key} className="swiper-slide itme">
                {name}
            </li>
            )
        );
    }

    render() {
        const { tags } = this.props;
        return (
            <div className="swiper-container tag_slid__container">
                <ul className="swiper-wrapper list">
                    {this.tagList()}
                </ul>
            </div>
            
        );
    }
};

TagSlide.propTypes = {
    tags: PropTypes.array
};

export default TagSlide;