// 액션 타입
export const GET_BEERS = 'GET_BEERS'
export const GET_TAGS = 'GET_TAGS'
export const SET_BEERS = 'SET_BEERS'
export const GET_PAGE = 'GET_PAGE'
export const NEXT_PAGE = 'NEXT_PAGE'




// 액션생산자
export const Actions = {
  /**
   * 맥주리스트 가져오기 액션 
   */
  getBeers(beers){
    return { 
      type: GET_BEERS,
      beers
    }
  },
  /**
   * 태그리스트 가져오기 액션 
   */
  getTags(tags){
    return { 
      type: GET_TAGS,
      tags
    }
  },

  getPage(){
    return { 
      type: GET_PAGE,
    }
  },

  nextPage(){
    return { 
      type: NEXT_PAGE,
    }
  }
}
