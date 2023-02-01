import { fetchPokemons } from '../../services/pokeRepository/pokeRepository';
import { queryProps } from '../../types/types';

function SearchBar({ query, setQuery }: queryProps) {
    const handleInput = (event: any) => {
        event.preventDefault();
        if (query === '') fetchPokemons();
        setQuery(event.target.value);
    };

    return (
        <>
            <form className="container-fluid fixed-top">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        value={query}
                        onChange={handleInput}
                        className="form-control outline-primary"
                        placeholder="Search a pokemon..."
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                    ></input>
                </div>
            </form>
        </>
    );
}
export default SearchBar;
