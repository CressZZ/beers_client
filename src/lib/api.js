import axios from 'axios';
import { Actions } from '../redux/actions';


export function getTags (dispatch){
    axios.get('http://13.209.98.23:3000/tags/list')
        .then(res=>{
            dispatch(Actions.getBeers(res.data))
        })
}

export function getBeers (dispatch){
    axios.get('http://13.209.98.23:3000/beers/list/A')
        .then(res=>{
            dispatch(Actions.getBeers(res.data))
        })
}

 