import { useEffect, useState } from 'react';
import { fetchPokemons } from '../../services/pokeRepository';
import PokeItem from '../pokeItem/pokeItem';

function PokeList() {
    const initialState = [{ name: '', id: '', imgSrc: '' }];
    const [pokemons, setPokemons] = useState(initialState);

    useEffect(() => {
        const fetchAllPokemons = async () => {
            const getAllPokemons = await fetchPokemons();
            setPokemons(getAllPokemons);
        };
        fetchAllPokemons();
    }, []);

    return (
        <>
            {pokemons.slice(0, 151).map((pokemon) => (
                <ul key={pokemon.id}>
                    <PokeItem pokemon={pokemon}></PokeItem>
                </ul>
            ))}
        </>
    );
}

export default PokeList;
