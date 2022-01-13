import { Header } from "../components/Header";
import { SearchForm } from "../components/SearchForm";
import { NewsContainer } from "./NewsContainer";

export const AppContainer = () => {
    return(
        <div>
            <Header />
            <SearchForm />
            <NewsContainer />
        </div>
    )
}