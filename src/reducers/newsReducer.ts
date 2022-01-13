import { INewsState } from '../interfaces/news';
import { Action } from '../types';
import { newsActionTypes } from '../types/index';
import { repititionCounterSource, repititionCounterAuthor, repititionCounterDate } from '../helpers/repititionCounter';

const initialState = {
    news: []
}

const newsReducer = (state: INewsState = initialState , action: Action) =>{

    switch(action.type) {

        case newsActionTypes.GET_NEWS:
            return {
                ...state,
                news: action.payload,
                filter_news: null
            }

        case newsActionTypes.SET_FILTERED_NEWS:
            return {
                ...state,
                filter_news: action.payload
            }
        case newsActionTypes.FILTER_BY_SOURCE:
            
            return {
                ...state,
                filter_by_source: repititionCounterSource(state.news),
                filter_by_author: null,
                filter_by_date: null
            }
            
        case newsActionTypes.FILTER_BY_AUTHOR:
            return {
                ...state,
                filter_by_author: repititionCounterAuthor(state.news),
                filter_by_date: null,
                filter_by_source: null
            }
        case newsActionTypes.FILTER_BY_DATE:
            return {
                ...state,
                filter_by_date: repititionCounterDate(state.news),
                filter_by_author: null,
                filter_by_source: null
            }
        default: 
            return state;
    }
}

export default newsReducer;