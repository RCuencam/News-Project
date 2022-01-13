type SearchButtonProps = {
    title: string
}

export const SearchButton = ({ title }: SearchButtonProps): JSX.Element => {
    return(
        <div>
            <button 
            className="btn text-white w-50 mx-auto d-flex justify-content-center fw-bold py-2 my-4" 
            style={{ background: "#086A76", borderRadius: "8px" }}
            type="submit"
            >{ title }</button>
        </div>
    )
}