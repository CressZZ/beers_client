import axios from 'axios';
import { Actions } from '../redux/actions';


export function getTags (dispatch){
    return axios.get('http://13.209.98.23:3000/tags/list')
        .then(res=>{
            let tagsKey = []
            res.data.forEach((e)=>{
                tagsKey.push(e.key)
            })
            dispatch(Actions.getTags(res.data))
            dispatch(Actions.toggleTag(tagsKey))
            getBeers(dispatch, tagsKey)
        })
}

export function getBeers(dispatch, tagsKey){
    let tagsKeyS = tagsKey.join('_')
    return axios.get(`http://13.209.98.23:3000/beers/list/${tagsKeyS}`)
        .then(res=>{
            dispatch(Actions.getBeers(res.data))
        })

    /**
     * aysnc await 를 확실히 하고, 테스트 하기 위한 코드.
     * await를 사용하여 호출한 하수에서 Promise를 반환 하면 
     * (Beers.js의 await api.getBeers(dispatch)) 
     * 비동기 처리 가능
     */
    /*
    return new Promise((resolve) => {
        setTimeout(resolve, 3000); //3초의 setTimeout
    });
    */
}

/**
 * cart item 가져오기 
 */
export function getCart(dispatch, user_id = 1){
    return axios.get(`http://13.209.98.23:3000/cart/${user_id}`)
    // return axios.get(`http://localhost:3001/cart/${user_id}`)

        .then(res=>{
            dispatch(Actions.setCart(res.data.cart))
        })
}

/**
 * 카트 수량 변경 및 추가 삭제 
 */
export function cartAction(dispatch, action,beer_id, cnt, user_id = 1){
    
    return axios.get(`http://13.209.98.23:3000/cart/${action}/${user_id}/${beer_id}/${cnt}`)
    // return axios.get(`http://localhost:3001/cart/${action}/${user_id}/${beer_id}/${cnt}`)

        .then(res=>{
            dispatch(Actions.setCart(res.data.cart))
            if(action === "plus"){
                alert('장바구니에 담았습니다.')
            }else{
                alert('장바구니에서 제거하였습니다.')
            }
        })
}


/**
 * 구매하기
 */
export async function purchase(dispatch, cart, cnt, totalPrice, user_id){
    let purchaseBeer=[];
    cart.forEach((beer)=>{
        let _data = {}
        _data.id = beer.beer_id;
        _data.count = beer.count;
        purchaseBeer.push(_data);
    })
    let data = {purchaseBeer, user_id, cnt, totalPrice}
    
    return axios.post(`http://localhost:3001/purchase`, data)
        .then(res=>{
            console.log('구매하기 완료: ', data)
        })
    
}
/**
 * 장바구니 비우기
 */
export async function resetCart(dispatch, cart, cnt, totalPrice, user_id){
    return axios.get(`http://localhost:3001/cart/reset/${user_id}`)
        .then(res=>{
            dispatch(Actions.setCart([]))
            let purchaseBeerArr = cart.map((beer)=>{
                let _string = '';
                _string = `${beer.name} ${beer.count}개 `
                return _string; 
            })
            let purchaseBeerStr = purchaseBeerArr.join(',');
            purchaseBeerStr += `구매 완료 하였습니다. \n 총 구매하신 종류는 ${cnt} 종류, \n 총 구매하신 금액은 ${totalPrice} 입니다. `
            alert(`${purchaseBeerStr}`)
        })
}