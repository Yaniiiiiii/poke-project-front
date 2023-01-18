import Pokemon from '../types/pokeType';

export interface pokeRepoInterface<Pokemon> {
    getAll: () => Promise<Array<Pokemon>>;
}
