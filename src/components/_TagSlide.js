import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'swiper';
import './tagSlide.scss';

/**
 * 함수형으로 만든  TagSlide.js 
 * 임시 파일입니다. 
 */
const TagSlide = (props) => {
    
    const {tags} = props;

    const tagList = tags.map(
        ({key, name}) => (
            <li id={key} key={key} className="swiper-slide itme">
                {name}
            </li>
        )
    );
    var mySwiper = new Swiper('.swiper-container',{
        observer:true, 
        slidesPerView: 'auto',
        spaceBetween: 20,
    });
    return (
        <div className="swiper-container tag_slid__container">
            <ul className="swiper-wrapper list">
                {tagList}
            </ul>
        </div>
        
    );


    
};
TagSlide.propTypes = {
    tags: PropTypes.array
};

export default TagSlide;