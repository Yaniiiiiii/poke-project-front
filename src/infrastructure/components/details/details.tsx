import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokemonDetails } from '../../services/pokeDetailsRepo/pokeDetailsRepository';
import { pokeDetails } from '../../types/types';

function Details() {
    const [pokemon, setPokemons] = useState<pokeDetails>();
    const { name } = useParams();

    useEffect(() => {
        async function getPokemon() {
            const fetchPokemon = await fetchPokemonDetails(name as string);
            setPokemons(fetchPokemon);
        }
        getPokemon();
    }, [name]);

    return (
        <>
            <div className="mt-5 mx-4 d-flex flex-column align-items-center">
                <h2 className="mt-2">{pokemon?.name.toLocaleUpperCase()}</h2>
                <p>ID: {pokemon?.id}</p>
                <img
                    src={pokemon?.imgSrc}
                    width="200px"
                    alt={pokemon?.name}
                ></img>
                <p className="mb-3">Hit Points: {pokemon?.hp}</p>
                <p className="mb-3">Attack: {pokemon?.attack}</p>
                <p className="mb-3">Defense: {pokemon?.defense}</p>
            </div>
        </>
    );
}
export default Details;
