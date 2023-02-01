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
        <div className="mt-5 mx-4 d-flex flex-column justify-content-center align-items-center">
            <div className="mt-5 mx-4 d-flex flex-column align-items-center border border-primary-subtle border-5 rounded-3 col-full p-3    bg-warning-subtle">
                <h2 className="mt-2 text-primary ">
                    {pokemon?.name.toLocaleUpperCase()}
                </h2>
                <p className="text-danger mb-0">ID: {pokemon?.id}</p>
                <div>
                    {' '}
                    <img
                        src={pokemon?.imgSrc}
                        width="200px"
                        alt={pokemon?.name}
                    ></img>
                </div>{' '}
                <p className="text-dark mb-1">Hit Points: {pokemon?.hp}</p>
                <p className="text-dark mb-1">Attack: {pokemon?.attack}</p>
                <p className="text-dark mb-1">Defense: {pokemon?.defense}</p>
            </div>
        </div>
    );
}
export default Details;
