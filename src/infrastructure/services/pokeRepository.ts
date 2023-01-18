import Pokemon from '../types/pokeType';

export async function pokeRepo() {
    const response = await fetch(
        'https://unpkg.com/pokemons@1.1.0/pokemons.json'
    );
    if (!response.ok) {
        throw new Error('Failed to fetch Pokemon');
    }
    const result = await response.json();

    const pokemons = result.results.map((pokemon: any) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        imagen: `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`,
    }));
    console.log(pokemons);

    return pokemons; //const uniquePokemons= pokemos.filter((pokemon:any, index: number)=>pokemons.findIndex(()))
}
