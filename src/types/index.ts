import { INew } from '../interfaces/news';

export type Action = {
    type: string,
    payload?: INew | INew[] 
}

export const newsActionTypes = {
    GET_NEWS: '[API] GET NEWS',
    SET_FILTERED_NEWS: '[API] SET NEWS',
    FILTER_BY_SOURCE: '[API] FILTER NEWS BY SOURCE',
    FILTER_BY_AUTHOR: '[API] FILTER NEWS BY AUTHOR',
    FILTER_BY_DATE: '[API] FILTER NEWS BY DATE'
}
