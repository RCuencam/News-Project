import { useState } from 'react';
import { SearchInput } from './SearchInput';
import { SearchButton } from './SearchButton';
import { useDispatch } from 'react-redux';
import { getNewsAsync } from '../actions/news';
import { reformatDate } from '../helpers/dateFormat';

export const SearchForm = (): JSX.Element => {

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        startDate: "",
        finalDate: "",
        keyword: "",
        country: ""
    })


    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(getNewsAsync(reformatDate(form.startDate), reformatDate(form.finalDate), form.keyword, form.country));    
    }

    return(
        <div className="form container my-5">
            <form onSubmit={ handleSubmit }>
                <div className="row w-75 mx-auto">
                    <div className='col'>
                        <SearchInput title="Fecha Inicio" type="date" name="startDate" setForm={ setForm } form={ form } value={ form.startDate }/>
                        <SearchInput title="Fecha Final" type="date" name="finalDate" setForm={ setForm } form={ form } value={ form.finalDate }/>
                    </div>
                    <div className='col'>
                        <SearchInput title="Palabra Clave" type="text" name="keyword" setForm={ setForm } form={ form } value={ form.keyword }/>
                        <SearchInput title="País" type="text" name="country" setForm={ setForm } form={ form } value={ form.country }/>
                    </div>
                </div>
                <SearchButton title="Buscar"/>
            </form>
        </div>
    )
} 