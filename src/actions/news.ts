import { Dispatch } from "redux"
import { Action, newsActionTypes } from '../types/index';


export const getNewsAsync = ( startDate: string, finalDate: string, keyword: string, country: string ) => {
    
    const url = `https://newsapi.org/v2/top-headlines?q=${ keyword }&from=${ startDate }&to=${ finalDate }&country=${ country }&apiKey=8b641ed0ebd74829a3494274f61c5060`
    
    return async(dispatch: Dispatch<Action>) => {

        try {
            const request = await fetch(url);
            const response = await request.json();
            dispatch({
                type: newsActionTypes.GET_NEWS,
                payload: response.articles || []
            })
    
        } catch(error: any) {
            return error;
        }
    }
}

