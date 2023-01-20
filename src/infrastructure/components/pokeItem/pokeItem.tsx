import React from 'react';
import { PokeInitial } from '../../types/pokeType';

const PokeItem = ({ pokemon }: { pokemon: PokeInitial }) => {
    return (
        <li key={pokemon.id}>
            <p>{pokemon.name}</p>
            <img src={pokemon.imgSrc} alt={pokemon.name} />
        </li>
    );
};

export default PokeItem;
