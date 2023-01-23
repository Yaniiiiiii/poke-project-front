import { useState } from 'react';
import { fetchPokemons } from '../../services/pokeRepository';

function SearchBar() {
    const initialState = '';
    const [query, setQuery] = useState(initialState);
    const [pokemons, setPokemons] = useState();

    const handleInput = (event: any) => {
        event.preventDefault();
        if (query === '') fetchPokemons();
        setQuery(event.target.value);
    };

    return (
        <form>
            <input type="text" value={query} onChange={handleInput}></input>
            <button> SEARCH </button>
        </form>
    );
}
export default SearchBar;
