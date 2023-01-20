type Pokemon = {
    national_number: string;
    evolution: null;
    sprites: { normal: string; large: string; animated: string };
    name: string;
    type: [];
    total: number;
    hp: number;
    attack: number;
    defense: number;
    sp_atk: number;
    sp_def: number;
    speed: number;
};
export default Pokemon;

export type PokeInitial = {
    name: string;
    id: string;
    imgSrc: string;
};
