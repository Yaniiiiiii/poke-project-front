import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div>
            <header className="container-fluid sticky-top row bg-danger mx-0 px-0">
                <Link to="pokemons/">
                    {' '}
                    <img
                        src="./assets/logo.png"
                        alt="pokemon"
                        className="w-50 rounded mx-auto d-block py-3"
                    ></img>
                </Link>
            </header>{' '}
        </div>
    );
};
