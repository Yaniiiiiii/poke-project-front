import { useEffect, useState } from 'react';
import { fetchPokemons } from '../../services/pokeRepository/pokeRepository';
import Loading from '../loading/loading';
import PokeItem from '../pokeItem/pokeItem';
import SearchBar from '../searchBar/searchBar';

function PokeList() {
    const initialState = [{ name: '', id: '', imgSrc: '' }];
    const [pokemons, setPokemons] = useState(initialState);

    const [isLoading, setIsLoading] = useState(false);

    const initialStateQuery = '';
    const [query, setQuery] = useState(initialStateQuery);

    useEffect(() => {
        const fetchAllPokemons = async () => {
            setIsLoading(true);
            const getAllPokemons = await fetchPokemons();
            setPokemons(getAllPokemons);
            setIsLoading(false);
        };
        fetchAllPokemons();
    }, []);

    const filteredPokemons = pokemons.slice(0, 151).filter((pokemon) => {
        return pokemon.name
            .toLocaleLowerCase()
            .match(query.toLocaleLowerCase());
    });

    return isLoading || !pokemons ? (
        <Loading />
    ) : (
        <>
            <SearchBar query={query} setQuery={setQuery}></SearchBar>
            {filteredPokemons.slice(0, 151).map((pokemon) => (
                <ul key={pokemon.id}>
                    <PokeItem pokemon={pokemon}></PokeItem>
                </ul>
            ))}
        </>
    );
}

export default PokeList;
