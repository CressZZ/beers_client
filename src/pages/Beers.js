import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as api from '../lib/api';
import { Actions } from '../redux/actions';
import Beer from '../components/Beer';
import './beers.scss';





import TagSlide from '../components/TagSlide';


class Beers extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        const { dispatch, page, beers } = this.props;
        if(beers.length > (page.now * page.length)){
            dispatch(Actions.nextPage())
        }
        return false;
    }

    async componentDidMount(){
        const { dispatch } = this.props;

        dispatch(Actions.getPage())
        await api.getBeers(dispatch)
        await api.getTags(dispatch)

    }
    rederBeer(){
        const { dispatch, page, beers } = this.props;
        let _beers = beers.slice(0)
        let targetBeers = _beers.splice(0, (page.now+1) * page.length)
        let targetBeerComponent = targetBeers.map((beer, i) => {
            return(<Beer
                beer ={ beer }
                key ={i}/>);
        })

        return targetBeerComponent;
    }

    render() {
        const { beers, tags } = this.props;
        console.log(beers)
        console.log(tags)
        return (
            <div className="beers__container">
                <TagSlide tags={tags}/>
                <div className="beers">
                    {this.rederBeer()}
                </div>
                <div className={`beers__btn--more ${'test'}`}  onClick={this.handleClick}>
                    더보기 + 
                </div>
            </div>
         );
    }
}

Beers.propTypes = {
    beers: PropTypes.array,
    tags: PropTypes.array,
    page:  PropTypes.object,
};

function states(state) {
    return {
        beers: state.beers,
        tags: state.tags,
        page: state.page,

    };
}

// 디스패치와 상태를 주입하려는 컴포넌트를 감싸줍니다.
export default connect(states)(Beers);


