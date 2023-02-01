import { Link } from 'react-router-dom';
import { PokeInitial } from '../../types/types';

function PokeItem({ pokemon }: { pokemon: PokeInitial }) {
    return (
        <li className="list-inline-item ">
            <div className="border border-5 border-primary rounded-3 bg-primary-subtle">
                {' '}
                <Link
                    to={'/pokemons/' + pokemon.name.toLowerCase()}
                    key={pokemon.name}
                >
                    <h4 className="d-flex justify-content-center text-light bg-primary py-2">
                        {pokemon.name}
                    </h4>
                    <img
                        className=""
                        src={pokemon.imgSrc}
                        alt={pokemon.name}
                        width="200"
                    />
                </Link>
            </div>{' '}
        </li>
    );
}

export default PokeItem;
