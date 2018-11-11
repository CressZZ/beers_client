import { combineReducers } from 'redux';
import { 
  GET_BEERS, 
  GET_TAGS, 
  TOGGLE_TAG,
  GET_PAGE, NEXT_PAGE, RESET_PAGE,
  SET_CART
} from './actions';



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
 * DB에 있는 모든 태그 관련 reducer
 */
function tags(state = [], action) {

  switch (action.type) {
  // 초기 모든 태그 가져오기
  case GET_TAGS:
    return action.tags;
  default:
    return state;
  }
}

/**
 * 선택된 태그 관련 reducer
 */
function selctedTagsKey(state = [], action){
  switch (action.type) {
    // 태그 토글
    case TOGGLE_TAG:
      return action.tags;
    default:
     return state;
  }
}
/**
 * 페이지 관련 reducer
 */
function page(state = {now:0, length:5}, action) {
  switch (action.type) {
  case GET_PAGE:
    return state;
  case NEXT_PAGE:
    return Object.assign({}, state, {
      now: (state.now + 1)
    });
  case RESET_PAGE:
    return Object.assign({}, state, {
      now: 0
    });
  default:
      return state;
  }
}


/**
 * 장바구니 관련 reducer
 * 로그인 기능이 없으므로 user_id 1로 고정
 * 필요시 user_id 동적으로 변경 해야 함
 */
function cart(state=[], action){
  switch (action.type) {
    case SET_CART:
      return action.cart;
    default:
      return state;
  }
}

 
/**
 * combineReducers
 */
const toss = combineReducers({
  beers, tags, selctedTagsKey, page, cart
});

export default toss;