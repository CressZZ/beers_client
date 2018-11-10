import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as api from '../lib/api';

class Beers extends Component {
    componentDidMount(){
        const { dispatch } = this.props;
        api.getBeers(dispatch)
    }

    render() {
        const { beers } = this.props;
        console.log(beers)
        return (
            <div>
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
        tags: state.tages
    };
}

// 디스패치와 상태를 주입하려는 컴포넌트를 감싸줍니다.
export default connect(states)(Beers);


