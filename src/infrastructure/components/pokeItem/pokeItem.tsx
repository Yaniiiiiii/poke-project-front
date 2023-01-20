import { Link } from 'react-router-dom';
import { PokeInitial } from '../../types/pokeType';

function PokeItem({ pokemon }: { pokemon: PokeInitial }) {
    return (
        <li>
            <div>
                {' '}
                <Link to={'/pokemons/' + pokemon.id} key={pokemon.id}>
                    <p>{pokemon.name}</p>
                    <img src={pokemon.imgSrc} alt={pokemon.name} />
                </Link>
            </div>{' '}
        </li>
    );
}

export default PokeItem;
