import store from "../store/store";
import { useSelector } from "react-redux"
import { INew } from '../interfaces/news';
import { NewsItem } from "../components/NewsItem";
import { FilterContainer } from './FilterContainer';

type RootState = ReturnType<typeof store.getState>

export const NewsContainer = (): JSX.Element => {

    const { news, filter_news } = useSelector((state: RootState | any) => state.news)

    return(
        <>
            { news.length > 0 ? <FilterContainer /> : <h1 className="text-center">No hay noticias</h1> }
            <div className="row container mx-auto d-flex justify-content-center my-5">
                {
                    filter_news ?  filter_news.map((item: INew, index: number) => (
                        <NewsItem item={ item } index={index} key={ index }/>
                    )) : 
                    news.map((item: INew, index: number) => (
                        <NewsItem item={ item } index={index} key={ index }/>
                    ))
                }
            </div>
        </>
    )
}