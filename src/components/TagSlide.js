import React from 'react';
import PropTypes from 'prop-types';

const TagSlide = (props) => {
    const {tags} = props;

    const tagList = tags.map(
        ({key, name}) => (
            <li id={key} key={key} >
                {name}
            </li>
        )
    );
    return (
        <div>
            <ul>
                {tagList}
            </ul>
        </div>
    );
    
};

TagSlide.propTypes = {
    tags: PropTypes.array
};

export default TagSlide;