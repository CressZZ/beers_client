import { combineReducers } from 'redux';
import { 
  GET_BEERS, 
  GET_TAGS, 
  TOGGLE_TAG,
  GET_PAGE, NEXT_PAGE } from './actions';

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
  // 초기 모든 태그 가져오기
  case GET_TAGS:
    return action.tags;
  default:
    return state;
  }
}

function selctedTagsKey(state = [], action){
  switch (action.type) {
    // 태그 토글
    case TOGGLE_TAG:
      return action.tags;
    default:
     return state;
  }
}

// function selctedTagsKey(state = [], action){
//   switch (action.type) {
//     // 태그 토글
//     case TOGGLE_TAG:
//       let _state = state.slice(0);
//       _state = toggleTag(_state, action.tag)
//       return _state;
//     default:
//      return state;
//   }
// }

/**
 * 태그 토글
 */
// function toggleTag(selectedTags, nowTag){
//   let index = selectedTags.indexOf(nowTag)
//   if(index > -1){
//     selectedTags.splice(index, 1)
//   }else{
//     selectedTags.push(nowTag)
//   }
//   console.log(dispatch)
//   return selectedTags;
// }

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
  beers, tags, selctedTagsKey, page
});

export default toss;