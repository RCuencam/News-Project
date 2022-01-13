import { FilterInput } from "../components/FilterInput"

export const FilterContainer = (): JSX.Element => {
    return(
        <div className="container-fluid filter">
            <div className="row mx-auto align-items-center w-50 h-100 py-4">
                <FilterInput title="Fuente" />
                <FilterInput title="Autor"/>
                <FilterInput title="Fecha" />

            </div>
        </div>
    )
}