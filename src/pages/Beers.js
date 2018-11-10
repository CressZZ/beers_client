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
        
        this.handleClickMoreBtn = this.handleClickMoreBtn.bind(this);
        this.handleToggleTag = this.handleToggleTag.bind(this);

    }

    /**
     * 라이프 싸이클 
     * 처음 마운트 될때 DB로 부터 맥주 리스트와, 태그 리스트를 받아 온다. 
     */
    async componentDidMount(){
        const { dispatch, selctedTagsKey } = this.props;
        dispatch(Actions.getPage())
        if(selctedTagsKey.length == 0){
            await api.getTags(dispatch)
        }
    }



    /**
     * 태그 토글 버튼 클릭 처리 
     */
    async handleToggleTag(key, e){
        e.preventDefault();
        const { dispatch, selctedTagsKey } = this.props;
        let _selctedTagsKey = selctedTagsKey.splice(0)
        let index = _selctedTagsKey.indexOf(key)
        if(index > -1){
            _selctedTagsKey.splice(index, 1)
        }else{
            _selctedTagsKey.push(key)
        }

        dispatch(Actions.toggleTag(_selctedTagsKey));
        await api.getBeers(dispatch, _selctedTagsKey)
        console.log(e)
    }

    /**
     * 더보기 버튼 클릭 처리
     */
    handleClickMoreBtn(e){
        e.preventDefault();
        const { dispatch, page, beers, isMaxPage } = this.props;
        if(!isMaxPage){
            dispatch(Actions.nextPage())
        }
        return false;
    }

    /**
     * 개별 맥주 컴포넌트 렌더
     */
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
        const { beers, tags, isMaxPage, selctedTagsKey } = this.props;
        console.log(beers)
        console.log(tags)
        console.log(selctedTagsKey)

        return (
            <div className="beers__container">
                <TagSlide tags={tags} selctedTagsKey={selctedTagsKey} onClick={this.handleToggleTag}/>
                <div className="beers">
                    {this.rederBeer()}
                </div>
                <div className={`beers__btn--more ${isMaxPage ? 'hide' : ''}`}  onClick={this.handleClickMoreBtn}>
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
    selctedTagsKey:  PropTypes.array,
    isMaxPage: PropTypes.bool
};

function states(state) {
 
    return {
        beers: state.beers,
        tags: state.tags,
        page: state.page,
        selctedTagsKey: state.selctedTagsKey,
        isMaxPage: isMAxPage(state.page, state.beers)

    };
}

function isMAxPage(page, beers){
    if(beers.length >= ((page.now+1) * page.length)){
        return false;
    }else{
        return true;
    }
}

// 디스패치와 상태를 주입하려는 컴포넌트를 감싸줍니다.
export default connect(states)(Beers);


