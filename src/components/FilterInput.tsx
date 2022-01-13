import { Dropdown, DropdownButton } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import store from "../store/store"
import { newsActionTypes } from "../types"
import { INew } from '../interfaces/news';

type FilterInputProps = {
    title: string
}

type RootState = ReturnType<typeof store.getState>

export const FilterInput = ({ title }: FilterInputProps) => {

    const dispatch = useDispatch();


    const { filter_by_source, filter_by_author, filter_by_date } = useSelector((state: RootState | any) => state.news)
    const { news } = useSelector((state: RootState | any) => state.news)
    

    const handleClick = () => {

        if(title === "Fuente") {
            dispatch({
                type: newsActionTypes.FILTER_BY_SOURCE
            })
        }
        if(title === "Autor") {
            dispatch({
                type: newsActionTypes.FILTER_BY_AUTHOR
            })
        }
        if(title === "Fecha") {
            dispatch({
                type: newsActionTypes.FILTER_BY_DATE
            })
        }
        
    }

    const handleFilter = (name: any) => {
        let updatedNews;

        if(title === "Fuente") {
            updatedNews = news.filter((item: INew) => item.source.name === name)
        }
        if(title === "Autor") {
            updatedNews = news.filter((item: INew) => item.author === name)
        }
        if(title === "Fecha") {
            updatedNews = news.filter((item: INew) => item.publishedAt === name)
        }

        dispatch({
            type: newsActionTypes.SET_FILTERED_NEWS,
            payload: updatedNews
        })
    }

    return(
        <div className="col-12 col-lg-4 mx-auto my-4 d-flex justify-content-center">
            <DropdownButton title={ title } onClick={ handleClick } >
                {
                    filter_by_source && filter_by_source.map((item : INew, index: number) => (
                        <Dropdown.Item key={ index } className="filter_button" onClick={ () => handleFilter(item.source.name) }>{ item.source.name } ({ item.count })</Dropdown.Item>
                    ))
                }
                {

                    filter_by_author && filter_by_author.map((item : INew, index: number) => (
                        <Dropdown.Item key={ index } className="filter_button" onClick={ () => handleFilter(item.author) }>{ item.author || "Sin Autor" } ({ item.count })</Dropdown.Item>
                    ))
                }
                {

                    filter_by_date && filter_by_date.map((item : INew, index: number) => (
                        <Dropdown.Item key={ index } className="filter_button" onClick={ () => handleFilter(item.publishedAt) }>{ item.publishedAt } ({ item.count })</Dropdown.Item>
                    ))
                }
                
            </DropdownButton>
        </div>
    )
}