import axios from 'axios';
import { Actions } from '../redux/actions';


export function getTags (dispatch){

    return axios.get('http://13.209.98.23:3000/tags/list')
        .then(res=>{
            dispatch(Actions.getTags(res.data))
        })
}

export function getBeers (dispatch){

    return axios.get('http://13.209.98.23:3000/beers/list/A')
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

 