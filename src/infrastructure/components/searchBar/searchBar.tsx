import { useState } from 'react';
import { fetchPokemons } from '../../services/pokeRepository/pokeRepository';

function SearchBar() {
    const initialStateSearch = '';

    const [query, setQuery] = useState(initialStateSearch);

    const handleInput = (event: any) => {
        event.preventDefault();
        if (query === '') fetchPokemons();
        setQuery(event.target.value);
    };

    return (
        <>
            <form>
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
                    <button
                        className="btn btn-outline-primary -bg-subtle"
                        type="button"
                        id="button-addon2"
                    >
                        SEARCH
                    </button>
                </div>
            </form>
        </>
    );
}
export default SearchBar;
