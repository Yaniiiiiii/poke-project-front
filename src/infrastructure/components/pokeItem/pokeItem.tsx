import { Link } from 'react-router-dom';
import { PokeInitial } from '../../types/types';

function PokeItem({ pokemon }: { pokemon: PokeInitial }) {
    return (
        <li>
            <div>
                {' '}
                <Link
                    to={'/pokemons/' + pokemon.name.toLowerCase()}
                    key={pokemon.name}
                >
                    <p>{pokemon.name}</p>
                    <img src={pokemon.imgSrc} alt={pokemon.name} />
                </Link>
            </div>{' '}
        </li>
    );
}

export default PokeItem;
