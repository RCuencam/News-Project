type SearchInputProps = {
    title: string,
    type: string,
    name: string,
    setForm: (e: any) => void,
    form: {},
    value: string
}

export const SearchInput = ({ title, type, name, setForm, form, value }: SearchInputProps): JSX.Element => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div className="m-4">
            <label className="fw-bold mb-2">{ title }</label>
            <input 
            className="form-control"
            name={ name }
            type={ type } 
            onChange={ handleChange }
            value={ value }
            />
        </div>
    )
}