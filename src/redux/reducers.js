import { combineReducers } from 'redux';
import { GET_BEERS, GET_TAGS, GET_PAGE, NEXT_PAGE } from './actions';

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

function page(state = {now:0, length:5}, action) {
  switch (action.type) {
  case GET_PAGE:
    return state;
  case NEXT_PAGE:
    return Object.assign({}, state, {
      now: (state.now + 1)
    });

  default:
      return state;
  }
}

/**
 * combineReducers
 */
const toss = combineReducers({
  beers, tags, page
});

export default toss;