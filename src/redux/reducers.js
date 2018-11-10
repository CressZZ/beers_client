import { combineReducers } from 'redux';
import { GET_BEERS, GET_TAGS } from './actions';

/**
 * 맥주 리스트 관련 reducer
 */
function beers(state = [], action) {
  switch (action.type) {
  case GET_BEERS:
    return action.beers;
  default:
    return state;
  }
}


/**
 * 태그 관련 reducer
 */
function tags(state = [], action) {
  switch (action.type) {
  case GET_TAGS:
      return action.tags;
  default:
      return state;
  }
}

/**
 * combineReducers
 */
const toss = combineReducers({
  beers,
  tags
});

export default toss;