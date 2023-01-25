import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokemonDetails } from '../../services/pokeDetailsRepo/pokeDetailsRepository';
import { pokeDetails } from '../../types/export type';

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
            <div>
                <h2>{pokemon?.name.toLocaleUpperCase()}</h2>
                <img
                    src={pokemon?.imgSrc}
                    width="100px"
                    alt={pokemon?.name}
                ></img>
                <p>ID: {pokemon?.id}</p>
                <p>HIT POINTS: {pokemon?.hp}</p>
                <p>ATTACK: {pokemon?.attack}</p>
                <p>DEFENSE: {pokemon?.defense}</p>
            </div>
        </>
    );
}
export default Details;
