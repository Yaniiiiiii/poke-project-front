import { useEffect, useState } from 'react';
import { pokeRepo } from '../services/pokeRepository';

function PokeList() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchAllPokemons = async () => {
            const getAllPokemons = await pokeRepo();
            setPokemons(getAllPokemons);
        };
        fetchAllPokemons();
    }, []);

    return (
        <ul>
            {/* {pokemons.map((pokemon) => (
                <li key={pokemon}>
                    <p>{pokemon}</p>
                </li>
            ))} */}
        </ul>
    );
}

export default PokeList;
