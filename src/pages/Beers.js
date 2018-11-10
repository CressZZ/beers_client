import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as api from '../lib/api';

import TagSlide from '../components/TagSlide';


class Beers extends Component {
    async componentDidMount(){
        const { dispatch } = this.props;
        await api.getBeers(dispatch)
        await api.getTags(dispatch)
    }

    render() {
        const { beers, tags } = this.props;
        console.log(beers)
        console.log(tags)
        return (
            <div>
                <TagSlide tags={tags}/>
                <h2>
                    맥주리스트
                </h2>
            </div>
         );
    }
}

Beers.propTypes = {
    beers: PropTypes.array,
    tags: PropTypes.array
};

function states(state) {
    return {
        beers: state.beers,
        tags: state.tags
    };
}

// 디스패치와 상태를 주입하려는 컴포넌트를 감싸줍니다.
export default connect(states)(Beers);


