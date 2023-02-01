import { PokeInitial, Pokemon } from '../../types/types';

export async function fetchPokemons(): Promise<PokeInitial[]> {
    const response = await fetch(
        'https://unpkg.com/pokemons@1.1.0/pokemons.json'
    );

    if (!response.ok) {
        throw new Error('Failed to fetch pokemons');
    }

    const result = await response.json();

    const pokemons = result.results.map((pokemon: Pokemon) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        imgSrc: pokemon.sprites.normal.toLocaleLowerCase(),
    }));

    //FUNCTION TO FILTER REPEATED POKEMONS BROUGHT BY THE API
    const notRepeteatedPokemons = pokemons.filter(
        (pokemon: PokeInitial, index: number) =>
            pokemons.findIndex(
                (other: PokeInitial) => other.id === pokemon.id
            ) === index
    );

    return notRepeteatedPokemons;
}
